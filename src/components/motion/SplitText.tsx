"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useIsClient } from "@/lib/useIsClient";

type Split = "chars" | "words" | "lines";
type Effect = "rise" | "fade" | "mask" | "blur";
type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";

type SplitTextProps = {
  /** The headline / copy. Must be a plain string. */
  children: string;
  /** Semantic element rendered in the DOM. */
  as?: Tag;
  split?: Split;
  effect?: Effect;
  /** Animate when it scrolls into view, or immediately on mount. */
  trigger?: "scroll" | "load";
  /** Viewport threshold for the scroll trigger (0–1). */
  amount?: number;
  /** Animate once, or replay every time it re-enters the viewport. */
  once?: boolean;
  duration?: number;
  /** Per-piece stagger, seconds. Defaults sensibly to the split mode. */
  stagger?: number;
  delay?: number;
  /** Travel distance in px for rise / blur. */
  distance?: number;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Editorial split-text reveal — animates a headline in by character, word, or
 * line as it enters the viewport.
 *
 * Accessibility: the semantic tag stays in the DOM and carries the full
 * sentence as its `aria-label`; the split spans are `aria-hidden`, so a screen
 * reader announces one headline, not N letters. Under `prefers-reduced-motion`
 * (and during SSR / first paint) it renders as plain text.
 */
export function SplitText({
  children,
  as = "p",
  split = "words",
  effect = "rise",
  trigger = "scroll",
  amount = 0.4,
  once = true,
  duration = 0.55,
  stagger,
  delay = 0,
  distance = 26,
  className,
}: SplitTextProps) {
  const text = String(children);
  const reduce = useReducedMotion();
  const isClient = useIsClient();
  const Tag = as as ElementType;

  if (!isClient || reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  const step =
    stagger ??
    (split === "chars" ? 0.024 : split === "words" ? 0.055 : 0.09);
  const clip = effect === "mask";

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: step, delayChildren: delay } },
  };
  const item: Variants = {
    hidden: hiddenState(effect, distance),
    visible: {
      ...visibleState(effect),
      transition: { duration, ease: EASE },
    },
  };

  const motionProps =
    trigger === "load"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once, amount },
        };

  if (split === "lines") {
    return (
      <LinesReveal
        Tag={Tag}
        text={text}
        className={className}
        container={container}
        item={item}
        clip={clip}
        motionProps={motionProps}
      />
    );
  }

  const tokens = text.split(/(\s+)/);

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        style={{ display: "inline" }}
        variants={container}
        {...motionProps}
      >
        {tokens.map((token, i) => {
          if (token === "") return null;
          if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;

          if (split === "words") {
            return (
              <Piece key={i} clip={clip} item={item}>
                {token}
              </Piece>
            );
          }

          // chars — keep the word itself unbreakable
          return (
            <span
              key={i}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {Array.from(token).map((ch, j) => (
                <Piece key={j} clip={clip} item={item}>
                  {ch}
                </Piece>
              ))}
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}

/* ---------------------------------------------------------------- pieces --- */

const clipWrap: CSSProperties = {
  display: "inline-block",
  overflow: "hidden",
  verticalAlign: "top",
  paddingBottom: "0.14em",
  marginBottom: "-0.14em",
};

function Piece({
  children,
  clip,
  item,
}: {
  children: string;
  clip: boolean;
  item: Variants;
}) {
  const inner = (
    <motion.span
      variants={item}
      style={{
        display: "inline-block",
        willChange: "transform, opacity, filter",
      }}
    >
      {children === " " ? " " : children}
    </motion.span>
  );
  return clip ? <span style={clipWrap}>{inner}</span> : inner;
}

function hiddenState(effect: Effect, distance: number) {
  switch (effect) {
    case "fade":
      return { opacity: 0 };
    case "mask":
      return { y: "115%" };
    case "blur":
      return {
        opacity: 0,
        filter: `blur(${Math.max(3, distance / 3)}px)`,
        y: distance / 3,
      };
    case "rise":
    default:
      return { opacity: 0, y: distance };
  }
}

function visibleState(effect: Effect) {
  switch (effect) {
    case "mask":
      return { y: "0%" };
    case "blur":
      return { opacity: 1, filter: "blur(0px)", y: 0 };
    case "fade":
      return { opacity: 1 };
    case "rise":
    default:
      return { opacity: 1, y: 0 };
  }
}

/* ----------------------------------------------------------------- lines --- */

function LinesReveal({
  Tag,
  text,
  className,
  container,
  item,
  clip,
  motionProps,
}: {
  Tag: ElementType;
  text: string;
  className?: string;
  container: Variants;
  item: Variants;
  clip: boolean;
  motionProps: Record<string, unknown>;
}) {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<string[] | null>(null);

  useLayoutEffect(() => {
    const node = measureRef.current;
    if (!node) return;

    const measure = () => {
      const els = node.querySelectorAll<HTMLElement>("[data-w]");
      if (!els.length) return;
      const groups: string[] = [];
      let current: string[] = [];
      let lastTop = els[0].offsetTop;
      els.forEach((el) => {
        if (el.offsetTop - lastTop > 1) {
          groups.push(current.join(" "));
          current = [];
          lastTop = el.offsetTop;
        }
        current.push(el.textContent ?? "");
      });
      if (current.length) groups.push(current.join(" "));
      setLines((prev) =>
        prev && prev.join("\n") === groups.join("\n") ? prev : groups,
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, [text]);

  return (
    <Tag className={className} aria-label={text} style={{ position: "relative" }}>
      {/* hidden layer — kept mounted so re-grouping survives resize */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        {text.split(/(\s+)/).map((t, i) =>
          /^\s+$/.test(t) || t === "" ? (
            t
          ) : (
            <span key={i} data-w style={{ display: "inline-block" }}>
              {t}
            </span>
          ),
        )}
      </span>

      {lines ? (
        <motion.span
          aria-hidden
          style={{ display: "block" }}
          variants={container}
          {...motionProps}
        >
          {lines.map((line, i) => (
            <span
              key={i}
              style={{
                display: "block",
                overflow: clip ? "hidden" : "visible",
                paddingBottom: clip ? "0.14em" : undefined,
                marginBottom: clip ? "-0.14em" : undefined,
              }}
            >
              <motion.span
                variants={item}
                style={{ display: "block", willChange: "transform, opacity, filter" }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.span>
      ) : (
        <span aria-hidden style={{ visibility: "hidden" }}>
          {text}
        </span>
      )}
    </Tag>
  );
}
