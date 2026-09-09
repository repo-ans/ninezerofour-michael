import { StickyPanelSection } from "@/components/motion/StickyPanelSection";
import { OversizedHero } from "@/components/hero/OversizedHero";
import { Intro } from "@/components/home/Intro";
import { StylistMatch } from "@/components/home/StylistMatch";
import { TileTrio } from "@/components/home/TileTrio";
import { ProductsSplit } from "@/components/home/ProductsSplit";
import { PricingAccordion } from "@/components/home/PricingAccordion";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <StickyPanelSection
        hero={
          <OversizedHero
            eyebrow="Nine Zero Four Beauty Bar"
            intro="Advanced hair restoration, dimensional colour, and natural extensions — delivered with clinical precision in Ponte Vedra Beach."
            cta={{ label: "Book a consultation", href: "/book" }}
            headline="HAIR, STUDIED."
            mediaLabel="A stylist finishing a blow-dry at the chair"
            mediaSrc="/join3.webp"
          />
        }
      >
        <Intro />
      </StickyPanelSection>

      <StylistMatch />
      <TileTrio />
      <ProductsSplit />
      <PricingAccordion />
      <CtaBand
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </>
  );
}
