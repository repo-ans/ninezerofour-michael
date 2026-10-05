import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Media } from "@/components/ui/Media";

const results = [
  {
    src: "/result-colour.webp",
    label: "Before and after: a color refresh — tone, shine, and movement",
    caption: "Color & shine",
  },
  {
    src: "/result-length.webp",
    label: "Before and after: added length and fullness",
    caption: "Length & fullness",
  },
];

export function BeforeAfter() {
  return (
    <section className="bg-panel-2">
      <Container className="py-20 md:py-28">
        <Reveal group className="flex flex-col gap-4">
          <RevealItem as="p" className="eyebrow">
            Real results
          </RevealItem>
          <SplitText
            as="h2"
            split="words"
            effect="rise"
            className="display-md max-w-[16ch]"
          >
            Before, and after.
          </SplitText>
        </Reveal>

        <Reveal group className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
          {results.map((r) => (
            <RevealItem key={r.src} as="figure" className="group">
              <Media
                label={r.label}
                src={r.src}
                ratio="1 / 1"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-md"
              />
              <figcaption className="mt-4 text-[0.7rem] font-medium tracking-[0.22em] text-ink-soft uppercase">
                {r.caption}
              </figcaption>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
