import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  as: As = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <As
      className={cn(
        "mx-auto w-full max-w-(--container) px-(--gutter)",
        className,
      )}
    >
      {children}
    </As>
  );
}
