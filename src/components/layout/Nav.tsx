"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { navItems, site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/motion";

export function Nav() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes (render-phase reset).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  // Pages with a dark full-bleed hero for the nav to sit over.
  const overHero = pathname === "/" || pathname === "/hair-restoration";
  const solid = scrolled || open || !overHero;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid
            ? "border-b border-line bg-paper/85 text-ink backdrop-blur-md"
            : "border-b border-transparent text-paper",
        )}
      >
        <nav className="mx-auto flex h-(--nav-h) max-w-(--container) items-center justify-between px-(--gutter)">
          <Link
            href="/"
            className="relative z-10 font-display text-lg tracking-[0.02em] whitespace-nowrap"
            aria-label={`${site.name} — home`}
          >
            {site.wordmark}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm tracking-wide transition-opacity hover:opacity-100",
                      active ? "opacity-100" : "opacity-65",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <ButtonLink
              href={site.bookUrl}
              size="sm"
              variant={solid ? "solid" : "inverse"}
            >
              Book Now
            </ButtonLink>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
                <motion.line
                  x1="2"
                  x2="20"
                  y1="7"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  style={{ transformOrigin: "11px 7px" }}
                  transition={{ duration: 0.2, ease }}
                />
                <motion.line
                  x1="2"
                  x2="20"
                  y1="15"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  style={{ transformOrigin: "11px 15px" }}
                  transition={{ duration: 0.2, ease }}
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          className="fixed inset-0 z-60 bg-paper text-ink lg:hidden"
        >
          <div className="flex h-full flex-col px-(--gutter) pt-[calc(var(--nav-h)+2rem)] pb-10">
            <div className="flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="-mr-2 flex h-10 w-10 items-center justify-center text-ink"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                  <path
                    d="M4 4l12 12M16 4L4 16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </button>
            </div>
            <ul className="mt-2 flex flex-col">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease, delay: 0.04 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block border-b border-line py-4 font-display text-3xl tracking-tight"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <ButtonLink
                href={site.bookUrl}
                onClick={onClose}
                className="w-full"
              >
                Book Now
              </ButtonLink>
              <p className="mt-6 text-sm text-ink-soft">
                {site.address.line1}, {site.address.line2}
                <br />
                <a href={site.phoneHref} className="underline">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
