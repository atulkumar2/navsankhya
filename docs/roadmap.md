# Implementation roadmap

## Phase 0 — Specification baseline

- [x] Define site purpose and initial sections.
- [x] Define routes, content schemas, and authoring templates.
- [x] Propose design and technical foundations.
- [x] Document local development and future hosting expectations.

## Phase 1 — Local foundation

- [x] Implement the proposed Astro stack.
- [x] Scaffold the application and add development scripts and lockfile.
- [x] Build shared navigation, layouts, typography, footer, and 404.
- [x] Implement content validation and shared publication rules.
- [x] Render all initial pages with clear empty states.

Done when the site starts on localhost and every primary route works.

## Phase 2 — Publishing experience

- [x] Implement article routes, section listings, and homepage recent posts.
- [x] Style code blocks, tables, media, and experiment content.
- [x] Add resume rendering and print support; original PDF download omitted for privacy.
- [x] Add grouped external links.
- [x] Add page metadata, canonical URLs, RSS, and sitemap.
- [x] Add draft article templates for author use.

Done when a Markdown change updates all appropriate outputs through a production build.

## Phase 3 — Content and local review

- [ ] Add owner-approved introduction and resume content.
- [x] Add actual LinkedIn and X profile links; other resources can follow.
- [ ] Add the first IT and non-IT articles; include an experiment when available.
- [ ] Verify publication rules, build, keyboard use, responsive layouts, and resume printing.
- [ ] Review public content for accuracy and intentionally shared personal information.

Done when local production preview is ready for launch review.

## Phase 4 — Vercel and domain

- [ ] Configure the repository and Vercel preview deployment.
- [ ] Verify current build/runtime compatibility and preview indexing controls.
- [ ] Connect navsankhya.com and select apex/www redirect behavior.
- [ ] Verify production HTTPS, pages, redirects, SEO metadata, feed, and sitemap.
- [ ] Document the final deployment and content-update workflow.

## Owner input needed during implementation

These details do not block the specification baseline:

- Public display name, short biography, and optional portrait.
- Resume details and optional downloadable PDF.
- Public profile links and curated external resources.
- First article topics and experiment results.
- Preferred visual colors, if different from the restrained default.
- Whether additional languages will be needed; English is the initial assumption.

## Initial decision record

| Decision | Baseline | Reason |
| --- | --- | --- |
| Content storage | Markdown in Git | Simple authoring and portable content |
| Site rendering | Static Astro, proposed | Fits article-led pages and local development |
| Experiments | Content type within either blog | Keeps subject navigation simple |
| Backend | None initially | Initial features do not require runtime storage |
| Hosting | Local first, Vercel later | Owner-requested rollout |
| Personal content | Owner supplied | Avoids fabricated biography or credentials |
