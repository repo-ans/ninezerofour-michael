"use client";

import { createElement, type ElementType, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { groupVariants, revealVariants, viewportOnce } from "@/lib/motion";

type Tag =
  | "div"
  | "section"
  | "ul"
  | "ol"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "span"
  | "figure"
  | "li";

const MOTION: Record<Tag, ElementType> = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  span: motion.span,
  figure: motion.figure,
  li: motion.li,
};

type RevealProps = {
  as?: Tag;
  /** When true, acts as a staggered container for <RevealItem> children. */
  group?: boolean;
  className?: string;
  children: ReactNode;
  delay?: number;
};

export function Reveal({
  as = "div",
  group = false,
  className,
  children,
  delay = 0,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return createElement(as as ElementType, { className }, children);
  }

  const MotionTag = MOTION[as];

  if (group) {
    return (
      <MotionTag
        className={className}
        variants={groupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

/** A staggered child — only animates inside a <Reveal group>. */
export function RevealItem({
  as = "div",
  className,
  children,
}: {
  as?: Tag;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return createElement(as as ElementType, { className }, children);
  }
  const MotionTag = MOTION[as];
  return (
    <MotionTag className={cn(className)} variants={revealVariants}>
      {children}
    </MotionTag>
  );
}
