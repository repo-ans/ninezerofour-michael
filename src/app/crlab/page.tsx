import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { OversizedHero } from "@/components/hero/OversizedHero";
import { CrlabMark, CoBrandLockup } from "@/components/brand/CrlabMark";
import { GhlForm } from "@/components/forms/GhlForm";
import {
  protocol,
  pillars,
  journey,
  spa,
  premium,
  closing,
} from "@/content/protocol";

export const metadata: Metadata = {
  title: "The CRLAB Protocol",
  description:
    "One integrated journey for every hair and scalp concern — consultation, trichology, CNC hair systems, regenerative medicine, hair transplant, and Hair SPA. Nine Zero Four in partnership with CRLAB.",
};

/* CRLAB co-brand tint, scoped to this page only. */
const coBrand = {
  "--accent": "#5b4635",
  "--accent-ink": "#f4efe8",
  "--accent-soft": "#ece4d9",
  "--inverse": "#3a2d22",
  "--inverse-ink": "#efe7dc",
  "--inverse-line": "#54463a",
} as CSSProperties;

const bookHref = "#crlab-contact";

export default function HairRestorationPage() {
  return (
    <div style={coBrand}>
      {/* HERO */}
      <section className="relative h-svh min-h-[560px] overflow-hidden">
        <OversizedHero
          eyebrow={protocol.eyebrow}
          intro={protocol.heroIntro}
          cta={{ label: "Book a consultation", href: bookHref }}
          headline={protocol.heroHeadline}
          mediaLabel="A scalp and density assessment in progress"
          mediaSrc="/services4.webp"
        />
      </section>

      {/* STATEMENT */}
      <section className="bg-panel">
        <Container className="py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[15ch]"
            >
              {protocol.statement.lead}
            </SplitText>
            <SplitText
              as="p"
              split="lines"
              effect="fade"
              duration={0.5}
              className="max-w-[46ch] self-end text-lg text-ink-soft"
            >
              {protocol.statement.body}
            </SplitText>
          </div>
        </Container>
      </section>

      {/* PILLARS — Understand / Support / Restore */}
      <section className="bg-panel-2">
        <Container className="py-20 md:py-28">
          <Reveal group className="flex flex-col gap-4">
            <RevealItem as="p" className="eyebrow">
              The method
            </RevealItem>
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[18ch]"
            >
              Understand, support, restore.
            </SplitText>
          </Reveal>

          <Reveal
            group
            className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3"
          >
            {pillars.map((p) => (
              <RevealItem
                key={p.name}
                className="flex flex-col gap-4 bg-panel p-8"
              >
                <span className="font-display text-2xl tracking-tight">
                  {p.name}
                </span>
                <p className="text-sm text-ink-soft">{p.summary}</p>
                <ul className="mt-auto space-y-2 pt-4 text-sm">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span aria-hidden className="text-accent">
                        &mdash;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* THE JOURNEY */}
      <section>
        <Container className="py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div className="flex flex-col gap-5 md:sticky md:top-28 md:self-start">
              <Reveal group className="flex flex-col gap-5">
                <RevealItem as="p" className="eyebrow">
                  The journey
                </RevealItem>
                <SplitText
                  as="h2"
                  split="words"
                  effect="rise"
                  className="display-md max-w-[12ch]"
                >
                  Seven stages, one plan.
                </SplitText>
                <RevealItem as="p" className="max-w-[34ch] text-ink-soft">
                  Every client moves through only the stages they need — the plan
                  decides, not a menu.
                </RevealItem>
              </Reveal>
            </div>

            <Reveal group as="ol" className="border-t border-line">
              {journey.map((s) => (
                <RevealItem
                  key={s.step}
                  as="li"
                  className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-b border-line py-7 md:py-9"
                >
                  <span className="font-display text-sm text-accent">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight md:text-2xl">
                      {s.name}
                    </h3>
                    <p className="mt-2 max-w-[54ch] text-ink-soft">{s.copy}</p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* HAIR SPA */}
      <section className="bg-panel-2">
        <Container className="py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Media
                label="The Hair SPA at Nine Zero Four"
                src="/services3.webp"
                ratio="4 / 5"
                className="rounded-md"
              />
            </Reveal>
            <Reveal group className="flex flex-col gap-5">
              <RevealItem as="p" className="eyebrow">
                {spa.eyebrow}
              </RevealItem>
              <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md max-w-[16ch]"
              >
                {spa.headline}
              </SplitText>
              <SplitText
                as="p"
                split="lines"
                effect="fade"
                duration={0.5}
                className="max-w-[46ch] text-ink-soft"
              >
                {spa.body}
              </SplitText>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PREMIUM POSITIONING — CRLAB brown band */}
      <section className="bg-inverse text-inverse-ink">
        <Container className="py-24 md:py-32">
          <Reveal group className="flex flex-col gap-8">
            <SplitText
              as="h2"
              split="words"
              effect="mask"
              className="display-lg max-w-[18ch] text-inverse-ink"
            >
              {premium.headline}
            </SplitText>
            <SplitText
              as="p"
              split="lines"
              effect="fade"
              duration={0.5}
              className="max-w-[52ch] text-inverse-ink/70"
            >
              {premium.body}
            </SplitText>
            <RevealItem
              as="ul"
              className="flex flex-wrap gap-x-8 gap-y-2 pt-2 font-display text-xl md:text-2xl"
            >
              {premium.facets.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </RevealItem>
            <RevealItem as="div" className="pt-8">
              <CrlabMark tagline className="text-3xl text-inverse-ink" />
            </RevealItem>
          </Reveal>
        </Container>
      </section>

      {/* EVERY DETAIL MATTERS */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal group className="order-2 flex flex-col gap-5 md:order-1">
              <RevealItem as="p" className="eyebrow">
                After the consultation
              </RevealItem>
              <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md max-w-[12ch]"
              >
                {closing.detail.headline}
              </SplitText>
              <SplitText
                as="p"
                split="lines"
                effect="fade"
                duration={0.5}
                className="max-w-[46ch] text-ink-soft"
              >
                {closing.detail.body}
              </SplitText>
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <Media
                label="A take-home protocol of products and supplements"
                src="/team2virtue.webp"
                ratio="5 / 4"
                className="rounded-md"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA + think ahead */}
      <section className="bg-inverse text-inverse-ink">
        <Container className="py-24 md:py-32">
          <Reveal group className="flex flex-col gap-6">
            <RevealItem as="div">
              <CoBrandLockup className="text-inverse-ink/60" />
            </RevealItem>
            <SplitText
              as="h2"
              split="words"
              effect="mask"
              className="display-lg max-w-[14ch] text-inverse-ink"
            >
              {closing.cta.title}
            </SplitText>
            <SplitText
              as="p"
              split="lines"
              effect="fade"
              duration={0.5}
              className="max-w-[44ch] text-inverse-ink/70"
            >
              {closing.cta.body}
            </SplitText>
            <RevealItem
              as="div"
              className="flex flex-wrap items-center gap-5 pt-3"
            >
              <ButtonLink href={bookHref} variant="inverse">
                Request a consultation
              </ButtonLink>
              <span className="font-display text-lg text-inverse-ink/55 italic">
                {closing.cta.signoff}
              </span>
            </RevealItem>
          </Reveal>
        </Container>
      </section>

      {/* CONTACT — GHL form */}
      <section
        id="crlab-contact"
        className="scroll-mt-24 bg-panel-2 md:scroll-mt-28"
      >
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-[640px]">
            <Reveal group className="flex flex-col gap-4 text-center">
              <RevealItem as="p" className="eyebrow">
                {protocol.eyebrow}
              </RevealItem>
              <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md"
              >
                Request your consultation.
              </SplitText>
              <RevealItem
                as="p"
                className="mx-auto max-w-[42ch] text-ink-soft"
              >
                Leave your details and the studio will be in touch to book your
                first assessment.
              </RevealItem>
            </Reveal>

            <Reveal className="mt-10">
              <GhlForm
                formId="5TPCGA4FcAmxkPV6Cito"
                title="Nine Zero Four × CRLAB — Contact Us"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
