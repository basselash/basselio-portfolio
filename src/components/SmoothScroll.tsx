"use client";

import { useEffect } from "react";

// CSS scroll-behavior gives no control over duration, so in-page anchor
// jumps are animated here instead. Tuned roughly twice as slow as the
// browser default, scaled by distance so a short hop doesn't drag and a
// full-page trip doesn't take forever.
const MIN_DURATION = 900;
const MAX_DURATION = 1500;
const MS_PER_PX = 1 / 1.1;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function SmoothScroll() {
  useEffect(() => {
    let frame = 0;

    const cancel = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const onClick = (event: MouseEvent) => {
      // Leave modified clicks (open in new tab, etc.) to the browser.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href || href === "#" || !href.startsWith("#")) return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      cancel();

      const start = window.scrollY;
      const scrollMargin =
        parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const end = Math.min(
        Math.max(target.getBoundingClientRect().top + start - scrollMargin, 0),
        maxScroll
      );
      const distance = end - start;

      const settle = () => {
        history.pushState(null, "", href);
      };

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced || Math.abs(distance) < 2) {
        window.scrollTo({ top: end, behavior: "instant" });
        settle();
        return;
      }

      const duration = Math.min(
        MAX_DURATION,
        Math.max(MIN_DURATION, Math.abs(distance) * MS_PER_PX)
      );
      let startTime: number | null = null;

      const step = (now: number) => {
        if (startTime === null) startTime = now;
        const progress = Math.min(1, (now - startTime) / duration);
        window.scrollTo({
          top: start + distance * easeInOutCubic(progress),
          behavior: "instant",
        });
        if (progress < 1) {
          frame = requestAnimationFrame(step);
        } else {
          frame = 0;
          settle();
        }
      };

      frame = requestAnimationFrame(step);
    };

    // Hand control back the moment the reader scrolls themselves, rather
    // than fighting them for the rest of the animation.
    document.addEventListener("click", onClick);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });

    return () => {
      cancel();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, []);

  return null;
}
