import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { isExternal } from "@/lib/href";

type Variant = "solid" | "outline" | "ghost" | "inverse";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-tight transition-[background-color,color,border-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px disabled:opacity-50";

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
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "solid",
  size = "md",
  className,
  children,
  href,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
