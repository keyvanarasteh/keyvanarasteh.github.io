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

The project links and writing links are intentionally explicit. Review them
when renaming repositories or articles. The portrait is a local copy of the
public GitHub profile image; replace `assets/keyvan-avatar.jpg` if it changes.
