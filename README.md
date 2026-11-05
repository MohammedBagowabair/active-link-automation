# Active Link Automation & Electrical

Marketing site for **Active Link Automation & Electrical**, a security, automation and electrical business based in Bandar Baru Nilai, Negeri Sembilan.

The site is a static Vite + React + TypeScript build. There is no backend, database or server code. The quote form opens WhatsApp on the visitor’s device.

## Run locally

```bash
npm install
npm run dev
```

The dev server is [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` typechecks and writes the static site to `dist/`. Upload that folder, or point a static host at it.

## Deploy

**GitHub Pages** (project site)

The production build uses base `/active-link-automation/`, so assets resolve at [https://mohammedbagowabair.github.io/active-link-automation/](https://mohammedbagowabair.github.io/active-link-automation/). Local `npm run dev` stays at `/`. `npm run build` also writes `dist/404.html` (a copy of the page) and ships `public/.nojekyll`.

Pushing `main` runs `.github/workflows/deploy.yml`, which builds with npm and deploys `dist/` with the official Pages actions. In the repo, set Settings → Pages → Build and deployment → Source to **GitHub Actions**.

**Netlify**

- Build command: `npm run build`
- Publish directory: `dist`

**Vercel**

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

**Any static host**

Upload the contents of `dist/` after `npm run build`. No environment variables are required. Phone, WhatsApp, email and map links are public business details baked into the page.

## What is in the page

- Hero, trust counters (5.0, 1,070+ reviews, established 2014)
- Filterable services
- “Which system do you need?” selector
- CCTV repair, electrical services, industries, process, brand partnerships
- Google review excerpts, service areas, FAQ
- Quote form that composes a WhatsApp message in the browser
- Map, hours, payments and a sticky WhatsApp button
- LocalBusiness JSON-LD, Open Graph tags and a no-JavaScript contact fallback

Photography is stored in `public/images` (Unsplash) so the built site does not depend on an image CDN.
