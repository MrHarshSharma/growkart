"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Matches `section[id] { scroll-margin-top }` in globals.css. */
const NAV_OFFSET = 88;

/**
 * Client-side navigation to a hash on a *different* route (e.g. /about -> /#work)
 * lands at the top: the router runs its own scroll after the new page mounts,
 * which overrides an immediate correction, and the layout is still settling as
 * images load. Re-apply the scroll a few times until it sticks.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.length < 2) return;

    let target: Element | null = null;
    try {
      target = document.querySelector(hash);
    } catch {
      return; // malformed hash
    }
    if (!target) return;

    const el = target;
    const scroll = () => {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      // "instant" so it isn't animated by `html { scroll-behavior: smooth }`,
      // which a competing scroll can interrupt mid-flight.
      window.scrollTo({ top, behavior: "instant" });
    };

    // Spread across the frames where the router scroll and image loads land.
    const timers = [0, 60, 160, 320].map((delay) => setTimeout(scroll, delay));
    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  return null;
}
