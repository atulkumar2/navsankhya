# Content specification

## Proposed source layout

```text
src/content/
  articles/
    it/<slug>.md
    non-it/<slug>.md
  pages/
    home.md
    resume.md
  links.json
public/
  images/articles/<slug>/
  resume/                         # optional owner-supplied PDF
```

Use ordinary Markdown initially. Introduce MDX only when a concrete article needs embedded components. Article section is derived from its parent folder; do not duplicate it in metadata.

## Article metadata

| Field | Type | Rule |
| --- | --- | --- |
| `title` | string | Required, nonempty |
| `description` | string | Required, concise summary used in listings and metadata |
| `publishedAt` | quoted date | Required `YYYY-MM-DD` |
| `updatedAt` | quoted date | Optional; cannot precede publication |
| `type` | enum | Required: `article` or `experiment` |
| `tags` | string array | Optional; default empty; consistent lowercase labels |
| `draft` | boolean | Default `true`; explicitly set `false` to publish |
| `cover` | string | Optional local image path |
| `coverAlt` | string | Required when cover conveys information; empty only for decorative images |

The filename determines the slug: lowercase words separated by hyphens, unique within its section. Reject duplicate resulting routes and invalid metadata during the build. Keep published slugs stable; maintain a redirect when a URL must change.

Publication eligibility: `draft === false` and `publishedAt` is on or before the build's current calendar date in `Asia/Kolkata`. Dates represent calendar dates, not UTC instants. Scheduled posts require a new build on or after their publication date.

## Article template

```markdown
---
title: "Article title"
description: "A short explanation of what the reader will learn."
publishedAt: "2026-11-07"
type: article
tags: []
draft: true
---

## Context

Explain the question and who this is useful for.

## Main discussion

Present the explanation, evidence, and examples.

## Takeaways

State the practical conclusions and any limitations.

## References

Link to relevant sources.
```

The page renders the title as its only H1; start body headings at H2.

## Experiment template

Use the same front matter with `type: experiment`, followed by these sections:

1. Question or hypothesis.
2. Setup: tools, versions, environment, inputs, and relevant dates.
3. Method: enough detail to reproduce the work.
4. Observations and results: distinguish measurements from interpretation.
5. Limitations: sample size, uncertainty, and confounding factors.
6. Conclusion and next experiments.
7. References, code, or data links when available.

Do not expose credentials, private data, or confidential screenshots. Cite borrowed claims and label estimates clearly.

## Resume content

`resume.md` holds owner-supplied sections: professional summary, skills, experience, education, and optional projects/certifications. Each role should include organization, title, dates, and concise contributions. Contact and profile links are optional and explicitly selected for public visibility.

Optional front matter: `title`, `description`, and `pdfPath`. Omit the download control when `pdfPath` is absent. Never manufacture personal history or generate a purported official resume from placeholders.

## External links

`links.json` contains groups with `title` and `items`; each item has `label`, `url`, and optional `description`. Accept `https:` and `http:` URLs only. Start with an empty array until real links are supplied. Show an honest empty state rather than dead links.

## Media and maintenance

- Store article images under their slug directory; provide meaningful alt text and optimize size.
- Display publication date and optional update date in a consistent readable format.
- Correct factual errors and use `updatedAt` for substantive revisions.
- Sample content remains draft and must not enter production output.
