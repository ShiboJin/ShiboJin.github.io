# Shibo Jin — personal website

A single-page English academic website built from [PRISM](https://github.com/xyjoey/PRISM), with content from Shibo Jin's CV and papers. The navigation scrolls to About, News, and Publications; CV opens the PDF in a new browser tab. The site exports as static HTML.

## Run locally

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is written to `out/` and can be served by any static host.

## Publish with GitHub Pages

Create a public repository named `<your-github-username>.github.io`, push this project to its `main` branch, and choose **GitHub Actions** as the publishing source under **Settings → Pages**. Every push to `main` then builds and publishes the site at `https://<your-github-username>.github.io/`.

This project uses root-relative asset paths, so the repository should be a personal site repository named exactly `<your-github-username>.github.io`. A regular project repository would need a `basePath` and asset URL changes.

## Edit content

- `content/`: English text, navigation, and BibTeX publications.
- `public/papers/`: research illustrations and public paper PDFs.
- `public/shibo-jin-cv.pdf`: downloadable CV.

The Environment Duels entry is listed as a manuscript under review, and its draft PDF is intentionally excluded from the public site.

## Credits

Based on PRISM by [Jiale Liu](https://github.com/xyjoey/PRISM), licensed under the [MIT License](LICENSE). Original content, portrait, papers, and research illustrations were added for this site.
