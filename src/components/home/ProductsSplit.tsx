import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Media } from "@/components/ui/Media";

const brands = ["amika", "Virtue", "L'Oréal Professionnel", "Redken", "K18"];

export function ProductsSplit() {
  return (
    <section className="bg-inverse text-inverse-ink">
      <div className="grid md:grid-cols-2">
        <Reveal className="relative min-h-[60vw] md:min-h-[36rem]">
          <div className="absolute inset-0">
            <Media
              label="The retail shelf at Nine Zero Four"
              src="/services5.webp"
              ratio="auto"
              tone="ink"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full"
            />
          </div>
        </Reveal>
        <Reveal
          group
          className="flex flex-col justify-center gap-6 px-(--gutter) py-16 md:px-16 md:py-24"
        >
          <RevealItem as="p" className="eyebrow text-inverse-ink/50">
            The shelf
          </RevealItem>
          <SplitText
                as="h2"
                split="words"
                effect="rise"
                className="display-md max-w-[16ch] text-inverse-ink"
              >
                What we use in-studio is what we send you home with.
              </SplitText>
          <RevealItem as="p" className="max-w-[46ch] text-inverse-ink/70">
            We stock a short, deliberate range — clinical scalp care, bond
            repair, and colour-safe daily products — and we only recommend what
            your assessment actually calls for.
          </RevealItem>
          <RevealItem
            as="ul"
            className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-inverse-ink/60"
          >
            {brands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
