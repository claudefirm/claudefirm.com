# claudefirm.com

Marketing site for ClaudeFirm. Static Vite + React + Tailwind, deployed to GitHub Pages.

## Local

```bash
pnpm install
pnpm dev
```

## Deploy

Push to `main` — `.github/workflows/pages.yml` builds and deploys to GitHub Pages.

Custom domain `claudefirm.com` is configured via `public/CNAME` + DNS A records pointing at GitHub Pages.
