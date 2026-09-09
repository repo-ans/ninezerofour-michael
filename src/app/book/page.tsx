import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { BookingForm } from "@/components/book/BookingForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Request an appointment or consultation at Nine Zero Four Beauty Bar, Ponte Vedra Beach.",
};

export default async function BookPage({ searchParams }: PageProps<"/book">) {
  const sp = await searchParams;
  const first = (v: string | string[] | undefined) =>
    Array.isArray(v) ? v[0] : v;

  return (
    <>
      <PageHeader
        eyebrow="Book Now"
        title="Reserve a chair."
        intro="Send a request below and a team member confirms your time within one business day. New colour, extension, and restoration clients start with a consultation."
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
          <Reveal>
            <BookingForm
              presetService={first(sp.service)}
              presetStylist={first(sp.with)}
              presetIntent={first(sp.intent)}
            />
          </Reveal>

          <Reveal group className="flex flex-col gap-8">
            <div>
              <p className="eyebrow">Studio</p>
              <address className="mt-3 space-y-1 text-sm text-ink-soft not-italic">
                <p>{site.address.line1}</p>
                <p>{site.address.line2}</p>
              </address>
            </div>
            <div>
              <p className="eyebrow">Direct</p>
              <p className="mt-3 space-y-1 text-sm text-ink-soft">
                <a href={site.phoneHref} className="block hover:text-ink">
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="block hover:text-ink"
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <p className="eyebrow">Hours</p>
              <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    {h.day} — {h.time}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-dashed border-line p-4 text-xs text-ink-soft">
              Online scheduling embed goes here once the studio&rsquo;s booking
              provider is connected.
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
