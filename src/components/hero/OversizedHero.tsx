"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Media } from "@/components/ui/Media";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function OversizedHero({
  eyebrow,
  intro,
  cta,
  headline,
  mediaLabel = "Studio hero",
  align = "left",
}: {
  eyebrow?: string;
  intro: string;
  cta?: { label: string; href: string };
  /** Rendered oversized, anchored to the bottom, bleeding off the edge. */
  headline: string;
  mediaLabel?: string;
  align?: "left" | "right";
}) {
  return (
    <div className="absolute inset-0 flex flex-col bg-inverse text-paper">
      <div className="absolute inset-0">
        <Media
          label={mediaLabel}
          tone="ink"
          ratio="auto"
          className="h-full w-full"
        />
      </div>
      {/* legibility wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,14,9,0.55) 0%, rgba(15,14,9,0.12) 32%, rgba(15,14,9,0.12) 52%, rgba(15,14,9,0.82) 100%)",
        }}
      />

      {/* upper block */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-(--container) flex-1 flex-col justify-center px-(--gutter) pt-(--nav-h)",
          align === "right" && "items-end text-right",
        )}
      >
        {eyebrow ? <p className="eyebrow text-paper/70">{eyebrow}</p> : null}
        <p className="mt-4 max-w-[34ch] text-lg text-paper/90 md:text-xl">
          {intro}
        </p>
        {cta ? (
          <Link
            href={cta.href}
            className="group mt-6 inline-flex w-fit items-center gap-2 border-b border-paper/40 pb-1 text-sm font-medium tracking-wide uppercase transition-colors hover:border-paper"
          >
            {cta.label}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        ) : null}
      </motion.div>

      {/* oversized bottom headline — bleeds past the viewport edge */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.05 }}
        className="relative z-10 w-full overflow-hidden pb-[3vh]"
      >
        <h1
          className={cn(
            "display-xl px-(--gutter) whitespace-nowrap text-paper",
            align === "right" ? "text-right" : "-ml-[0.04em]",
          )}
        >
          {headline}
        </h1>
      </motion.div>
    </div>
  );
}
