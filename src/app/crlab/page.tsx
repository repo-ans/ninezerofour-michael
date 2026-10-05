import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { SmartLink } from "@/components/ui/SmartLink";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { OversizedHero } from "@/components/hero/OversizedHero";
import { CoBrandLockup } from "@/components/brand/CrlabMark";
import { GhlForm } from "@/components/forms/GhlForm";
import {
  protocol,
  intro,
  made,
  benefits,
  solution,
  processSteps,
  video,
  onco,
  contactCards,
  specialists,
} from "@/content/protocol";

export const metadata: Metadata = {
  title: "The CRLAB Protocol",
  description:
    "The CRLAB hair prosthetic system: a completely customized, Made in Italy solution for hair loss, from thinning to complete alopecia. Nine Zero Four in partnership with CRLAB.",
};

/* CRLAB co-brand tint, scoped to this page only. */
const coBrand = {
  "--accent": "#6c635d",
  "--accent-ink": "#f7f4ef",
  "--accent-soft": "#e9dfd5",
  "--inverse": "#544c46",
  "--inverse-ink": "#f7f4ef",
  "--inverse-line": "#6d635b",
} as CSSProperties;

const bookHref = "#crlab-contact";

export default function CrlabPage() {
  return (
    <div style={coBrand}>
      {/* HERO */}
      <section className="relative h-svh min-h-[560px] overflow-hidden">
        <OversizedHero
          eyebrow={protocol.eyebrow}
          intro={protocol.heroIntro}
          cta={{ label: "Book a consultation", href: bookHref }}
          headline={protocol.heroHeadline}
          mediaLabel="A stylist working with a client at the chair"
          mediaSrc="/work-blowdry.webp"
          mediaPosition="50% 35%"
        />
      </section>

      {/* INTRO — hair loss of any type */}
      <section className="bg-panel">
        <Container className="py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal group className="flex flex-col gap-5">
              <RevealItem as="p" className="eyebrow">
                {intro.eyebrow}
              </RevealItem>
              <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md max-w-[16ch]"
              >
                {intro.headline}
              </SplitText>
            </Reveal>
            <SplitText
              as="p"
              split="lines"
              effect="fade"
              duration={0.5}
              className="max-w-[46ch] self-end text-lg text-ink-soft"
            >
              {intro.body}
            </SplitText>
          </div>
        </Container>
      </section>

      {/* MADE IN ITALY */}
      <section className="bg-panel-2">
        <Container className="py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Media
                label="Custom hair prosthetic system, made in Italy"
                src="/work-tape-in.webp"
                ratio="4 / 5"
                className="rounded-md"
              />
            </Reveal>
            <Reveal group className="flex flex-col gap-5">
              <RevealItem as="p" className="eyebrow">
                {made.eyebrow}
              </RevealItem>
              {made.body.map((p) => (
                <RevealItem key={p} as="p" className="text-ink-soft">
                  {p}
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal group className="flex flex-col gap-4">
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[22ch]"
            >
              {benefits.headline}
            </SplitText>
          </Reveal>
          <Reveal
            group
            className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3"
          >
            {benefits.points.map((point, i) => (
              <RevealItem
                key={point}
                className="flex flex-col gap-3 bg-panel p-8"
              >
                <span className="font-display text-sm text-accent">
                  0{i + 1}
                </span>
                <p className="font-display text-2xl tracking-tight">{point}</p>
              </RevealItem>
            ))}
          </Reveal>
          <SplitText
            as="p"
            split="lines"
            effect="fade"
            duration={0.5}
            className="mt-10 max-w-[56ch] text-lg text-ink-soft"
          >
            {benefits.closing}
          </SplitText>
        </Container>
      </section>

      {/* YOUR NO. 1 SOLUTION */}
      <section className="bg-panel-2">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal group className="flex flex-col gap-5">
              <RevealItem as="p" className="eyebrow">
                {solution.eyebrow}
              </RevealItem>
              <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md max-w-[18ch]"
              >
                {solution.headline}
              </SplitText>
              <RevealItem as="p" className="max-w-[46ch] text-ink-soft">
                {solution.body}
              </RevealItem>
            </Reveal>
            <Reveal>
              <p className="max-w-[46ch] text-ink-soft md:pt-12">
                {solution.transform}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* HOW IT IS MADE — the CRLAB process */}
      <section>
        <Container className="py-24 md:py-32">
          <Reveal group className="flex flex-col gap-4">
            <RevealItem as="p" className="eyebrow">
              The CRLAB process
            </RevealItem>
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[20ch]"
            >
              How the CRLAB hair prosthetic system is made for you.
            </SplitText>
            <RevealItem as="p" className="max-w-[52ch] text-ink-soft">
              Our customized hair prosthesis is made specifically to your
              individual requirements, in nine steps.
            </RevealItem>
          </Reveal>

          <Reveal
            group
            as="ol"
            className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          >
            {processSteps.map((s, i) => (
              <RevealItem
                key={s.title}
                as="li"
                className="flex flex-col gap-3 bg-panel p-7"
              >
                <span className="font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.copy}</p>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* VIDEO */}
      <section className="bg-inverse text-inverse-ink">
        <Container className="py-24 md:py-32">
          <Reveal group className="flex flex-col gap-4">
            <RevealItem as="p" className="eyebrow text-inverse-ink/60">
              {video.eyebrow}
            </RevealItem>
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[18ch] text-inverse-ink"
            >
              {video.headline}
            </SplitText>
          </Reveal>
          <Reveal className="mt-12 aspect-video w-full overflow-hidden rounded-md bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.title}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Reveal>
        </Container>
      </section>

      {/* ONCO HAIR */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal group className="order-2 flex flex-col gap-5 md:order-1">
              <RevealItem as="p" className="eyebrow">
                {onco.eyebrow}
              </RevealItem>
              <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md max-w-[18ch]"
              >
                {onco.headline}
              </SplitText>
              <RevealItem as="p" className="max-w-[46ch] text-ink-soft">
                {onco.body}
              </RevealItem>
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <Media
                label="Supporting women undergoing chemotherapy"
                src="/work-blonde-profile.webp"
                ratio="4 / 5"
                className="rounded-md"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* HAIR LOSS SOLUTIONS — contact cards */}
      <section className="bg-panel-2">
        <Container className="py-20 md:py-28">
          <Reveal group className="flex flex-col gap-4">
            <RevealItem as="p" className="eyebrow">
              Hair loss solutions for you
            </RevealItem>
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[20ch]"
            >
              Talk to a CRLAB expert.
            </SplitText>
          </Reveal>
          <Reveal
            group
            className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3"
          >
            {contactCards.map((c) => (
              <RevealItem
                key={c.title}
                className="flex flex-col gap-4 bg-panel p-8"
              >
                <h3 className="font-display text-2xl tracking-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-ink-soft">{c.copy}</p>
                <div className="mt-auto pt-4">
                  <SmartLink
                    href={c.href}
                    className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium uppercase tracking-wide transition-colors hover:border-ink"
                  >
                    {c.cta} <span aria-hidden>&rarr;</span>
                  </SmartLink>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* SPECIALISTS */}
      <section>
        <Container className="py-20 md:py-28">
          <Reveal group className="flex flex-col gap-4">
            <RevealItem as="p" className="eyebrow">
              {specialists.eyebrow}
            </RevealItem>
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[22ch]"
            >
              {specialists.headline}
            </SplitText>
          </Reveal>
          <Reveal
            group
            className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6"
          >
            {specialists.services.map((s) => (
              <RevealItem
                key={s.title}
                className="flex flex-col gap-4 border-t border-line pt-6"
              >
                <h3 className="font-display text-xl tracking-tight md:text-2xl">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.copy}</p>
              </RevealItem>
            ))}
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
                <CoBrandLockup className="text-ink-soft" />
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
                first assessment, in person or by video.
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
