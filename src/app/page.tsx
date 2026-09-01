import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { CvDownloadCard } from "@/components/CvDownloadCard";

const SECTION_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about-full", label: "About" },
  { href: "#contact", label: "Contact" },
];

const EXPERTISE = [
  "UI/UX Design",
  "Front-End Development",
  "Design Systems",
  "Prototyping",
  "Wireframing",
];

const TECH_STACK = ["React", "JavaScript", "Python", "Java", "C++", "C", "Figma"];

const PRACTICE_AREAS = [
  {
    number: "01",
    title: "UI/UX Design",
    body: "Research-informed flows and interfaces, from low-fi wireframes to polished hi-fi screens in Figma.",
  },
  {
    number: "02",
    title: "Front-End Development",
    body: "Building what I design with React — a Figma file is the starting spec, not the finish line.",
  },
  {
    number: "03",
    title: "Design Systems",
    body: "Turning one-off screens into reusable components and consistent visual rules, in Figma and in code.",
  },
  {
    number: "04",
    title: "Always Learning",
    body: "Deepening my CS fundamentals at Nile University while picking up new design and front-end tools.",
  },
];

const ELSEWHERE_LINKS = [
  { href: "mailto:basselazab81@gmail.com", label: "Email" },
  {
    href: "https://linkedin.com/in/bassel2005",
    label: "LinkedIn",
    external: true,
  },
  { href: "https://github.com/basselash", label: "GitHub", external: true },
];

const label = "font-body text-[11px] font-medium uppercase tracking-[0.1em]";

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span
      className={`${label} inline-block w-fit rounded-full border px-4 py-2 ${
        dark
          ? "border-surface/30 text-surface"
          : "border-border bg-surface text-on-surface"
      }`}
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex-1 bg-neutral">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 pt-8 max-[374px]:gap-2 sm:gap-4 md:px-16">
        {/* Name and role share one line once there's room; below sm they
            stack inside the pill so the badge stays narrow enough for the
            nav to sit beside it rather than being pushed onto its own row. */}
        <span
          className={`${label} rounded-full border border-border bg-surface px-3 py-2 leading-[1.45] text-on-surface max-[374px]:px-2.5 max-[374px]:text-[10px] sm:px-4`}
        >
          <span className="block whitespace-nowrap sm:inline">Bassel Azab</span>
          <span className="hidden sm:inline"> / </span>
          <span className="block whitespace-nowrap text-secondary sm:inline sm:text-on-surface">
            UI-UX Designer
          </span>
        </span>
        <nav
          className={`${label} flex shrink-0 gap-3 text-secondary max-[374px]:gap-2 max-[374px]:text-[10px] sm:gap-6`}
        >
          {SECTION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero bento grid */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-8 pt-16 md:grid-cols-4 md:px-16">
        <div className="rounded-lg border border-border bg-surface p-8 md:col-span-2">
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-on-surface md:text-[56px]">
            Crafting interfaces, then building them for real.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">
            I&apos;m Bassel Ashraf Ali Azab — a UI/UX designer and front-end
            developer studying Computer Science at Nile University. I design
            in Figma and build with React.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className={`${label} rounded-md bg-primary px-6 py-3 text-surface transition-colors hover:bg-primary-hover`}
            >
              View Work
            </a>
            <a
              href="https://linkedin.com/in/bassel2005"
              target="_blank"
              rel="noopener noreferrer"
              className={`${label} rounded-md border border-border bg-surface px-6 py-3 text-primary transition-colors hover:border-primary`}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-tertiary p-8 text-surface md:col-span-1">
          <h2 className={`${label} text-surface/80`}>Currently</h2>
          <div className="mt-3">
            <p>Nile University</p>
            <p className="mt-1 text-surface/80">B.Sc. Computer Science</p>
          </div>
          <p className="mt-6 text-xs font-medium">Open to internships</p>
        </div>

        <CvDownloadCard />

        <div className="rounded-lg border border-border bg-surface p-8 md:col-span-2">
          <h2 className={`${label} text-secondary`}>About</h2>
          <p className="mt-3 leading-relaxed text-on-surface">
            I move between design and code — sketching flows and hi-fi
            screens in Figma, then implementing them myself with React. That
            round trip keeps my designs realistic and my front-end work
            deliberate rather than just pixel-matching.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-8 md:col-span-1">
          <h2 className={`${label} text-secondary`}>Expertise</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {EXPERTISE.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-3 py-1 text-xs text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface p-8 md:col-span-1">
          <h2 className={`${label} text-secondary`}>Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {TECH_STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-3 py-1 text-xs text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick contact row — these are actions, so they use the button
          shape (rounded-md + arrow), never the pill shape the static
          skill/tech tags use. */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 pb-24 md:px-16">
        {ELSEWHERE_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={`${label} inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-on-surface transition-colors hover:bg-on-surface hover:text-surface`}
          >
            {link.label}
            <svg
              width="9"
              height="9"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </div>

      {/* Selected Work */}
      <section
        id="work"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-24 md:px-16"
      >
        <Eyebrow>Selected Work</Eyebrow>
        <div className="mt-4 grid grid-cols-1 gap-6 md:mt-6 md:grid-cols-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* What I Do (dark) */}
      <section className="bg-on-surface px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow dark>What I Do</Eyebrow>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.number}
                className="rounded-lg border border-surface/10 p-8"
              >
                <h3 className="font-display text-xl font-semibold text-surface">
                  {area.number}. {area.title}
                </h3>
                <p className="mt-3 leading-relaxed text-surface/80">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About (dark, full) */}
      <section
        id="about-full"
        className="scroll-mt-8 bg-on-surface px-6 py-24 md:px-16"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <Eyebrow dark>About</Eyebrow>
            <h2 className="mt-6 max-w-md font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-surface md:text-[40px]">
              Where design decisions meet working code.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 text-surface/80">
            <p className="leading-relaxed">
              Bassel is a UI/UX designer and front-end developer currently
              studying Computer Science at Nile University. His process
              starts in Figma — flows, wireframes, then hi-fi screens — and
              doesn&apos;t stop there: he builds the same interfaces in
              React, so what ships matches what was designed.
            </p>
            <p className="leading-relaxed">
              Coin &amp; Cloth, a discovery website for a physical
              multi-brand retail space with an arcade and a 360° experience,
              is where that process lives right now — a full UI/UX case
              study built from the ground up in Figma. He&apos;s early in
              his career and treats that as an asset: still deliberately
              picking up new tools and ways of thinking about interfaces
              rather than defaulting to familiar ones.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:px-16">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface md:text-[40px]">
          Let&apos;s build something worth shipping.
        </h2>
        <a
          href="mailto:basselazab81@gmail.com"
          className={`${label} mt-8 inline-block rounded-md bg-primary px-8 py-4 text-surface transition-colors hover:bg-primary-hover`}
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-8 border-t border-border px-6 py-16 md:px-16"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className={`${label} text-secondary`}>Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              {SECTION_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-on-surface transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`${label} text-secondary`}>Elsewhere</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {ELSEWHERE_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="w-fit text-on-surface transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`${label} text-secondary`}>Info</h3>
            <div className="mt-4 flex flex-col gap-1 text-on-surface">
              <p>Nile University</p>
              <p>Cairo, Egypt</p>
              <p className="mt-2 text-primary">Open to internships</p>
            </div>
          </div>
        </div>
        <p className={`${label} mt-16 text-secondary`}>© 2026 Bassel Azab</p>
      </footer>
    </div>
  );
}
