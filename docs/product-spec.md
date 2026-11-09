# Product specification

## Purpose

Navsankhya is a personal website for sharing knowledge-based articles and the results of hands-on experiments. It also presents the author's professional background and useful destinations elsewhere on the web.

Primary domain: `navsankhya.com`. The initial environment is localhost; Vercel is the intended production host.

## Audience and goals

- Readers discover and read IT and non-IT writing.
- Readers understand an experiment's question, method, results, and limitations.
- Professional contacts review the author's resume.
- Visitors find the author's external profiles and curated resources.
- The author can publish by adding or editing Markdown, without changing page components.

## Initial information architecture

| Route | Purpose | Required content |
| --- | --- | --- |
| `/` | Introduce the site and help visitors discover writing | Short introduction, latest published articles, section links |
| `/resume/` | Present professional background | Summary, skills, experience, education; optional projects and supplied PDF |
| `/it/` | Browse IT blogging | Introduction and published IT article cards, newest first |
| `/it/[slug]/` | Read an IT article or experiment | Article metadata, body, references, section navigation |
| `/non-it/` | Browse non-IT blogging | Introduction and published non-IT article cards, newest first |
| `/non-it/[slug]/` | Read a non-IT article or experiment | Same reading layout as IT articles |
| `/links/` | Find other destinations | Labeled, grouped external links with short descriptions |
| `/404` | Recover from an unknown URL | Clear message and links to home and writing sections |

Primary navigation: Home, IT Blog, Non-IT Blog, Resume, Links. Use reader-friendly labels while retaining the stable route names above.

## Experiments

An experiment is a content type within either blogging section, not a separate top-level section in version one. Display an “Experiment” label and explain the method, results, and caveats. This keeps technical and nontechnical experiments in the appropriate subject area.

## Version-one requirements

- Responsive pages with a shared header and footer.
- Markdown articles supporting code blocks, tables, images, and links.
- Article titles, summaries, publication dates, optional update dates, tags, and content type.
- Published articles sorted by publication date descending; drafts and future-dated posts excluded from public output.
- Resume page editable from local content; PDF download appears only when a real PDF is supplied.
- Curated links grouped by purpose; render only supplied, valid destinations.
- Useful empty states before real writing is added, without fabricated personal claims.
- Per-page metadata, canonical URLs, sitemap, and RSS feed for published articles.
- Keyboard navigation, visible focus, semantic headings, and readable contrast.

## Deferred scope

Search, tag archive pages, comments, newsletter, analytics, contact forms, accounts, CMS, and interactive experiment hosting are optional later work. An article may link to an externally hosted demo or repository.

## Acceptance criteria

1. All specified routes render locally, including useful empty states and a custom 404.
2. Adding a valid Markdown article creates its detail page and updates the correct listing, homepage, and feed.
3. Draft and scheduled content is absent from public pages, generated HTML, feeds, and sitemap.
4. Resume and link content can change without component edits.
5. Navigation works on small screens and with a keyboard; article content does not cause page-wide horizontal scrolling.
6. Production build succeeds and generates static output suitable for the intended Vercel deployment.
7. No invented credentials, placeholder destinations, or example articles appear as real published content.
