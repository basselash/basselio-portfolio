# Bassel Azab — Portfolio

Personal portfolio for Bassel Ashraf Ali Azab — UI/UX designer and
front-end developer. Built with Next.js, TypeScript, and Tailwind CSS.

Live at [basselio-portfolio.vercel.app](https://basselio-portfolio.vercel.app).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- [`DESIGN.md`](./DESIGN.md) — the portfolio's design system (colors,
  type, layout). Lints clean via `npx @google/design.md lint DESIGN.md`.
- `src/data/projects.ts` — the project data driving the Selected Work
  section. See the template comment at the top of the `PROJECTS` array
  for how to add a new project.
- `src/components/ProjectCard.tsx`, `ProjectImage.tsx`, `ProjectVideo.tsx`
  — render a project from its data, including graceful fallbacks when an
  image or video asset isn't in place yet.
- `public/images/projects/<slug>/`, `public/videos/` — per-project
  assets.

## Deployment

Connected to Vercel — every push to `main` deploys automatically.
