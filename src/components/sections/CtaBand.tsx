import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { site } from "@/content/site";

export function CtaBand({
  title = "Ready to experience the Nine Zero Four difference?",
  body = "Start with a consultation. We'll assess your hair, answer every question, and build a plan around where you want to be.",
  ctaLabel = "Book an appointment",
  ctaHref = site.bookUrl,
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-inverse text-inverse-ink">
      <Container className="py-20 md:py-28">
        <Reveal group className="flex flex-col gap-6">
          <SplitText
            as="h2"
            split="words"
            effect="mask"
            className="display-lg max-w-[16ch] text-inverse-ink"
          >
            {title}
          </SplitText>
          <SplitText
            as="p"
            split="lines"
            effect="fade"
            duration={0.5}
            className="max-w-[46ch] text-inverse-ink/70"
          >
            {body}
          </SplitText>
          <RevealItem as="div" className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href={ctaHref} variant="inverse">
              {ctaLabel}
            </ButtonLink>
            {secondaryLabel && secondaryHref ? (
              <ButtonLink
                href={secondaryHref}
                variant="outline"
                className="border-inverse-ink/30 text-inverse-ink hover:border-inverse-ink hover:bg-inverse-ink/5"
              >
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
