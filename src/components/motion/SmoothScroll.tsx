"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

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
        // Handle same-page #anchor links (Lenis otherwise fights the jump).
        anchors: { offset: -100 },
      }}
    >
      <LenisRaf />
      {children}
    </ReactLenis>
  );
}

function LenisRaf() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;
    const update = (data: { timestamp: number }) => lenis.raf(data.timestamp);
    frame.update(update, true);
    return () => cancelFrame(update);
  }, [lenis]);

  // Lenis caches the document height and only re-measures on window resize.
  // After a client-side route change (or when images/fonts finish loading) the
  // cached limit is stale, so scrolling stalls short of the real bottom. Re-measure
  // whenever the body changes size or the route changes.
  useEffect(() => {
    if (!lenis) return;
    lenis.resize();
    const ro = new ResizeObserver(() => lenis.resize());
    ro.observe(document.body);
    const onLoad = () => lenis.resize();
    window.addEventListener("load", onLoad);
    void document.fonts?.ready.then(() => lenis.resize());
    return () => {
      ro.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, [lenis, pathname]);

  return null;
}
