import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Media } from "@/components/ui/Media";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Hair Extensions",
  description:
    "Hand-tied, tape-in, and K-tip hair extensions at Nine Zero Four Beauty Bar in Ponte Vedra Beach. Customized to your hair, lifestyle, and desired result.",
};

const methods = [
  {
    id: "hand-tied",
    image: "/hand-tied.jpeg",
    imageLabel: "Hand-tied wefts sewn in rows",
    title: "Hand-Tied Extensions",
    subtitle: "Natural Fullness. Beautiful Movement. Seamless Results.",
    body: [
      "Hand-tied extensions are an excellent choice for clients who want to add fullness, length, or both while maintaining a soft, natural appearance.",
      "Individual wefts are strategically placed to create a seamless blend with your natural hair. The result is beautiful movement and customizable volume without compromising the finished look.",
      "Hand-tied extensions can be customized using one or multiple rows depending on your natural hair, desired fullness, and overall transformation.",
    ],
    ideal: [
      "Adding noticeable length and fullness",
      "Creating natural-looking volume",
      "Clients wanting a customizable transformation",
      "Blending beautifully with medium to fuller hair densities",
    ],
  },
  {
    id: "tape-in",
    image: "/tape-in.jpeg",
    imageLabel: "Tape-in extensions being applied",
    title: "Tape-In Extensions",
    subtitle: "Lightweight Volume With a Seamless Finish",
    body: [
      "Tape-in extensions offer a lightweight, flexible option for adding length and fullness while keeping the finished result natural and comfortable.",
      "The extensions are placed in thin sections throughout the hair, allowing them to blend smoothly with your natural hair while maintaining movement.",
      "Tape-ins are especially versatile for clients who want additional fullness, length, or targeted volume without the weight of a larger extension system.",
    ],
    ideal: [
      "Adding fullness and length",
      "Fine to medium hair",
      "Creating targeted volume",
      "Clients who prefer a lightweight extension method",
    ],
  },
  {
    id: "k-tip",
    image: "/k-tip.jpg",
    imageLabel: "K-tip extensions at the crown",
    title: "K-Tip Extensions",
    subtitle: "Individual Placement. Maximum Customization.",
    body: [
      "K-Tip extensions use individual keratin-bonded strands that allow for highly customized placement throughout the hair.",
      "Because each extension is applied individually, K-Tips can be strategically positioned to create fullness and length exactly where it is needed while allowing the hair to move naturally.",
      "This method can be particularly effective for clients who want a very discreet extension application or need customized placement throughout different areas of the hair.",
    ],
    ideal: [
      "Highly customized extension placement",
      "Adding length and density",
      "Creating fullness in specific areas",
      "Clients wanting individual strand extensions",
    ],
  },
];

export default function HairExtensionsPage() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-line pt-[calc(var(--nav-h)+3.5rem)] pb-14 md:pt-[calc(var(--nav-h)+5rem)] md:pb-20">
        <Container>
          <Reveal group className="flex max-w-[60ch] flex-col gap-5">
            <RevealItem as="p" className="eyebrow">
              Hair Extensions
            </RevealItem>
            <SplitText
              as="h1"
              split="words"
              effect="mask"
              className="display-lg max-w-[18ch]"
            >
              Luxury Hair Extensions.
            </SplitText>
            <SplitText
              as="p"
              split="lines"
              effect="fade"
              duration={0.5}
              className="max-w-[54ch] text-lg text-ink-soft"
            >
              Beautiful hair should look effortless. Our customized hair extension
              services are designed to add length, fullness, movement, and dimension
              while blending naturally with your own hair.
            </SplitText>
          </Reveal>
        </Container>
      </header>

      {/* Intro */}
      <section className="bg-panel">
        <Container className="py-20 md:py-28">
          <Reveal className="max-w-[60ch]">
            <p className="text-lg text-ink-soft">
              Every extension service is customized around your hair, your
              lifestyle, and the result you want to achieve. Whether you&rsquo;re
              looking for subtle fullness or a complete transformation, we&rsquo;ll
              help determine the extension method that gives you the most
              natural-looking result.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Methods */}
      {methods.map((m, i) => (
        <section
          key={m.id}
          id={m.id}
          className={i % 2 === 0 ? "bg-panel-2" : "bg-panel"}
        >
          <Container className="py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <Reveal group className="flex flex-col gap-5">
                <RevealItem as="p" className="eyebrow">
                  {m.title}
                </RevealItem>
                <SplitText
                  as="h2"
                  split="words"
                  effect="rise"
                  className="display-md max-w-[18ch]"
                >
                  {m.subtitle}
                </SplitText>
                <Media
                  label={m.imageLabel}
                  src={m.image}
                  ratio="4 / 5"
                  className="rounded-md"
                />
              </Reveal>
              <Reveal group className="flex flex-col gap-5">
                {m.body.map((p) => (
                  <RevealItem key={p} as="p" className="text-ink-soft">
                    {p}
                  </RevealItem>
                ))}
                <RevealItem as="div" className="mt-4">
                  <p className="font-semibold text-ink">Ideal for:</p>
                  <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 marker:text-accent">
                    {m.ideal.map((item) => (
                      <li key={item} className="pl-1 text-ink-soft">
                        {item}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      {/* Closing */}
      <section className="bg-panel">
        <Container className="py-20 md:py-28">
          <Reveal group className="max-w-[60ch] flex flex-col gap-5">
            <SplitText
              as="h2"
              split="words"
              effect="rise"
              className="display-md max-w-[22ch]"
            >
              Your Extensions Should Look Like Your Hair — Only Better.
            </SplitText>
            <RevealItem as="p" className="text-ink-soft">
              No two heads of hair are the same, which is why we don&rsquo;t believe
              in a one-size-fits-all extension service.
            </RevealItem>
            <RevealItem as="p" className="text-ink-soft">
              Your extension plan is customized based on your natural hair, density,
              desired length, lifestyle, and finished look.
            </RevealItem>
            <RevealItem as="p" className="text-ink-soft">
              Our goal is simple: extensions that blend beautifully, feel natural, and
              give you hair you love wearing.
            </RevealItem>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Ready to discover your best extension option?"
        body="Schedule your extension consultation and let us create a customized plan for your hair."
        ctaLabel="Book your consultation"
      />
    </>
  );
}
