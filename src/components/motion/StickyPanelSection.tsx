"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/cn";
import { useIsClient } from "@/lib/useIsClient";

/**
 * Animation #2 — the signature scroll transition.
 *
 * The hero is pinned (`position: sticky`) inside a runway while a solid panel
 * slides UP from the bottom of the viewport, overtaking the still-held photo
 * and becoming the ground for the next section. The panel's own height is
 * tuned to the runway so the hero is fully gone the moment the panel lands —
 * no seam, no gap.
 *
 * SSR and the first client render always produce the plain stacked layout;
 * the scroll-scrubbed version is swapped in after hydration, and never when
 * `prefers-reduced-motion` is set.
 */
export function StickyPanelSection({
  hero,
  children,
  panelClassName,
}: {
  hero: ReactNode;
  children: ReactNode;
  panelClassName?: string;
}) {
  const runwayRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isClient = useIsClient();
  const enhanced = isClient && !reduce;

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end start"],
  });

  // Runway is 175svh. The hero pins for the first ~43% (scroll ≈ 75svh) while
  // the panel rises over it, then both scroll away together.
  const y = useTransform(
    scrollYProgress,
    [0, 0.05, 0.43],
    ["100%", "100%", "0%"],
  );

  if (!enhanced) {
    return (
      <div ref={runwayRef}>
        <div className="relative h-svh overflow-hidden">{hero}</div>
        <div className={cn("relative bg-panel", panelClassName)}>{children}</div>
      </div>
    );
  }

  return (
    <>
      <div ref={runwayRef} className="relative h-[175svh]">
        <div className="sticky top-0 h-svh overflow-hidden">{hero}</div>
      </div>

      <motion.div
        style={{ y, marginTop: "-100svh" }}
        className={cn(
          "relative z-10 min-h-svh bg-panel will-change-transform",
          "shadow-[0_-40px_80px_-40px_rgba(0,0,0,0.28)]",
          panelClassName,
        )}
      >
        {children}
      </motion.div>
    </>
  );
}
