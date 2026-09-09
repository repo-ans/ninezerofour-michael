import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "border-b border-line pt-[calc(var(--nav-h)+3.5rem)] pb-14 md:pt-[calc(var(--nav-h)+5rem)] md:pb-20",
        className,
      )}
    >
      <Container>
        <Reveal group className="flex flex-col gap-5">
          {eyebrow ? (
            <RevealItem as="p" className="eyebrow">
              {eyebrow}
            </RevealItem>
          ) : null}
          <SplitText
            as="h1"
            split="words"
            effect="mask"
            className="display-lg max-w-[16ch]"
          >
            {title}
          </SplitText>
          {intro ? (
            <SplitText
              as="p"
              split="lines"
              effect="fade"
              duration={0.5}
              className="max-w-[54ch] text-lg text-ink-soft"
            >
              {intro}
            </SplitText>
          ) : null}
          {children ? <RevealItem as="div">{children}</RevealItem> : null}
        </Reveal>
      </Container>
    </header>
  );
}
