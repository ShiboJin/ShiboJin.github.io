# Publish this site with GitHub Pages

The site is a Next.js static export. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds it and publishes `out/` after each push to `main`.

1. Sign in to GitHub and create a **public** repository named `<your-username>.github.io`. Leave it empty: do not add a README, license, or `.gitignore` on GitHub.
2. From this project folder, connect the local Git repository and push it:

   ```bash
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Wait for the **Deploy personal website to GitHub Pages** workflow to finish. Visit `https://<your-username>.github.io/`.

Future changes are published by committing and pushing to `main`. The workflow installs dependencies with `npm ci`, builds the static site, and uploads the generated `out/` directory. Its `.nojekyll` file ensures that GitHub Pages serves Next.js's `_next` assets.

The repository name matters: this site's asset URLs start at `/`, so it is configured for a personal site at the domain root. A project repository under `/<repository>/` needs code changes before deployment.

The CV PDF, portrait, and publication images under `public/` will be publicly accessible. Source CV documents and duplicate source PDFs at the project root are excluded by `.gitignore`.
