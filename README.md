# Active Link Automation & Electrical

Static marketing site for Active Link Automation & Electrical, Bandar Baru Nilai, Negeri Sembilan. Security, automation, and electrical. The quote form builds a WhatsApp message in the browser. There is no server and no database.

## Run locally

```bash
npm install
npm run dev
```

The dev server is [http://127.0.0.1:47321](http://127.0.0.1:47321). During development the base path is `/`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` sets the Vite base to `/active-link-automation/` so asset URLs match a GitHub Pages project site. Preview the built files at [http://127.0.0.1:47322/active-link-automation/](http://127.0.0.1:47322/active-link-automation/).

The output is the `dist/` folder. Upload those files as static hosting. Do not add a GitHub Actions workflow unless you want one. If the site is served from the domain root instead of `/active-link-automation/`, change `base` in `vite.config.ts` to `/` and build again.

## Contact shown on the site

- Phone and WhatsApp: +60 16-666 0106
- Email: activelink0724@gmail.com
- Workshop: PT 7166, Ground Floor, Jalan BBN 1/1A, Putra Point, Bandar Baru Nilai
