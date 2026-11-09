# Initial local implementation

## Delivered

- Static Astro site with Home, IT Blog, Non-IT Blog, Resume, Links, and 404.
- Paper-and-green responsive design, mobile navigation, visible focus, and skip link.
- Markdown resume from the supplied PDF, with dated roles preserved rather than assumed current employment.
- Owner-supplied LinkedIn and X destinations.
- Markdown article validation, publication filtering, section routes, code highlighting, and responsive prose.
- RSS, sitemap, robots policy, canonical metadata, and preview noindex.
- Resume section navigation and browser print support.
- Focused tests for publication dates, draft defaults, and route safety.

## Privacy choices

The source PDF remains outside the repository. Direct email and phone details, named client projects, and business metrics are omitted from the public-facing summary. Work history, skills, education, and certifications are adapted from the resume. No PDF download is offered; the print button can produce a copy of the web resume.

## Architecture detail

Astro 5 is used for the installed Node 20 environment. The `unifont` override holds 0.7.3, satisfying Astro's requested range while avoiding the later dependency's Node 22 requirement. Upgrade Node and review the framework/dependency versions before public launch.

The resume is a Markdown content collection entry. The homepage introduction currently lives in its page component; a separate `home.md` editor is deferred. External links use the JSON format described by the content specification.

## Still to do before launch

- Owner review of public resume wording and dates.
- Real articles: supplied templates intentionally remain drafts.
- Full visual review in a functioning browser and physical/printed resume review.
- Runtime upgrade, Vercel configuration, domain connection, and production verification.

Local development does not create a hosted Site, GitHub remote, commit, or deployment.
