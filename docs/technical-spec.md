# Technical specification

## Proposed architecture

Implementation status: the local foundation now exists. See [implementation notes](implementation-notes.md) for delivered behavior, privacy decisions, and remaining launch work. The architecture and commands below form the original baseline; the proposed Astro stack is now implemented.

Use **Astro + TypeScript**, static generation, Markdown content collections, and plain CSS with shared design tokens. This suits a content-first personal site with little client-side JavaScript. This is a proposed implementation decision, not an installed application.

Vercel is the intended host. No Sites registration, hosting manifest, deployment, DNS changes, or external service setup is required for this local specification phase.

## Application structure

```text
src/
  components/                    # header, footer, article card, metadata
  layouts/                       # base and article layouts
  pages/                         # routes from the product specification
  content/                       # source content from the content specification
  styles/                        # tokens, global, prose, print
  lib/                           # validated content queries and publication rules
public/                          # static assets
docs/                            # these specifications
```

Use one validated publication filter for listings, detail routes, feeds, and sitemap so unpublished content cannot leak through a secondary output. Generate article routes only from eligible content. Validate article metadata and links at build time.

## Local development contract

When implementation begins:

1. Select a supported Node.js LTS version compatible with the chosen Astro release and Vercel; record it in project configuration.
2. Scaffold in this repository, preserve the specifications, and commit one package-manager lockfile.
3. Provide scripts `dev`, `check`, `build`, and `preview`.
4. `npm run dev` serves localhost; target `http://localhost:4321` unless occupied.
5. `npm run check` checks framework and TypeScript correctness.
6. `npm run build` generates production static output in `dist/`.
7. `npm run preview` serves that output for local verification.

These commands are implementation targets; they do not run until application files exist. Verify current framework and host documentation when selecting versions and configuring deployment.

## SEO and discovery

- Set the production site origin to `https://navsankhya.com` for canonical URLs.
- Supply unique page titles, descriptions, language, and Open Graph metadata.
- Generate sitemap and RSS from eligible content only, with absolute production URLs.
- Article feed entries include section-qualified routes to avoid cross-section slug collisions.
- Decide the preferred apex/www hostname before launch and redirect the alternate hostname.
- Preview deployments should be excluded from indexing; localhost stays local.

## Performance and privacy

Generate static HTML and minimize client JavaScript. Optimize images, specify dimensions, and lazy-load below-the-fold media. Use system fonts initially. No analytics, tracking scripts, third-party embeds, database, or secrets are needed in version one.

## Verification

Require successful type/framework checks and production build. Add focused tests for publication filtering, date boundaries in Asia/Kolkata, route construction, and invalid metadata handling. Inspect generated output to confirm draft and future content are absent. Manually verify responsive layout, keyboard access, code/table overflow, external links, metadata, RSS, sitemap, and resume printing.

## Later Vercel deployment

After the local version is accepted, connect the source repository to Vercel, configure the Astro-compatible static build with output `dist/`, and validate a preview deployment. Attach `navsankhya.com`, configure DNS using the values Vercel provides at that time, verify HTTPS and hostname redirects, then validate production routes, metadata, feed, and sitemap.

No deployment is performed by these specifications. Deployment configuration must be checked against the host's current documentation during that phase.
