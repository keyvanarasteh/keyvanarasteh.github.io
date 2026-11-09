# Keyvan Arasteh — personal site

Source for [keyvanarasteh.github.io](https://keyvanarasteh.github.io/). GitHub
Pages serves the repository root from `main`; there is no build step or runtime
backend. The site is plain HTML, CSS, and JavaScript.

## Preview

```sh
python3 -m http.server 4174
```

Open `http://127.0.0.1:4174/`. Test at desktop and mobile widths. The language
switch uses English and Turkish copy in `assets/app.js`; English is the source
content in `index.html`. Update both when editing visible text.

## Publish

Merge or push changes to `main`. GitHub Pages is configured to publish from
`main` at `/`, so no separate deployment command is needed. Check the Pages
build status in the repository settings after pushing.

The project links and writing links are intentionally explicit. Review them
when renaming repositories or articles. The portrait is a local copy of the
public GitHub profile image; replace `assets/keyvan-avatar.jpg` if it changes.
