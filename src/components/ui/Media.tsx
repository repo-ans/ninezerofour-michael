import Image from "next/image";
import { cn } from "@/lib/cn";

type Tone = "sand" | "accent" | "ink";

const tones: Record<Tone, { bg: string; fg: string; line: string }> = {
  sand: { bg: "#e9e7df", fg: "#57544a", line: "#d4d0c2" },
  accent: { bg: "#33443f", fg: "#cfd6d1", line: "#3f524c" },
  ink: { bg: "#1c1b14", fg: "#8f8b7d", line: "#2b2a20" },
};

/**
 * Media block. Pass `src` (a path under /public) to render real photography;
 * with no `src` it falls back to a labelled placeholder. `label` is always the
 * alt / aria text.
 */
export function Media({
  label,
  src,
  ratio = "4 / 5",
  tone = "sand",
  className,
  priority,
  sizes = "(min-width: 768px) 50vw, 100vw",
  objectPosition,
}: {
  label: string;
  src?: string;
  ratio?: string;
  tone?: Tone;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
}) {
  const aspectRatio = ratio === "auto" ? undefined : ratio;

  if (src) {
    return (
      <div
        className={cn("relative overflow-hidden bg-panel-2", className)}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
    );
  }

  const t = tones[tone];
  const patternId = `hatch-${label.replace(/\W/g, "")}`;
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio, background: t.bg }}
      role="img"
      aria-label={`${label} (placeholder image)`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        aria-hidden
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="14"
            height="14"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="14" stroke={t.line} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.12em] uppercase"
          style={{ color: t.fg, border: `1px solid ${t.line}` }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 7h4l2-3h6l2 3h4v13H3z" stroke={t.fg} strokeWidth="1.6" />
            <circle cx="12" cy="13" r="4" stroke={t.fg} strokeWidth="1.6" />
          </svg>
          {label}
        </span>
      </div>
    </div>
  );
}
