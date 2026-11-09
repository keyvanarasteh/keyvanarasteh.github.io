# Keyvan Arasteh — personal site

Source for [keyvanarasteh.github.io](https://keyvanarasteh.github.io/). The
site is plain HTML, CSS, and JavaScript, with no runtime backend.

## Preview

```sh
python3 -m http.server 4174
```

Open `http://127.0.0.1:4174/`. Test at desktop and mobile widths. The language
switch uses English and Turkish copy in `assets/app.js`; English is the source
content in `index.html`. Update both when editing visible text.

## Publish

Merge or push changes to `main`. The [Publish portfolio](.github/workflows/pages.yml)
workflow checks the source, stages only public files, and deploys the artifact
through GitHub Pages. It can also be run manually from the Actions tab. The
Pages source must be set to **GitHub Actions**.

The public pages are `index.html`, `about/`, `projects/`, and `teaching/`.
The Qrofessor links and the about/teaching content were checked against the
public site and its local source. Update both English copy
and Turkish `data-tr` attributes for text added to the subpages.

The project links and writing links are intentionally explicit. Review them
when renaming repositories or articles. The portrait is a local copy of the
public GitHub profile image; replace `assets/keyvan-avatar.jpg` if it changes.

## GitHub activity

The home page shows the past-year GitHub contribution calendar, active days,
commit contributions, and pull request contributions. `scripts/update_activity.py`
queries GitHub's GraphQL contribution data and generates `assets/activity.json`
and `assets/activity.svg`. The Pages workflow regenerates both in the published
artifact on every push and hourly. The UI shows the UTC update time. GitHub's
scheduled workflows can run late, so the displayed time is the source of truth.

For local refresh, run:

```sh
python3 scripts/update_activity.py --json assets/activity.json --svg assets/activity.svg
```

## Source footprint

The language and framework list is a curated selection verified against public
repository manifests and the Qrofessor source. The source line figure is a dated
snapshot of nonblank lines on the default branches of owned, nonfork public and
private repositories. Common dependency and generated paths, binaries, and
assets are skipped. It is a repository total, so collaborator code can be
included; it is not a lifetime authored line count.

To refresh the aggregate locally, authenticate GitHub CLI as the account owner
and run `python3 scripts/count_code_lines.py`. It writes only the total,
repository count, date, and method to `assets/code-footprint.json`. Keep the
private inventory and source archives out of this repository.
