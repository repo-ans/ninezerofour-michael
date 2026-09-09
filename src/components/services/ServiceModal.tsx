"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import type { Service } from "@/content/services";
import { serviceCategories } from "@/content/services";
import { site } from "@/content/site";
import { ease } from "@/lib/motion";

/**
 * Animation #5 — service detail modal.
 * Backdrop fades in + blurs the page; the panel fades + scales from 0.95 → 1.
 * Closing reverses. AnimatePresence handles mount / unmount cleanly.
 */
export function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!service) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") trapFocus(e, panelRef.current);
    };
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => closeRef.current?.focus(), 40);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      window.clearTimeout(t);
    };
  }, [service, onClose, lenis]);

  if (typeof document === "undefined") return null;

  const category = service
    ? serviceCategories.find((c) => c.id === service.category)?.label
    : null;

  return createPortal(
    <AnimatePresence>
      {service ? (
        <motion.div
          className="fixed inset-0 z-70 flex items-end justify-center sm:items-center sm:p-6"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.24, ease }}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            data-lenis-prevent
            className="relative max-h-[88vh] w-full overflow-y-auto rounded-t-md bg-panel p-6 sm:max-w-lg sm:rounded-md sm:p-8"
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 8 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.26, ease }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                <path
                  d="M3 3l12 12M15 3L3 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>

            {category ? <p className="eyebrow">{category}</p> : null}
            <h2
              id="service-modal-title"
              className="mt-2 font-display text-2xl tracking-tight sm:text-3xl"
            >
              {service.name}
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              {service.priceFrom === 0
                ? "Complimentary"
                : `From $${service.priceFrom}`}{" "}
              &middot; {service.duration}
            </p>

            <p className="mt-5 leading-relaxed">{service.description}</p>

            <p className="eyebrow mt-6">What&rsquo;s included</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-px w-4 shrink-0 bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`${site.bookUrl}?service=${service.slug}`}
                className="inline-flex h-11 flex-1 items-center justify-center rounded-sm bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Book this service
              </Link>
              <Link
                href="/book"
                onClick={onClose}
                className="inline-flex h-11 items-center justify-center rounded-sm border border-ink/25 px-6 text-sm font-medium transition-colors hover:border-ink"
              >
                Ask a question
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

function trapFocus(e: KeyboardEvent, container: HTMLElement | null) {
  if (!container) return;
  const focusables = container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
  );
  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}
