import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { serviceCategories, servicesByCategory } from "@/content/services";

function priceRange(categoryId: string) {
  const priced = servicesByCategory(categoryId).filter((s) => s.priceFrom > 0);
  if (priced.length === 0) return "Consultation";
  const min = Math.min(...priced.map((s) => s.priceFrom));
  return `From $${min}`;
}

const items: AccordionItem[] = serviceCategories
  .filter((c) => c.id !== "all")
  .map((cat) => ({
    title: cat.label,
    meta: priceRange(cat.id),
    content: (
      <ul className="divide-y divide-line">
        {servicesByCategory(cat.id).map((s) => (
          <li
            key={s.slug}
            className="flex items-baseline justify-between gap-6 py-3"
          >
            <div>
              <p className="text-ink">{s.name}</p>
              <p className="text-sm text-ink-soft">{s.duration}</p>
            </div>
            <span className="shrink-0 text-sm text-ink-soft">
              {s.priceFrom === 0 ? "Complimentary" : `From $${s.priceFrom}`}
            </span>
          </li>
        ))}
      </ul>
    ),
  }));

export function PricingAccordion() {
  return (
    <Container className="py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal group className="flex flex-col gap-5">
          <RevealItem as="p" className="eyebrow">
            Pricing
          </RevealItem>
          <RevealItem as="h2" className="display-md max-w-[12ch]">
            Clear starting points.
          </RevealItem>
          <RevealItem as="p" className="text-ink-soft">
            Figures below are where each service begins. Your exact quote is
            confirmed at consultation or before service — never at checkout.
          </RevealItem>
          <RevealItem as="div" className="pt-1">
            <ButtonLink href="/book" size="sm">
              Book a consultation
            </ButtonLink>
          </RevealItem>
        </Reveal>

        <Reveal>
          <Accordion items={items} defaultOpen={0} />
        </Reveal>
      </div>
    </Container>
  );
}
