"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectTheme, ProjectVideoAsset } from "@/data/projects";

function PlayGlyph({ color, size = 28 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

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

  // Pause the inline preview when it's off-screen (autoplay/loop shouldn't
  // cost anything once scrolled past) or while the modal is showing the
  // same footage at full size.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || failed) return;
    if (open) {
      el.pause();
      return;
    }

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
  }, [failed, open]);

  // Modal: close on Escape, lock background scroll, move focus to the close
  // button and hand it back to the trigger on the way out.
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open, close]);

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
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${video.label}`}
        className="group/video relative block h-full w-full cursor-pointer"
      >
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
        {/* Hover/focus affordance so it reads as playable, not decorative. */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/video:bg-black/30 group-hover/video:opacity-100 group-focus-visible/video:bg-black/30 group-focus-visible/video:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95">
            <PlayGlyph color="#000000" size={24} />
          </span>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={video.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black md:right-8 md:top-8"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <video
            className="max-h-full max-w-full rounded-lg"
            style={{ aspectRatio: video.aspectRatio ?? "16/9" }}
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
