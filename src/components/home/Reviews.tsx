import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Media } from "@/components/ui/Media";

/** Client-supplied Google review screenshots, cropped to the review card. */
const reviews = [
  {
    src: "/review-renee.webp",
    ratio: "1290 / 945",
    label:
      "Five-star Google review: “Renee is an incredibly kind and supportive business owner who truly cares about others. Her salon looks beautiful, and her talented team has earned so many wonderful reviews from happy clients. I highly recommend.”",
  },
  {
    src: "/review-amanda.webp",
    ratio: "1290 / 1415",
    label:
      "Five-star Google review: “Amanda is the absolute best! She does amazing work, is super efficient, and is always up to date on the latest techniques and trends. I always leave loving my hair and look forward to every appointment!”",
  },
];

export function Reviews() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal group className="flex flex-col gap-4">
          <RevealItem as="p" className="eyebrow">
            Google reviews
          </RevealItem>
          <SplitText
            as="h2"
            split="words"
            effect="rise"
            className="display-md max-w-[16ch]"
          >
            Kind words from our clients.
          </SplitText>
        </Reveal>

        <Reveal
          group
          className="mt-12 grid items-start gap-6 md:grid-cols-2 md:gap-8"
        >
          {reviews.map((r) => (
            <RevealItem key={r.src} as="figure">
              <Media
                label={r.label}
                src={r.src}
                ratio={r.ratio}
                zoom={false}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-md border border-line bg-white shadow-[0_18px_40px_-28px_rgba(58,56,56,0.35)]"
              />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
