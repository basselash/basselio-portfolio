const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = [
  "UI/UX Design",
  "Figma",
  "React",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C",
];

const label = "font-body text-[11px] font-medium uppercase tracking-[0.1em]";

export default function Home() {
  return (
    <div className="flex-1 bg-neutral">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 md:px-16">
        <span
          className={`${label} rounded-full border border-border bg-surface px-4 py-2 text-on-surface`}
        >
          Bassel Azab / UI-UX Designer
        </span>
        <nav className={`${label} flex gap-6 text-secondary`}>
          {NAV_LINKS.map((link) => (
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

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-16">
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-on-surface md:text-[56px]">
          Crafting interfaces, then building them for real.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">
          I&apos;m Bassel Ashraf Ali Azab — a UI/UX designer and front-end
          developer studying Computer Science at Nile University. I design in
          Figma and build with React.
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
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-4 md:px-16"
      >
        <div className="rounded-lg border border-border bg-surface p-8 md:col-span-2">
          <h2 className={`${label} text-secondary`}>About</h2>
          <p className="mt-3 leading-relaxed text-on-surface">
            I move between design and code — sketching flows and hi-fi
            screens in Figma, then implementing them myself with React. That
            round trip keeps my designs realistic and my front-end work
            deliberate rather than just pixel-matching.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-8 md:col-span-2">
          <h2 className={`${label} text-secondary`}>Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-subtle px-3 py-1 font-data text-xs text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          id="work"
          className="flex flex-col justify-between rounded-lg bg-tertiary p-8 text-surface md:col-span-2 md:row-span-2"
          style={{
            backgroundImage:
              "linear-gradient(155deg, var(--color-tertiary) 0%, var(--color-tertiary-light) 100%)",
          }}
        >
          <div>
            <span className={`${label} text-surface/80`}>
              Featured Project
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              Coin &amp; Cloth
            </h3>
            <p className="mt-3 text-surface/90">
              A clothing and accessories store website — a full UI/UX case
              study designed in Figma, from concept through hi-fi mockups.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Figma", "UI/UX Design", "E-Commerce"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface/15 px-3 py-1 font-data text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-8 md:col-span-2 md:row-span-2">
          <div>
            <h2 className={`${label} text-secondary`}>Education</h2>
            <p className="mt-3 text-on-surface">
              Nile University
              <br />
              B.Sc. Computer Science — in progress
            </p>
          </div>
          <div id="contact" className="mt-8 border-t border-border pt-6">
            <h2 className={`${label} text-secondary`}>Contact</h2>
            <div className="mt-3 flex flex-col gap-2 font-data text-sm text-on-surface">
              <a
                href="mailto:basselazab81@gmail.com"
                className="w-fit transition-colors hover:text-primary"
              >
                basselazab81@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/bassel2005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-colors hover:text-primary"
              >
                linkedin.com/in/bassel2005
              </a>
              <a
                href="https://github.com/basselash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-colors hover:text-primary"
              >
                github.com/basselash
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl border-t border-border px-6 py-10 md:px-16">
        <p className={`${label} text-secondary`}>© 2026 Bassel Azab</p>
      </footer>
    </div>
  );
}
