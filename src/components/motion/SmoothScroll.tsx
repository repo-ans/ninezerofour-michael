"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "motion/react";

/**
 * Lenis smooth scrolling, with its RAF loop driven by Framer Motion's frame
 * scheduler so scroll-linked animations (useScroll, whileInView) stay in sync.
 * Under `prefers-reduced-motion` the easing is disabled (lerp: 1) so scrolling
 * is 1:1 with input.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: reduce ? 1 : 0.12,
        smoothWheel: !reduce,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        syncTouch: false,
      }}
    >
      <LenisRaf />
      {children}
    </ReactLenis>
  );
}

function LenisRaf() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const update = (data: { timestamp: number }) => lenis.raf(data.timestamp);
    frame.update(update, true);
    return () => cancelFrame(update);
  }, [lenis]);

  return null;
}
