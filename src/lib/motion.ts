import type { Transition, Variants } from "motion/react";

/** Shared easing — a calm, slightly weighted ease-out. */
export const ease = [0.22, 1, 0.36, 1] as const;

export const durations = {
  fast: 0.2,
  base: 0.28,
  slow: 0.4,
} as const;

/** Entrance transition for interaction reveals. */
export const enter: Transition = { duration: durations.base, ease };

/** Fade + slide-up, used by <Reveal>. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease },
  },
};

/** Staggered group container for <Reveal group>. */
export const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

/** Small item used inside hover-expand card actions. */
export const actionItemVariants: Variants = {
  rest: { opacity: 0, y: 8 },
  active: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.fast, ease },
  },
};

export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
