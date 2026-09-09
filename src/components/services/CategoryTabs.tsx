"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ServiceCategory } from "@/content/services";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/motion";

/**
 * Animation #3 — hover-reveal category tabs.
 * Plain text on white by default; on hover a category photo crossfades in behind
 * the label and the text inverts to light. Only the hovered tab shows its image.
 * Tap / click selects the category (drives the grid filter).
 */
export function CategoryTabs({
  categories,
  active,
  onChange,
}: {
  categories: ServiceCategory[];
  active: string;
  onChange: (id: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeCat = categories.find((c) => c.id === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Service categories"
        className="no-scrollbar -mx-(--gutter) flex gap-2 overflow-x-auto px-(--gutter) pb-1"
      >
        {categories.map((cat) => {
          const isHover = hovered === cat.id;
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(cat.id)}
              onBlur={() => setHovered(null)}
              onClick={() => onChange(cat.id)}
              className={cn(
                "relative isolate shrink-0 overflow-hidden rounded-sm border px-5 py-3 text-sm font-medium tracking-tight whitespace-nowrap transition-colors duration-200",
                isActive ? "border-ink" : "border-line hover:border-ink/40",
              )}
            >
              <motion.span
                aria-hidden
                className="absolute inset-0 -z-10"
                initial={false}
                animate={{ opacity: isHover ? 1 : 0 }}
                transition={{ duration: 0.28, ease }}
              >
                <Media
                  label={cat.media}
                  src={cat.image}
                  tone="ink"
                  ratio="auto"
                  sizes="240px"
                  className="h-full w-full"
                />
                <span className="absolute inset-0 bg-ink/35" />
              </motion.span>
              <span
                className={cn(
                  "transition-colors duration-200",
                  isHover
                    ? "text-paper"
                    : isActive
                      ? "text-ink"
                      : "text-ink-soft",
                )}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 min-h-[1.5rem] max-w-[52ch]">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCat?.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease }}
            className="text-sm text-ink-soft"
          >
            {activeCat?.blurb}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
