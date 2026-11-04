# Ellie

A local Eleventy publication for Ellie's projects and notes.

## Run locally

1. Install dependencies with `npm install`.
2. Start the local preview with `npm start`.
3. Build the static site with `npm run build`.

The generated site is written to `_site/`. A manual-only GitHub Pages workflow is included at `.github/workflows/pages.yml`; it does not run until explicitly started from GitHub Actions.

## Content

- Project articles live in `src/projects/` and use `layouts/project.njk`.
- Notes live in `src/notes/` and should use the `note` tag.
- Approved public images belong in `src/assets/images/` after privacy review.
- Reusable project screenshots use `src/_includes/components/story-figure.njk`. The two MusicFinder evidence placements are configured in `src/_data/musicfinderEvidence.js`. Supply an approved `src`, descriptive `alt`, intrinsic `width` and `height`, and an optional `caption`, `credit`, or `layout` value. Do not add placeholder screenshots.
- The private design reference belongs in `design/references/` and is never copied into the generated site.

`src/projects/musicfinder.md` contains the approved article with separate front matter. Preserve its approved wording exactly. The approved reflection section lives in `src/_includes/content/musicfinder-reflection.md`.

The approved private design reference is stored at `design/references/approved-site-reference.png`. It guides the visual system but is not displayed or copied into the generated site.

For a GitHub Pages project site, pass its repository path when building, for example `npm run build -- --pathprefix=/ellie-site/`.
