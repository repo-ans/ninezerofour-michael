import Link from "next/link";
import { navItems, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inverse text-inverse-ink">
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-display text-2xl tracking-tight">Keep in touch</p>
            <p className="mt-3 max-w-sm text-sm text-inverse-ink/70">
              Studio notes on hair health, colour, and restoration — a few times a
              year, never more.
            </p>
            <NewsletterForm />
          </div>

          <div className="text-sm">
            <p className="eyebrow text-inverse-ink/50">Studio</p>
            <address className="mt-4 space-y-1 not-italic text-inverse-ink/80">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p className="pt-2">
                <a href={site.phoneHref} className="hover:text-inverse-ink">
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-inverse-ink"
                >
                  {site.email}
                </a>
              </p>
            </address>
            <p className="eyebrow mt-6 text-inverse-ink/50">Hours</p>
            <ul className="mt-4 space-y-1 text-inverse-ink/80">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-inverse-ink/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm">
            <p className="eyebrow text-inverse-ink/50">Explore</p>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-inverse-ink/80 hover:text-inverse-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={site.bookUrl}
                  className="text-inverse-ink/80 hover:text-inverse-ink"
                >
                  Book Now
                </Link>
              </li>
            </ul>
            <p className="eyebrow mt-6 text-inverse-ink/50">Follow</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-inverse-ink/80 hover:text-inverse-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-inverse-line pt-8 text-xs text-inverse-ink/55">
          <p className="max-w-2xl">{site.policy}</p>
          <p className="mt-4">
            &copy; {year} {site.name} {site.tagline}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
