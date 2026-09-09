"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { ease } from "@/lib/motion";

/** Honours the OS "reduce motion" setting for every animation in the tree. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease }}>
      {children}
    </MotionConfig>
  );
}
