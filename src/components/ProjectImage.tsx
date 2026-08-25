"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectImageSlot, ProjectTheme } from "@/data/projects";

export function ProjectImage({
  image,
  theme,
  className = "",
  large = false,
  scrollOnHover = false,
}: {
  image: ProjectImageSlot;
  theme: ProjectTheme;
  className?: string;
  /** Use a more substantial placeholder glyph for a large hero-scale slot. */
  large?: boolean;
  /**
   * For a full-length page screenshot taller than its frame: stay
   * top-aligned at rest, then slowly pan down to reveal the rest of the
   * page on hover (a `group-hover` on an ancestor with `className="group"`
   * drives it) — no cropping or resizing required on the source image.
   */
  scrollOnHover?: boolean;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // Mirrors ProjectVideo's fix: an <img> that 404s can fire its native
  // `error` event before React's synthetic onError binds (and if it's
  // already complete/broken by the time this effect runs, no event fires
  // again at all), so check directly and listen on the element itself.
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (el.complete && el.naturalWidth === 0) {
      setFailed(true);
      return;
    }
    const handleError = () => setFailed(true);
    el.addEventListener("error", handleError);
    return () => el.removeEventListener("error", handleError);
  }, []);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center ${className}`}
        style={{ backgroundColor: theme.surface, color: theme.textMuted }}
      >
        <svg
          width={large ? 32 : 16}
          height={large ? 32 : 16}
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.accent}
          strokeWidth="1.4"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="1.6" fill={theme.accent} stroke="none" />
          <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.12 0L4 19" />
        </svg>
        <p
          className={`font-medium uppercase tracking-[0.08em] ${large ? "text-xs" : "text-[10px]"}`}
        >
          {image.label}
        </p>
      </div>
    );
  }

  // Local project asset that may not exist yet; needs a simple onError
  // fallback rather than next/image's build-time optimization.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={image.src}
      alt={image.alt}
      className={`h-full w-full object-cover object-top ${
        scrollOnHover
          ? "transition-[object-position] duration-[6000ms] ease-in-out group-hover:object-bottom"
          : ""
      } ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
