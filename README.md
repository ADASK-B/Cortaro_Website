# Cortaro Website

Marketing site for **Cortaro** — an AI software studio.
Pure static HTML / CSS / JS. No build step. Deploys directly to GitHub Pages.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8080

# or Node
npx serve .
```

Then visit http://localhost:8080.

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. as `cortaro-website`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / root (`/`)
4. Save. After ~1 minute the site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

The `.nojekyll` file is included so GitHub Pages serves the files as-is
(no Jekyll processing).

### Custom domain (optional)

Add a `CNAME` file at the repo root containing your domain
(e.g. `cortaro.com`), then configure DNS to point to GitHub Pages.

## Customizing

- **Copy & sections** — edit `index.html`.
- **Colors, spacing, layout** — edit CSS variables at the top of `styles.css`.
- **Contact email** — search for `hello@cortaro.example` in `script.js` and replace
  with your real address. The form currently opens the user's mail client; for
  server-side submission, swap the handler for a service like Formspree or
  Web3Forms.
- **Brand mark / favicon** — `assets/favicon.svg`.

## File layout

```
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── favicon.svg
├── .nojekyll
└── README.md
```
