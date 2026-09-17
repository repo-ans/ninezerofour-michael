"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { useIsClient } from "@/lib/useIsClient";

/**
 * Counts up from 0 to the leading integer in `value` once it scrolls into
 * view, keeping any trailing text (" yrs", ":1", …) intact. SSR and the first
 * client paint always render the final string, so there's no hydration
 * mismatch — the count-up is a purely client-side enhancement.
 */
export function CountUp({
  value,
  duration = 1.1,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const isClient = useIsClient();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isClient || reduce || !inView) return;
    // Derived inside the effect (not from a render-scoped variable) so the
    // dependency array only carries stable primitives — `.match()` returns a
    // new array every call, which would otherwise re-trigger this effect on
    // every tick's re-render and restart the animation forever.
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = Number.parseInt(match[1], 10);
    const suffix = match[2];

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${Math.round(eased * target)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isClient, inView, reduce, duration, value]);

  return <span ref={ref}>{display}</span>;
}
