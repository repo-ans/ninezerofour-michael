import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scalp and restoration programmes, dimensional colour, extensions, precision cutting, and in-studio treatments.",
};

const process = [
  {
    step: "01",
    title: "Consultation",
    body: "A seated assessment with imaging and history. You leave with a written plan and a quote.",
  },
  {
    step: "02",
    title: "Plan",
    body: "We stage the work — what happens first, what follows, and the realistic timeline.",
  },
  {
    step: "03",
    title: "Review",
    body: "Progress is measured against your baseline images and the plan is adjusted as needed.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Every service begins with an assessment."
        intro="Hover a category to preview it, or open any service for the full detail — what's included, how long it takes, and where pricing starts."
      />

      <Container className="py-16 md:py-24">
        <ServicesExplorer />
      </Container>

      <section className="bg-panel-2">
        <Container className="py-20 md:py-28">
          <Reveal group className="grid gap-10 md:grid-cols-3 md:gap-8">
            {process.map((p) => (
              <RevealItem key={p.step} className="flex flex-col gap-3">
                <span className="font-display text-2xl text-accent">
                  {p.step}
                </span>
                <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                <p className="text-sm text-ink-soft">{p.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        body="Book a consultation and we'll point you to the right specialist and the right starting point."
        ctaLabel="Book a consultation"
      />
    </>
  );
}
