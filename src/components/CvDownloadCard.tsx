import fs from "fs";
import path from "path";

const CV_PATH = "/cv/bassel-azab-resume.pdf";
const label = "text-[11px] font-medium uppercase tracking-[0.1em]";

export function CvDownloadCard() {
  // The résumé is a static file in public/, so its presence is known at
  // build time — checking on the server avoids the client-side fetch that
  // used to flash "Coming soon" before flipping to "Download" on load.
  const available = fs.existsSync(
    path.join(process.cwd(), "public", CV_PATH)
  );

  return (
    <div className="flex flex-col justify-between rounded-lg bg-on-surface p-8 text-surface md:col-span-1">
      <h2 className={`${label} text-surface/70`}>Résumé</h2>
      <p className="mt-3 font-display text-4xl font-semibold">CV</p>
      {available ? (
        <a
          href={CV_PATH}
          download
          className={`${label} mt-6 flex w-fit items-center gap-2 rounded-md border border-surface/30 px-4 py-2 transition-colors hover:border-surface`}
        >
          Download
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 0.5v6M2 4l3 3 3-3M1 9h8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      ) : (
        <p className={`${label} mt-6 text-surface/50`}>Coming soon</p>
      )}
    </div>
  );
}
