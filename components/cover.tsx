"use client";

import { useEffect, useRef } from "react";

// The home page's opening screen. Scrolling through it sets --p from 0 to 1,
// which shrinks and fades the statement (see .cover-statement in globals.css),
// and --tag on <html>, which fades the short version into the header.
export function Cover({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / (el.offsetHeight * 0.55)));
      el.style.setProperty("--p", p.toFixed(3));
      root.style.setProperty("--tag", Math.min(1, Math.max(0, (p - 0.6) / 0.4)).toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      root.style.removeProperty("--tag");
    };
  }, []);

  return (
    <section ref={ref} data-cover className="flex min-h-[calc(100svh-4rem)] flex-col pt-[6svh] pb-8 md:pt-[9svh]">
      {children}
    </section>
  );
}
