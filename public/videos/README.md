# Project preview videos

Drop real screen-recordings here. Each project's `preview.src` in
[`src/data/projects.ts`](../../src/data/projects.ts) points at a path in
this folder.

## Coin & Cloth

Expected file: `coin-cloth-demo.mp4` (optional poster: `coin-cloth-poster.jpg`)

Record a screen capture that shows the actual design in use:

- Browsing through the Coin & Cloth pages
- Scrolling through the designed screens
- Moving between sections/pages
- The UI/UX interactions and visual design

Keep it silent (the `<video>` is muted regardless) and short — a 10–20s
loop is plenty. Export as H.264 MP4, ideally under a few MB, so it doesn't
hurt page load. Until this file exists, the site shows a clean "preview
coming soon" placeholder instead of a broken video — no build step is
required after adding it, just drop the file in and reload.
