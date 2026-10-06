import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { OversizedHero } from "@/components/hero/OversizedHero";
import { GhlForm } from "@/components/forms/GhlForm";
import {
  protocol,
  intro,
  made,
  benefits,
  solution,
  processIntro,
  mesh,
  meshless,
  chooseOption,
  processSteps,
  video,
} from "@/content/protocol";

export const metadata: Metadata = {
  title: "Hair Loss Solutions",
  description:
    "Customized, Made in Italy hair prosthetic systems, mesh and meshless solutions for hair loss, from thinning to complete alopecia, at Nine Zero Four in Ponte Vedra Beach.",
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
          mediaLabel="Hair prosthetic system"
          mediaSrc="/crlab/crlab_foto_capelli_2.jpg"
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
                className="display-md max-w-[18ch]"
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
                label="Hair prosthetic system, made in Italy"
                src="/crlab/IMG_7472-scaled-1-1024x683.jpg"
                ratio="3 / 2"
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

      {/* BENEFITS — bullet points */}
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
          <Reveal group as="ul" className="mt-10 flex list-disc flex-col gap-3 pl-6 text-lg marker:text-accent">
            {benefits.points.map((point) => (
              <RevealItem key={point} as="li" className="pl-1 text-ink">
                {point}
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

      {/* MESH AND MESHLESS — other hair loss options */}
      <section className="bg-panel">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {[mesh, meshless].map((option) => (
              <Reveal key={option.headline} group className="flex flex-col gap-5">
                <RevealItem as="div">
                  <Media
                    label={option.imageLabel}
                    src={option.image}
                    ratio="4 / 3"
                    className="rounded-md"
                  />
                </RevealItem>
                <RevealItem as="p" className="eyebrow">
                  {option.eyebrow}
                </RevealItem>
                <RevealItem as="h2" className="display-md max-w-[18ch]">
                  {option.headline}
                </RevealItem>
                <RevealItem as="p" className="text-lg text-ink">
                  {option.subtitle}
                </RevealItem>
                {option.body.map((p) => (
                  <RevealItem key={p} as="p" className="text-ink-soft">
                    {p}
                  </RevealItem>
                ))}
                <RevealItem as="div" className="mt-2">
                  <p className="font-semibold text-ink">Ideal for:</p>
                  <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 marker:text-accent">
                    {option.ideal.map((item) => (
                      <li key={item} className="pl-1 text-ink-soft">
                        {item}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              </Reveal>
            ))}
          </div>
          <Reveal group className="mt-16 flex max-w-[60ch] flex-col gap-4 border-t border-line pt-10">
            <RevealItem as="p" className="eyebrow">
              {chooseOption.eyebrow}
            </RevealItem>
            {chooseOption.body.map((p) => (
              <RevealItem key={p} as="p" className="text-ink-soft">
                {p}
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* HOW IT IS MADE — the CRLAB process, bullet points */}
      <section>
        <Container className="py-24 md:py-32">
          <Reveal group className="flex flex-col gap-4">
            <RevealItem as="p" className="eyebrow">
              {processIntro.eyebrow}
            </RevealItem>
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[20ch]"
            >
              {processIntro.headline}
            </SplitText>
            <RevealItem as="p" className="max-w-[56ch] text-ink-soft">
              {processIntro.body}
            </RevealItem>
          </Reveal>

          <Reveal group as="ul" className="mt-12 flex list-disc flex-col gap-4 pl-6 marker:text-accent">
            {processSteps.map((s) => (
              <RevealItem key={s.title} as="li" className="max-w-[64ch] pl-1 text-ink-soft">
                <span className="font-semibold text-ink">{s.title}.</span>{" "}
                {s.copy}
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

      {/* CONTACT — GHL form */}
      <section
        id="crlab-contact"
        className="scroll-mt-24 bg-panel md:scroll-mt-28"
      >
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-[640px]">
            <Reveal group className="flex flex-col gap-4 text-center">
              <RevealItem as="p" className="eyebrow">
                Nine Zero Four
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
                title="Nine Zero Four — Hair Loss Solutions Contact"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
