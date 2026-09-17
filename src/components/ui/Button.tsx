"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Transition } from "motion/react";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { isExternal } from "@/lib/href";

const MotionLink = motion.create(Link);

type Variant = "solid" | "outline" | "ghost" | "inverse";
type Size = "sm" | "md";

const base =
  "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-accent",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.04]",
  ghost: "text-ink hover:bg-ink/[0.05]",
  inverse: "bg-paper text-ink hover:bg-accent hover:text-accent-ink",
};

// Soft spring lift — a little livelier than a plain ease-out.
const lift: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 26,
  mass: 0.6,
};

/** Hover/tap spring, skipping the lift & scale under `prefers-reduced-motion`. */
function useHoverMotion() {
  const reduce = useReducedMotion();
  return {
    whileHover: {
      y: reduce ? 0 : -3,
      scale: reduce ? 1 : 1.02,
      boxShadow: "0 16px 32px -14px rgba(0,0,0,0.4)",
    },
    whileTap: {
      y: 0,
      scale: reduce ? 1 : 0.965,
      boxShadow: "0 4px 10px -6px rgba(0,0,0,0.3)",
    },
    transition: lift,
  };
}

/** Diagonal light sweep, tinted to the button's own text colour. */
function Sheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] skew-x-[-20deg] bg-current/15 transition-transform duration-700 ease-out group-hover:translate-x-[250%] motion-reduce:hidden"
    />
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
    </span>
  );
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: CommonProps & {
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) {
  const hoverMotion = useHoverMotion();
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, sizes[size], variants[variant], className)}
      {...hoverMotion}
    >
      <Sheen />
      <Label>{children}</Label>
    </motion.button>
  );
}

export function ButtonLink({
  variant = "solid",
  size = "md",
  className,
  children,
  href,
  onClick,
}: CommonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const hoverMotion = useHoverMotion();

  if (isExternal(href)) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={classes}
        {...hoverMotion}
      >
        <Sheen />
        <Label>{children}</Label>
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} onClick={onClick} className={classes} {...hoverMotion}>
      <Sheen />
      <Label>{children}</Label>
    </MotionLink>
  );
}
