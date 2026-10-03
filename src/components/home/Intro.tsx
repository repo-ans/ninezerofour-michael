import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { CountUp } from "@/components/motion/CountUp";
import { ButtonLink } from "@/components/ui/Button";

const stats = [
  { value: "30 yrs", label: "Longest-standing stylist" },
  { value: "2", label: "Specialists on the floor" },
  { value: "1:1", label: "Every consultation" },
];

export function Intro() {
  return (
    <Container className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal group className="flex flex-col gap-4">
          <RevealItem as="p" className="eyebrow">
            Ponte Vedra Beach
          </RevealItem>
          <SplitText
            as="h2"
            split="words"
            effect="rise"
            className="display-md max-w-[14ch]"
          >
            Hair concerns deserve the same rigour as skin.
          </SplitText>
        </Reveal>

        <Reveal group className="flex flex-col gap-6">
          <SplitText
            as="p"
            split="lines"
            effect="fade"
            duration={0.5}
            className="text-lg leading-relaxed"
          >
            Nine Zero Four is a studio for advanced hair restoration, dimensional
            colour, and natural extensions. Every client begins with a thorough
            consultation.
          </SplitText>
          <RevealItem as="div">
            <ButtonLink href="/services" variant="outline" size="sm">
              Explore services
            </ButtonLink>
          </RevealItem>
        </Reveal>
      </div>

      <Reveal
        group
        className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3"
      >
        {stats.map((s) => (
          <RevealItem key={s.label} className="flex flex-col gap-1">
            <span className="font-display text-4xl tracking-tight md:text-5xl">
              <CountUp value={s.value} />
            </span>
            <span className="text-sm text-ink-soft">{s.label}</span>
          </RevealItem>
        ))}
      </Reveal>
    </Container>
  );
}
