# La Cave d’Antoine — Druento

A static, framework-free website: plain HTML, CSS and JavaScript, no build step, no dependencies, no CMS.

Open `index.html` directly in a browser, or serve the folder with any static file server. Deployable as-is to any static host (Cloudflare Pages, Netlify, GitHub Pages, etc.) — just upload the whole folder.

## Structure

```
index.html          Home ("Al bancone")
la-cave.html         La Cave (about + photo gallery)
contatti.html        Passa a trovarci (contact + opt-in map)
note-legali.html     Note legali e privacy
404.html             Not-found page (served automatically by most static hosts)
assets/
  css/style.css      All styles (one file, no preprocessor)
  js/main.js         All behaviour: mobile menu, photo lightbox, opt-in
                      Google Map, scroll reveal/parallax — vanilla JS,
                      no framework, progressive enhancement throughout
  images/            Photographs, favicon, social-card image
  fonts/             Self-hosted Cormorant Garamond and DM Sans (variable
                      woff2, SIL Open Font License) — no Google Fonts
                      request, the site has zero external dependencies
```

Each page is a self-contained HTML file with its header/footer markup inlined (no server-side includes), so the site works from the filesystem (`file://`) with no server and no CORS issues.

The complete research and source distinctions are in `research/BUSINESS-RESEARCH.md`. Component and photograph attribution is in `CREDITS.md`. Original photos have readable names in `assets/images`; their source manifest is in `research/photo-originals-manifest.json`. The images are not retouched. `langhe-atmosfera.jpg` is an additional Beatrice Zinetti landscape under the Unsplash License; it is clearly labeled as atmospheric imagery, not the venue.

The site is indexable (pages carry no `robots: noindex`; only `404.html` does, which is standard practice). Public launch still requires owner verification of photo reuse permissions, current service/hours and legal information — see `note-legali.html` and `CREDITS.md`, which document what's unverified. Telephone links initiate a call; they do not confirm a booking. Google Maps loads only on request — the map iframe has no `src` until the visitor clicks "Mostra la mappa Google". No form, database, analytics or live Instagram integration is installed.

## Before you publish

1. **Set the real domain.** Every page's `<head>` currently uses the placeholder `https://your-domain-here.example` for its canonical link, `og:url` and `og:image`/`twitter:image`. Replace it everywhere once you know the live domain:
   ```bash
   grep -rl "your-domain-here.example" *.html robots.txt sitemap.xml | xargs sed -i 's~your-domain-here.example~YOUR-REAL-DOMAIN~g'
   ```
   Each occurrence is also flagged with an HTML comment at the top of every page's `<head>`.
2. **Confirm photo permissions and business details** with the venue owner (see `note-legali.html`).
3. `robots.txt` and `sitemap.xml` are in place at the repo root, ready to serve from the domain root once deployed.

Design rules and component patterns were adapted from the user's Design Memory repository without modifying it. The project's type scale intentionally uses large editorial serif headings, smaller utility labels, warm ivory/wine colors and an arched hero image. The complete section-by-section provenance is in `research/DESIGN-SYSTEM-MAP.md`. Layered parallax, scroll reveals, headline reveals and the letter-swap nav links are all hand-written vanilla JS/CSS ports of the original React implementation — same behaviour, same accessibility (reduced-motion support, keyboard focus, `aria-current`), no runtime dependency. See `CREDITS.md` for each reused pattern's origin.

Fonts (Cormorant Garamond, DM Sans) are self-hosted as variable woff2 files in `assets/fonts/` — no Google Fonts request, no external dependency of any kind. The site runs entirely offline.

Validation: every page checked for console errors; responsive widths 320, 390, 768 and desktop inspected. Menu navigation (native `<dialog>`, Escape-to-close, focus trap), photo lightbox, opt-in map show/hide, and the FAQ `<details>` accordion were checked in the browser. Phone and social links were inspected without calling the business or posting.
