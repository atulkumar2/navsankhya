# Navsankhya

Personal knowledge, writing, and experimentation website for **navsankhya.com**.

Status: local Astro site with a Markdown resume, IT and non-IT blog foundations, and external profile links. Not deployed.

## Run locally

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4321/`. Use `npm run check`, `npm test`, and `npm run build` for verification; `npm run preview` serves the production build.

The initial implementation uses Astro 5 for compatibility with the installed Node 20 runtime. `unifont` is pinned to 0.7.3 within Astro's supported range to avoid a newer transitive dependency requiring Node 22. Revisit this pin and upgrade the runtime/framework before public launch.

## Edit content

- Resume: `src/content/pages/resume.md`. Phone, email, client names, and business metrics from the source resume are omitted. The original PDF is not copied into this repository or served for download.
- Profiles: `src/content/links.json`.
- Articles: add Markdown to `src/content/articles/it/` or `src/content/articles/non-it/`. Use the draft templates and set `draft: false` when ready. Future dates stay unpublished until a subsequent build on or after that date in Asia/Kolkata.
- Articles generate section listings, detail pages, homepage entries, RSS, and sitemap through the same publication filter.
- The resume's Print resume button uses a print stylesheet; the browser can save a PDF.

Production origin is configured as `https://navsankhya.com`. Vercel deployment remains a later step. Preview builds with `VERCEL_ENV=preview` have noindex metadata and disallow crawling.

## Specification index

- [Product specification](docs/product-spec.md): purpose, scope, routes, and acceptance criteria.
- [Content specification](docs/content-spec.md): Markdown structure, metadata, templates, and editorial rules.
- [Design specification](docs/design-spec.md): layout, navigation, reading experience, and accessibility.
- [Technical specification](docs/technical-spec.md): proposed architecture, localhost workflow, and future Vercel deployment.
- [Implementation roadmap](docs/roadmap.md): ordered tasks and decisions still needed.
- [Privacy safeguards](docs/privacy.md): commit checks, restricted files, and publication review.

## Starting assumptions

- One author maintains content in Git using Markdown.
- The first version is a public, primarily static site without accounts or a database.
- Work starts locally; deployment and domain configuration happen in a later phase.
- Astro with TypeScript is the implemented stack, with a committed npm lockfile.
- Resume details, biography, external profiles, and articles must come from the owner; do not invent them.

The specifications are the baseline for implementation. Update them when product or architecture decisions change.
