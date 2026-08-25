# Coin & Cloth — image assets

Drop real exports here. Each path below is read directly by
[`src/data/projects.ts`](../../../../src/data/projects.ts); until a file
exists at that path, the card shows a clean labeled placeholder instead of
a broken image — no build step needed, just add the file and reload.

| File | Used as | Notes |
|---|---|---|
| `home.png` | Hero image | The homepage/landing screen — the large visual at the top of the card |
| `brands.png` | Gallery tile | A screen showing the multi-brand discovery section |
| `arcade.png` | Gallery tile | A screen showing the arcade section |
| `360.png` | Gallery tile | A screen/frame from the 360° experience |
| `logo.svg` | Logo (reserved, not yet rendered) | The actual Coin & Cloth logo, once available |

Export screens at a reasonable web size (e.g. ~1600px wide for `home.png`,
~800px square-ish for the gallery tiles — they're cropped to a 1:1 tile via
CSS `object-cover`, so compose them with the important content centered).
PNG or JPG both work; keep file sizes reasonable (a few hundred KB, not
multiple MB) since these load on the homepage.
