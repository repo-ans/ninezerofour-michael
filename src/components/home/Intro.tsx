import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { ButtonLink } from "@/components/ui/Button";

const stats = [
  { value: "14 yrs", label: "Longest-tenured stylist" },
  { value: "6", label: "Specialists on the floor" },
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
            colour, and natural extensions. Every client begins with a seated
            assessment — magnified imaging, a review of your history, and a
            written plan — before a single service is booked.
          </SplitText>
          <RevealItem as="p" className="text-ink-soft">
            It is a calmer, more clinical way to work: measured, documented, and
            built entirely around your hair rather than a template.
          </RevealItem>
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
            <span className="font-display text-3xl tracking-tight md:text-4xl">
              {s.value}
            </span>
            <span className="text-sm text-ink-soft">{s.label}</span>
          </RevealItem>
        ))}
      </Reveal>
    </Container>
  );
}
