# JUW-Microslides — Phase 1 MVP

Branded slide-deck generator for the Department of Microbiology, Jinnah
University for Women. This is the Phase 1 scope only: the exact branded
title slide, a live HTML preview, and one-click `.pptx` export — no
backend, runs entirely in the browser.

## Requirements

- Node.js 18+ and npm (this sandbox has no network access to install
  packages, so `npm install` needs to be run on your own machine)

## Setup

```bash
npm install
npm run dev
```

This starts a local dev server (usually `http://localhost:5173`). Open
it in a browser, fill in the course details on the left, watch the
live preview update on the right, and click "Export .pptx" to download
a real, fully editable PowerPoint file.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. The `base: "/JUW-MicroSlides/"` setting in
`vite.config.js` assumes you'll deploy this to GitHub Pages under a
repo named exactly `JUW-MicroSlides` (case-sensitive) — update that
value if your repo is named differently, or if you deploy elsewhere.

Note: `package.json`'s `"name": "juw-microslides"` is intentionally
lowercase — npm requires lowercase package names regardless of repo
name — and has no effect on the deployed site or its URL.

## What's implemented (Phase 1 scope)

- Exact branded title slide (light blue frame, reddish-brown border,
  both logos correctly placed, bottom-right text block, accent bar)
- Live preview that visually mirrors the exported layout
- Real `.pptx` export via PptxGenJS, with logos embedded as base64 data
  (works offline once the page has loaded once)

## What's NOT yet implemented (later phases)

- Multiple slide types (objectives, content, diagrams, etc.) — Phase 2
- The other 8 themes and 5 font pairings — Phase 3
- Wikimedia/Openverse/PubMed integration — Phase 4
- On-device AI (WebLLM) content generation — Phase 5
- PWA install support + offline service worker — Phase 6
- GitHub Pages CI deployment — Phase 7

See the full project plan for details on each phase.

## Verifying branding fidelity

After exporting, open the `.pptx` in PowerPoint, Google Slides, or
LibreOffice Impress and compare against the original reference image
supplied for this project. If logo positions or colors need
adjustment, the values to tweak are in
`src/lib/pptx/slideLayouts/titleSlide.js` (export layout) and
`src/lib/themes/academic-clean.js` (theme colors) — the same constants
drive both the preview and the export, so they stay in sync.
