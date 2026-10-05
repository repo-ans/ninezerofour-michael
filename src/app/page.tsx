import { StickyPanelSection } from "@/components/motion/StickyPanelSection";
import { OversizedHero } from "@/components/hero/OversizedHero";
import { Intro } from "@/components/home/Intro";
import { StylistMatch } from "@/components/home/StylistMatch";
import { TileTrio } from "@/components/home/TileTrio";
import { ProductsSplit } from "@/components/home/ProductsSplit";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Reviews } from "@/components/home/Reviews";
import { PricingAccordion } from "@/components/home/PricingAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <StickyPanelSection
        hero={
          <OversizedHero
            eyebrow="Nine Zero Four Beauty Bar"
            intro="Advanced hair restoration — mesh and meshless hair-loss solutions, dimensional color, and natural extensions — in Ponte Vedra Beach."
            cta={{ label: "Book a consultation", href: site.bookUrl }}
            headline="HAIR, STUDIED."
            mediaLabel="Soft, dimensional blonde waves finished at the chair"
            mediaSrc="/work-blonde-profile.webp"
            mediaPosition="50% 30%"
          />
        }
      >
        <Intro />
      </StickyPanelSection>

      <StylistMatch />
      <TileTrio />
      <BeforeAfter />
      <ProductsSplit />
      <PricingAccordion />
      <Reviews />
      <CtaBand
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </>
  );
}
