import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { BookingForm } from "@/components/book/BookingForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Book an appointment at Nine Zero Four Beauty Bar online through Vagaro, or send the studio a message.",
};

export default async function BookPage({ searchParams }: PageProps<"/book">) {
  const sp = await searchParams;
  const first = (v: string | string[] | undefined) =>
    Array.isArray(v) ? v[0] : v;
  const isCareers = first(sp.intent) === "careers";

  return (
    <>
      <PageHeader
        eyebrow={isCareers ? "Careers" : "Book Now"}
        title={isCareers ? "Apply to join us." : "Reserve a chair."}
        intro={
          isCareers
            ? "Tell us where you are in your career and what you want to build. We read every application."
            : "Appointments are booked online through Vagaro. For anything else — a question, a detailed request — send the studio a message below."
        }
      />

      {!isCareers ? (
        <section className="border-b border-line bg-panel-2">
          <Container className="py-14 md:py-16">
            <Reveal
              group
              className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between"
            >
              <RevealItem as="div" className="flex flex-col gap-1">
                <p className="font-display text-2xl tracking-tight">
                  Book online
                </p>
                <p className="max-w-[48ch] text-sm text-ink-soft">
                  Live availability, instant confirmation, and a card on file —
                  all handled through Vagaro.
                </p>
              </RevealItem>
              <RevealItem as="div">
                <ButtonLink href={site.bookUrl}>
                  Book on Vagaro &rarr;
                </ButtonLink>
              </RevealItem>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
          <Reveal className="flex flex-col gap-4">
            {!isCareers ? (
              <p className="eyebrow">Send a message</p>
            ) : null}
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
                <a href={site.emailHref} className="block hover:text-ink">
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <p className="eyebrow">Hours</p>
              <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    {h.day} &mdash; {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
