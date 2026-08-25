# Project preview videos

Drop real screen-recordings here. Each project's `video.src` in
[`src/data/projects.ts`](../../src/data/projects.ts) points at a path in
this folder.

## Coin & Cloth

Expected file: `coin-cloth-demo.mp4` (optional poster: `coin-cloth-poster.jpg`)

Coin & Cloth is a **discovery website for a physical store** — not an
online shop. Record a walkthrough that communicates that: someone browsing
the site to get excited about visiting in person, e.g.

- Landing on the homepage
- Browsing through the site
- Discovering the different brands
- Exploring the arcade section
- Previewing the 360° experience
- Moving between the important sections/pages

Keep it silent (the `<video>` is muted regardless) and short — a 10–20s
loop is plenty. Export as H.264 MP4, ideally under a few MB, so it doesn't
hurt page load. Until this file exists, the site shows a clean "coming
soon" placeholder instead of a broken video — no build step is required
after adding it, just drop the file in and reload.
