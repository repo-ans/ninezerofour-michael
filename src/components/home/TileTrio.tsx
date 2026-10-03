import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { Media } from "@/components/ui/Media";

const tiles = [
  {
    label: "Hair Loss Solutions",
    media: "The scalp-care wall at Nine Zero Four",
    image: "/studio-scalp-wall.webp",
    copy: "Mesh and meshless integration, CR Lab hair systems, and scalp pigmentation — starting with a hair loss / thinning consultation.",
    href: "/services",
  },
  {
    label: "Dimensional Colour",
    media: "Soft dimensional colour",
    image: "/work-blonde-back.webp",
    copy: "Hand-painted and foiled lightening mapped to your hair's history, worked in stages to protect it.",
    href: "/services",
  },
  {
    label: "Natural Extensions",
    media: "A stylist installing tape-in extensions",
    image: "/work-tape-in.webp",
    copy: "Hand-tied, tape-in, and K-tip methods, colour-matched and blended so the transition is invisible.",
    href: "/services",
  },
];

export function TileTrio() {
  return (
    <Container className="py-20 md:py-28">
      <Reveal group className="grid gap-8 md:grid-cols-3 md:gap-6">
        {tiles.map((tile) => (
          <RevealItem key={tile.label} as="div">
            <Link
              href={tile.href}
              className="group block transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <Media
                label={tile.media}
                src={tile.image}
                ratio="4 / 5"
                tone="sand"
                sizes="(min-width: 768px) 33vw, 100vw"
                className="rounded-md transition-[filter] duration-300 group-hover:brightness-[0.97]"
              />
              <h3 className="mt-5 font-display text-xl tracking-tight">
                {tile.label}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{tile.copy}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                Learn more
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
            </Link>
          </RevealItem>
        ))}
      </Reveal>
    </Container>
  );
}
