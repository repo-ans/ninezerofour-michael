"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin accent-coloured bar pinned to the very top of the viewport, tracking
 * scroll progress through the page. Reads `--accent`, so it re-tints itself
 * automatically on co-branded pages (e.g. /crlab).
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    mass: 0.2,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-55 h-[2.5px] origin-left bg-taupe motion-reduce:hidden"
      style={{ scaleX }}
    />
  );
}
