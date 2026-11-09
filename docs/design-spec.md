# Design specification

## Direction

A lively personal knowledge journal: bold Outfit headings, readable DM Sans body text, generous spacing, and violet, coral, lime, and peach accents. Bright cards and illustrated shapes add personality while article pages retain a clear reading surface. Fonts are hosted locally with the site.

Use the text wordmark **Navsankhya** initially. Author name, biography, portrait, and brand story remain owner-supplied content.

## Shared layout

- Header with wordmark linking home and the five primary navigation items.
- Visible current-section indicator and a keyboard-accessible mobile menu when navigation no longer fits.
- Main content region with a skip link.
- Footer with site name, copyright year, RSS link, and supplied profile links when available.
- Single light theme initially; dark mode is optional later work.

## Homepage

A brief introduction explains the site's purpose. Follow with recent published writing across both sections, showing section and experiment labels where relevant. Provide clear entry points to both blogs, resume, and links. Avoid an oversized hero that pushes writing out of view.

## Listings and article pages

Listings use simple text-led cards: linked title, summary, date, tags, and optional experiment label. Empty listings explain that articles will appear here.

Article pages show breadcrumbs, title, description, dates, tags, and body. Use a reading column approximately 65–75 characters wide. Code and wide tables scroll inside their own containers. Images scale to the reading column. Add a table of contents only when heading structure warrants it.

## Resume and links

Resume uses a readable single column with clear section headings and a print stylesheet. A PDF download is conditional on a supplied file. Links are grouped lists with descriptive text, rather than an unlabeled wall of icons.

## Accessibility and responsive behavior

- Aim for WCAG 2.2 AA: normal text contrast at least 4.5:1 and large text at least 3:1.
- Use semantic landmarks, ordered headings, descriptive link names, and visible keyboard focus.
- Keep navigation and controls usable at 200% zoom and on a 320px-wide viewport.
- Use locally hosted variable fonts with system fallbacks; article text is 17px on desktop and 16px on mobile with comfortable line height.
- Respect reduced-motion preferences; do not require animation to understand content.
- External links open in the same tab by default; indicate any explicit new-tab behavior.

## Visual verification at implementation

Review homepage, populated and empty listings, a long experiment with code/table/image content, resume, links, and 404 at mobile and desktop sizes. Check keyboard menu behavior, focus visibility, print resume, and overflow.
