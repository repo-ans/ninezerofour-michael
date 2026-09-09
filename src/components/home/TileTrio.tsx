import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { Media } from "@/components/ui/Media";

const tiles = [
  {
    label: "Scalp & Restoration",
    media: "Scalp therapy",
    copy: "Assessment-led programmes for thinning and density — imaged, staged, and reviewed against a baseline.",
    href: "/services",
  },
  {
    label: "Dimensional Colour",
    media: "Colour placement",
    copy: "Hand-painted and foiled lightening mapped to your hair's history, worked in stages to protect it.",
    href: "/services",
  },
  {
    label: "Natural Extensions",
    media: "Extension bar",
    copy: "Hand-tied and individual methods, colour-matched and cut so the transition is invisible.",
    href: "/services",
  },
];

export function TileTrio() {
  return (
    <Container className="py-20 md:py-28">
      <Reveal group className="grid gap-8 md:grid-cols-3 md:gap-6">
        {tiles.map((tile) => (
          <RevealItem key={tile.label} as="div">
            <Link href={tile.href} className="group block">
              <Media
                label={tile.media}
                ratio="4 / 5"
                tone="sand"
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
