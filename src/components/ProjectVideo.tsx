"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectTheme, ProjectVideoAsset } from "@/data/projects";

function PlayGlyph({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" stroke={color} strokeWidth="1.2" />
      <path d="M11.5 9.5L19 14L11.5 18.5V9.5Z" fill={color} />
    </svg>
  );
}

export function ProjectVideo({
  video,
  theme,
}: {
  video: ProjectVideoAsset;
  theme: ProjectTheme;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  // A <video> that 404s can fire its native `error` event before React's
  // synthetic onError binds, so listen directly on the element rather than
  // relying on the onError prop alone.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.error) {
      setFailed(true);
      return;
    }
    const handleError = () => setFailed(true);
    el.addEventListener("error", handleError);
    return () => el.removeEventListener("error", handleError);
  }, []);

  // Pause off-screen video rather than letting it run indefinitely in the
  // background — autoplay/loop shouldn't cost anything once scrolled past.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || failed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [failed]);

  if (failed) {
    return (
      <div
        className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 p-8 text-center"
        style={{ backgroundColor: theme.surface, color: theme.textMuted }}
      >
        <PlayGlyph color={theme.accent} />
        <p className="text-[11px] font-medium uppercase tracking-[0.1em]">
          {video.label} coming soon
        </p>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      src={video.src}
      poster={video.poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      onError={() => setFailed(true)}
    />
  );
}
