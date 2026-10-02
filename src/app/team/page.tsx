import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SmartLink } from "@/components/ui/SmartLink";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Media } from "@/components/ui/Media";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { team } from "@/content/team";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet Amanda and Renee — the specialists behind Nine Zero Four's restoration, extensions, and hair-loss solutions.",
};

const faqItems: AccordionItem[] = faqs.map((f) => ({
  title: f.q,
  content: <p className="max-w-[60ch]">{f.a}</p>,
}));

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Confidence creators, with credentials."
        intro="A small studio by design. Everyone here specialises — so whatever you're booking, you're seeing someone who does it every day."
      />

      {/* Leading with passion */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <Reveal group className="flex flex-col gap-5">
              <RevealItem as="p" className="eyebrow">
                Leading with expertise
              </RevealItem>
              <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md max-w-[16ch]"
              >
                Extensions, hair-loss solutions, and restoration — under one roof.
              </SplitText>
              <RevealItem as="p" className="text-ink-soft">
                Nine Zero Four serves Ponte Vedra Beach and greater Jacksonville
                with a team that trains continuously and holds current
                certifications in their specialties. Weddings and events welcome.
              </RevealItem>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Team grid */}
      <section className="bg-panel-2">
        <Container className="py-20 md:py-28">
          <Reveal group className="mx-auto grid max-w-4xl gap-x-8 gap-y-12 sm:grid-cols-2">
            {team.map((m) => (
              <RevealItem key={m.slug} as="div">
                <article className="group flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <Media
                    label={m.media}
                    src={m.image}
                    objectPosition={m.imagePosition}
                    ratio="4 / 5"
                    sizes="(min-width: 896px) 448px, (min-width: 640px) 50vw, 100vw"
                    className="rounded-md transition-[filter] duration-300 group-hover:brightness-[0.97]"
                  />
                  <h3 className="mt-5 font-display text-2xl tracking-tight">
                    {m.name}
                  </h3>
                  <p className="text-sm text-accent">{m.role}</p>
                  <p className="mt-1 text-xs tracking-wide text-ink-soft uppercase">
                    {m.credentials}
                  </p>
                  <p className="mt-3 text-sm text-ink-soft">{m.bio}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {m.focus.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <SmartLink
                    href={m.bookUrl}
                    className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium"
                  >
                    Book with {m.name}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </SmartLink>
                </article>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* FAQs */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal group className="flex flex-col gap-4">
              <RevealItem as="p" className="eyebrow">
                F.A.Qs
              </RevealItem>
              <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md max-w-[12ch]"
              >
                Before you book.
              </SplitText>
              <RevealItem as="div" className="mt-4 hidden md:block">
                <Media
                  label="Colour brushes and shears in a back pocket"
                  src="/team9faq.webp"
                  ratio="4 / 5"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="rounded-md"
                />
              </RevealItem>
            </Reveal>
            <Reveal>
              <Accordion items={faqItems} defaultOpen={0} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand title="Ready to meet us?" ctaLabel="Book an appointment" />
    </>
  );
}
