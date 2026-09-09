"use client";

import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import type { Service } from "@/content/services";
import { ease } from "@/lib/motion";
import { site } from "@/content/site";

function priceLabel(service: Service) {
  if (service.priceFrom === 0) return "Complimentary";
  return `From $${service.priceFrom}`;
}

/**
 * Animation #4 — hover-expand service card.
 * Collapsed: name, price, duration. On hover / keyboard focus the card lifts
 * slightly and the action buttons fade + slide up into view. On touch devices
 * (no hover) the actions are shown permanently.
 */
export function ServiceCard({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: (service: Service) => void;
}) {
  const router = useRouter();
  const reduce = useReducedMotion();

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`${service.name} — view details`}
      onClick={() => onOpen(service)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(service);
        }
      }}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease }}
      className="group flex h-full cursor-pointer flex-col rounded-sm border border-line bg-panel p-6 transition-shadow duration-200 hover:shadow-[0_20px_44px_-26px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl tracking-tight">{service.name}</h3>
        <span className="shrink-0 text-sm text-ink-soft">
          {priceLabel(service)}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-ink-soft">
        {service.duration} &middot; {service.summary}
      </p>

      <div
        className={[
          "mt-4 flex flex-wrap gap-2 transition-[opacity,transform] duration-200 motion-reduce:transition-none",
          // hover-capable pointers: hidden until the card is hovered / focused
          "[@media(hover:hover)]:translate-y-1 [@media(hover:hover)]:opacity-0",
          "[@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100",
          "[@media(hover:hover)]:group-focus-within:translate-y-0 [@media(hover:hover)]:group-focus-within:opacity-100",
          "motion-reduce:translate-y-0 motion-reduce:group-hover:opacity-100",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`${site.bookUrl}?service=${service.slug}`);
          }}
          className="h-9 rounded-sm bg-ink px-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          Book Now
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(service);
          }}
          className="h-9 rounded-sm border border-ink/25 px-4 text-sm font-medium transition-colors hover:border-ink"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
