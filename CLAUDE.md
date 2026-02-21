# CLAUDE.md — asapps.fr

## Project Overview

Static portfolio website for **Antoine Barrault**, a mobile app expert. The site showcases iOS apps and professional experience at [asapps.fr](https://asapps.fr). It is hosted on **GitHub Pages** with the custom domain configured via `CNAME`.

## Tech Stack

- **HTML5** — Semantic markup, no templating engine
- **CSS3** — Custom design system with CSS custom properties (no preprocessor)
- **Vanilla JavaScript** — No frameworks or libraries
- **GitHub Pages** — Static hosting, auto-deploys on push to default branch
- **Google Fonts** — Instrument Serif, Geist, Geist Mono

There is **no build step**, no bundler, and no package.json. Files are served as-is.

## Repository Structure

```
/
├── index.html              # Home page
├── apps.html               # App showcase listing
├── about.html              # Bio and experience
├── work.html               # Work history
├── blog.html               # Blog articles
├── css/
│   └── style.css           # Main design system (~1050 lines)
├── js/
│   └── main.js             # Theme toggle, scroll reveal, nav logic (~80 lines)
├── public/
│   └── images/             # Shared images (avatar, etc.)
├── bestfootball/           # World Cup 2026 app landing page
│   ├── index.html
│   ├── privacy.html
│   ├── terms.html
│   └── fr/                 # French version
├── eggtime/                # Egg timer app landing page
│   ├── index.html
│   ├── contact.html
│   ├── privacy.html
│   └── terms.html
├── julesconnector/         # AI coding client app landing page
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── prmanager/              # GitHub PR manager app landing page
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── sixnations/             # Rugby championship app landing page
│   ├── index.html
│   ├── privacy.html
│   ├── terms.html
│   └── fr/                 # French version
├── CNAME                   # Custom domain: asapps.fr
├── robots.txt              # SEO: allow all
├── sitemap.xml             # SEO: 8 primary URLs
├── app-ads.txt             # AdSense publisher ID
├── favicon.ico             # Favicon
└── .gitignore
```

Each app directory is a self-contained mini-site with its own landing page, privacy policy, and terms of service. Some apps (`bestfootball`, `sixnations`) have French translations under `fr/`.

## Design System

The CSS design system is called **"Warm Noir Editorial"** and lives entirely in `css/style.css`.

### CSS Variables (`:root`)

| Category | Variables |
|----------|-----------|
| Backgrounds | `--bg`, `--bg-raised`, `--bg-card`, `--bg-card-hover` |
| Text | `--text`, `--text-muted`, `--text-faint` |
| Accent | `--accent`, `--accent-hover`, `--accent-dim`, `--accent-secondary` |
| Borders | `--border`, `--border-hover` |
| Typography | `--font-display`, `--font-body`, `--font-mono` |
| Layout | `--nav-h` (72px), `--max-w` (1120px), `--content-w` (760px), `--ease` |

### Theming

- **Dark mode** is the default (`:root` block)
- **Light mode** is applied via `[data-theme="light"]` selector
- Theme preference is stored in `localStorage` under the key `theme`
- An inline `<script>` in `<head>` applies the saved theme before first paint to avoid flash
- All color pairs are verified for **WCAG 2.1 AA** contrast ratios (documented in CSS comments)

### Naming Conventions

- **BEM-inspired**: `.nav__inner`, `.card__title`, `.btn--primary`
- **Kebab-case** for all CSS class names
- `__` (double underscore) separates component from element
- `--` (double hyphen) separates component from modifier

### Responsive Breakpoints

- Mobile-first approach
- `768px` — Tablet
- `992px` — Desktop (some layouts)
- `1024px` — Desktop (other layouts)
- Uses CSS Grid and Flexbox (no float-based layouts)

### Component Classes

- Cards: `.card`, `.service-card`, `.post-card`
- Buttons: `.btn--primary`, `.btn--outline`, `.btn--sm`
- Layout: `.section`, `.container`, `.container--narrow`
- Animation: `.reveal` / `.revealed` for scroll-triggered entrance

## JavaScript Patterns (`js/main.js`)

All JS is vanilla with no dependencies:

- **Theme toggle** — Toggles `data-theme` attribute, persists to `localStorage`
- **Scroll reveal** — `IntersectionObserver` adds `.revealed` class on scroll
- **Nav scroll effect** — Adds `.scrolled` class when `scrollY > 24`
- **Mobile menu** — Hamburger toggle with `.active` / `.open` states
- **Active nav link** — Detects current page from `window.location.pathname`
- Uses `{ passive: true }` on scroll listeners for performance

## Security Headers

Each HTML page includes a Content-Security-Policy meta tag:
- `default-src 'self'`
- `script-src 'self' 'unsafe-inline'` (for the theme init script)
- `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`
- `font-src 'self' https://fonts.gstatic.com`
- `object-src 'none'`, `frame-ancestors 'none'`

## SEO

- Every page has `<title>`, `<meta name="description">`, canonical URL, and Open Graph tags
- `robots.txt` allows all crawlers
- `sitemap.xml` lists 8 primary URLs
- Some app pages use **JSON-LD structured data** (schema.org)

## Development Workflow

### Local Development

No build tools are needed. Open any HTML file in a browser, or use a local server:

```sh
# Python
python3 -m http.server 8000

# Or any static file server
npx serve .
```

### Deployment

Push to the default branch. GitHub Pages automatically serves the site at `asapps.fr`.

### Testing

No automated test suite. Verify changes by opening pages in a browser and checking:
- Both dark and light themes
- Mobile responsive layouts (test at 375px, 768px, 1024px+)
- Navigation links and active states
- Scroll reveal animations

## Conventions for AI Assistants

1. **No build step** — Do not introduce bundlers, transpilers, or package managers unless explicitly requested. Keep files servable as-is.
2. **Vanilla only** — Do not add JS frameworks/libraries. Keep JavaScript dependency-free.
3. **Use the design system** — Always use CSS variables from `:root` instead of hardcoded colors. Follow the BEM naming convention.
4. **Accessibility** — Maintain WCAG 2.1 AA contrast ratios. Use semantic HTML, `aria-` attributes, and `alt` text.
5. **Theme support** — Any new UI must work in both dark and light modes.
6. **Mobile-first** — Write mobile styles first, then add breakpoints for larger screens.
7. **File organization** — New app pages go in their own directory with `index.html`, `privacy.html`, and `terms.html`. French translations go in a `fr/` subdirectory.
8. **CSP compliance** — Do not add external scripts or resources without updating the Content-Security-Policy meta tag in the affected pages.
9. **SEO** — Every new page needs `<title>`, `<meta description>`, canonical URL, and OG tags. Update `sitemap.xml` when adding pages.
10. **Minimal changes** — This is a production site. Keep changes focused and avoid unnecessary refactoring.
