"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  title: ReactNode;
  /** Optional right-aligned meta (e.g. a price range). */
  meta?: ReactNode;
  content: ReactNode;
};

export function Accordion({
  items,
  defaultOpen = -1,
  className,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div key={i} className="border-b border-line">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg tracking-tight sm:text-xl">
                  {item.title}
                </span>
                <span className="flex items-center gap-4">
                  {item.meta ? (
                    <span className="hidden text-sm text-ink-soft sm:inline">
                      {item.meta}
                    </span>
                  ) : null}
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease }}
                    className="text-xl leading-none text-ink-soft"
                  >
                    +
                  </motion.span>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-ink-soft">{item.content}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
