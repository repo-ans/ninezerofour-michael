import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { Media } from "@/components/ui/Media";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Apprenticeship and associate openings at Nine Zero Four Beauty Bar — a structured pathway from apprentice to senior stylist.",
};

const pillars = [
  {
    title: "Mentored apprenticeship",
    body: "Structured months alongside a senior stylist — not fetching towels. You build real skills on a defined curriculum.",
  },
  {
    title: "Paid training days",
    body: "Dedicated education time each month, plus brand and technique certifications covered by the studio.",
  },
  {
    title: "A clear ladder",
    body: "Written criteria for every level. You always know what advancement looks like and how close you are.",
  },
  {
    title: "A calmer floor",
    body: "Consultation-led bookings and realistic column pacing. Space to do careful work and actually learn.",
  },
];

export default function JoinUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join Us"
        title="Train seriously. Build a real career in hair."
        intro="We're always meeting stylists who want more than a chair — a curriculum, mentorship, and a defined path forward."
      >
        <ButtonLink href="/book?intent=careers">Apply now</ButtonLink>
      </PageHeader>

      <section>
        <Container className="py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal group className="flex flex-col gap-5">
              <RevealItem as="p" className="eyebrow">
                Your future at Nine Zero Four
              </RevealItem>
              <RevealItem as="h2" className="display-md max-w-[18ch]">
                Be part of something deliberately small.
              </RevealItem>
              <RevealItem as="p" className="text-ink-soft">
                We keep the team compact so every person gets attention, mentorship,
                and room to specialise. If you care about craft and want to work
                somewhere methodical, we should talk.
              </RevealItem>
              <RevealItem as="div" className="pt-1">
                <ButtonLink href="/team" variant="outline" size="sm">
                  Meet the team
                </ButtonLink>
              </RevealItem>
            </Reveal>
            <Reveal>
              <Media
                label="Studio — culture"
                ratio="5 / 4"
                tone="ink"
                className="rounded-md"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-panel-2">
        <Container className="py-20 md:py-28">
          <Reveal group className="grid gap-8 sm:grid-cols-2">
            {pillars.map((p) => (
              <RevealItem
                key={p.title}
                className="flex flex-col gap-2 border-t border-line pt-6"
              >
                <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                <p className="text-sm text-ink-soft">{p.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Think you're a fit?"
        body="Send a short note about where you are in your career and what you want to build. We read every one."
        ctaLabel="Start your application"
        ctaHref="/book?intent=careers"
        secondaryLabel="Contact the studio"
        secondaryHref="/book"
      />
    </>
  );
}
