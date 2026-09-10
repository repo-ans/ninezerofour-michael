/**
 * Content for the co-branded Nine Zero Four × CRLAB landing page (/crlab).
 * Adapted from the CRLAB "Positioning 2026 — The CRLAB Protocol" deck.
 */

export const protocol = {
  eyebrow: "Nine Zero Four × CRLAB",
  heroHeadline: "HAIR, RESTORED.",
  heroIntro:
    "Where every hair and scalp concern becomes part of a personalised journey — from the first consultation to the most advanced restoration, delivered with expertise, empathy, and continuity.",
  statement: {
    lead: "This is not a menu of services. It is one integrated journey.",
    body: "A single philosophy runs through every stage — because caring for hair means caring for the person.",
  },
} as const;

export type Pillar = {
  name: string;
  summary: string;
  items: string[];
};

export const pillars: Pillar[] = [
  {
    name: "Understand",
    summary:
      "Every journey begins with listening. We assess the scalp, the hair, and the history behind them before anything else.",
    items: ["Consultation & scalp analysis"],
  },
  {
    name: "Support",
    summary:
      "Where hair can be strengthened and maintained, we build a guided protocol around it.",
    items: ["Hair care products & supplements", "Trichological treatments"],
  },
  {
    name: "Restore",
    summary:
      "Where density needs to be rebuilt, the most advanced restoration solutions are on the same roof.",
    items: [
      "CNC hair prosthetic system",
      "Regenerative medicine",
      "Hair transplantation",
    ],
  },
];

export type JourneyStage = {
  step: string;
  name: string;
  copy: string;
};

export const journey: JourneyStage[] = [
  {
    step: "01",
    name: "Consultation",
    copy: "A seated assessment with magnified imaging and a full history review. You leave with a written, staged plan — the first step to finding your image again.",
  },
  {
    step: "02",
    name: "Hair care products & supplements",
    copy: "A short, deliberate range for scalp health and hair strength, prescribed only where your assessment calls for it.",
  },
  {
    step: "03",
    name: "Trichological treatments",
    copy: "In-studio protocols and last-generation devices that calm the scalp and create the conditions for stronger growth.",
  },
  {
    step: "04",
    name: "CNC hair prosthetic system",
    copy: "A breathable, custom-built second skin of hair for areas where density cannot be regrown — fitted, cut, and blended so the transition is invisible.",
  },
  {
    step: "05",
    name: "Regenerative medicine",
    copy: "Advanced regenerative protocols that work with the follicle, used within a medically supervised plan.",
  },
  {
    step: "06",
    name: "Hair transplant",
    copy: "When it is the right step, surgical restoration planned and staged against your baseline — never in isolation.",
  },
  {
    step: "07",
    name: "Hair SPA",
    copy: "A new dimension of the journey: ritual scalp therapies that make care something you look forward to.",
  },
];

export const spa = {
  eyebrow: "CRLAB Hair SPA",
  headline: "New rituals. New protocols. New experiences.",
  body: "The Hair SPA extends the protocol beyond the clinical — a considered, sensory reset for the scalp that keeps the whole journey sustainable.",
};

export const premium = {
  headline: "Premium is not price. Premium is how people feel.",
  body: "Every interaction should feel unmistakably ours — across the services we deliver, the experience around them, and the way we talk about both.",
  facets: ["Services", "Experience", "Communication"],
};

export const closing = {
  detail: {
    headline: "Every detail matters",
    body: "The experience continues after the consultation — in the plan you take home, the products on your shelf, and the follow-up that keeps the journey on track.",
  },
  cta: {
    title: "Start with a consultation.",
    body: "One assessment sets the direction for everything that follows. Book yours, and we'll build the plan together.",
    signoff: "Think ahead.",
  },
};
