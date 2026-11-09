#!/usr/bin/env python3
"""Count current source lines in owned repos; publish only an aggregate snapshot.

Run locally with GitHub CLI authenticated as the owner. Do not run in public CI.
"""
from datetime import datetime, timezone
import concurrent.futures
import json
import subprocess
import tarfile
import urllib.request
from pathlib import Path, PurePosixPath

raw = subprocess.run(['gh','api','user/repos?per_page=100&affiliation=owner','--paginate'],capture_output=True,text=True,check=True).stdout
repos = []
for line in raw.splitlines():
    try:
        data=json.loads(line)
        if isinstance(data,list): repos.extend(data)
    except json.JSONDecodeError: pass
repos=[r for r in repos if not r['fork'] and r['size']>0 and r['owner']['login'].lower()=='keyvanarasteh']
token=subprocess.run(['gh','auth','token'],capture_output=True,text=True,check=True).stdout.strip()
extensions={'.rs','.ts','.tsx','.js','.jsx','.mjs','.cjs','.py','.dart','.swift','.kt','.kts','.java','.c','.cc','.cpp','.h','.hpp','.cs','.go','.php','.svelte','.vue','.astro','.rb','.sh','.bash','.zsh','.ps1','.html','.css','.scss','.sass','.less','.sql','.lua','.r','.m','.mm','.pl','.ex','.exs','.scala','.fs','.fsx'}
exclude_parts={'node_modules','vendor','vendors','dist','build','target','.git','.dart_tool','.next','.svelte-kit','.astro','coverage','third_party','third-party','thirdparty','pods','generated','gen','out','venv','.venv','site-packages','bower_components','submodules','external','deps'}
completed=0; total_lines=0; failed=[]

def count(repo):
    url=f"https://api.github.com/repos/{repo['full_name']}/tarball/{repo['default_branch']}"
    request=urllib.request.Request(url,headers={'Authorization':f'Bearer {token}','User-Agent':'Keyvan-portfolio-line-counter','Accept':'application/vnd.github+json'})
    lines=0; files=0
    with urllib.request.urlopen(request,timeout=120) as response:
        with tarfile.open(fileobj=response,mode='r|gz') as archive:
            for member in archive:
                if not member.isfile() or member.size>5_000_000: continue
                path=PurePosixPath(member.name)
                parts=[part.lower() for part in path.parts[1:]]
                if any(part in exclude_parts or part.startswith('.') for part in parts[:-1]): continue
                name=path.name.lower()
                if name.endswith(('.min.js','.min.css','.generated.ts','.generated.js','.g.dart','.freezed.dart','.pb.go','.pb.rs','.lock')): continue
                if path.suffix.lower() not in extensions: continue
                f=archive.extractfile(member)
                if f is None: continue
                content=f.read()
                if b'\0' in content: continue
                lines+=sum(bool(line.strip()) for line in content.splitlines())
                files+=1
    return lines,files

with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
    futures={pool.submit(count,r):r for r in repos}
    for future in concurrent.futures.as_completed(futures):
        repo=futures[future]
        try:
            lines,files=future.result()
            total_lines+=lines
        except Exception as e:
            failed.append((repo['full_name'],str(e)))
        completed+=1
        if completed%20==0 or completed==len(repos): print(json.dumps({'completed':completed,'total':len(repos),'lines':total_lines,'failures':len(failed)}),flush=True)
if failed:
    raise RuntimeError(f'{len(failed)} repositories could not be read; no snapshot was published')
summary={'asOf':datetime.now(timezone.utc).date().isoformat(),'sourceLines':total_lines,'repositories':len(repos),'method':'Nonblank source lines on default branches of owned, nonfork public and private repositories; common dependency and generated paths excluded; collaborator code may be included.'}
Path('assets/code-footprint.json').write_text(json.dumps(summary,indent=2)+'\n')
print(json.dumps(summary),flush=True)
