import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      group
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <RevealItem as="p" className="eyebrow">
          {eyebrow}
        </RevealItem>
      ) : null}
      <RevealItem
        as="h2"
        className={cn("display-md max-w-[20ch]", align === "center" && "max-w-[24ch]")}
      >
        {title}
      </RevealItem>
      {intro ? (
        <RevealItem
          as="p"
          className="max-w-[52ch] text-ink-soft"
        >
          {intro}
        </RevealItem>
      ) : null}
    </Reveal>
  );
}
