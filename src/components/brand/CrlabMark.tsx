import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * Text lockup for CRLAB — "CR" bold, "LAB" light, matching the deck.
 * Swap for the official SVG logo when supplied.
 */
export function CrlabMark({
  className,
  tagline = false,
}: {
  className?: string;
  tagline?: boolean;
}) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="font-sans text-[1.15em] tracking-[-0.015em]">
        <span className="font-extrabold">CR</span>
        <span className="font-light">LAB</span>
      </span>
      {tagline ? (
        <span className="mt-1.5 text-[0.42em] font-medium tracking-[0.22em] uppercase opacity-70">
          Hair &amp; Scalp Care Excellence
        </span>
      ) : null}
    </span>
  );
}

/** Co-brand lockup: NINEZEROFOUR × CRLAB. */
export function CoBrandLockup({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-sm tracking-[0.02em]",
        className,
      )}
    >
      <span className="font-display">{site.wordmark}</span>
      <span aria-hidden className="text-[0.85em] opacity-50">
        &times;
      </span>
      <CrlabMark className="text-[0.85em]" />
    </span>
  );
}
