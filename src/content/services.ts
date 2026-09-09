export type ServiceCategory = {
  id: string;
  label: string;
  /** One-line description shown when the tab is active. */
  blurb: string;
  /** Placeholder media label — swap for real photography later. */
  media: string;
};

export type Service = {
  slug: string;
  name: string;
  category: string; // ServiceCategory.id
  priceFrom: number;
  duration: string;
  /** Short line shown on the collapsed card. */
  summary: string;
  /** Full copy shown in the detail modal. */
  description: string;
  /** Bulleted "what's included" points for the modal. */
  includes: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "all",
    label: "All",
    blurb: "Every service across the studio.",
    media: "All services",
  },
  {
    id: "restoration",
    label: "Scalp & Restoration",
    blurb:
      "Assessment-led programmes for thinning, shedding, and density — the clinical core of the studio.",
    media: "Scalp analysis",
  },
  {
    id: "color",
    label: "Colour",
    blurb: "Dimensional blonding and lived-in colour, mapped to your hair's history.",
    media: "Colour work",
  },
  {
    id: "extensions",
    label: "Extensions",
    blurb: "Hand-tied and individual methods for seamless length and fullness.",
    media: "Extension bar",
  },
  {
    id: "haircuts",
    label: "Haircuts",
    blurb: "Precision cutting and dry-detail finishing for every texture.",
    media: "Precision cut",
  },
  {
    id: "treatments",
    label: "Treatments",
    blurb: "In-studio conditioning, bond repair, and scalp therapies.",
    media: "Treatment room",
  },
];

export const services: Service[] = [
  // Scalp & Restoration
  {
    slug: "scalp-consultation",
    name: "Scalp & Density Consultation",
    category: "restoration",
    priceFrom: 0,
    duration: "45 min",
    summary: "Trichoscope analysis, history review, and a written plan.",
    description:
      "A seated, unhurried assessment. We photograph and magnify the scalp, measure density across defined zones, review medical and styling history, and identify the drivers behind shedding or thinning. You leave with a written, staged plan — and every consultation fee is credited toward your first programme service.",
    includes: [
      "Magnified trichoscope imaging with baseline photos",
      "Zone-by-zone density and miniaturisation notes",
      "Lifestyle, medication, and styling history review",
      "Written multi-phase plan with timelines",
    ],
  },
  {
    slug: "restoration-programme",
    name: "Density Restoration Programme",
    category: "restoration",
    priceFrom: 220,
    duration: "90 min / visit",
    summary: "Recurring in-studio therapy with progress imaging.",
    description:
      "A structured course of in-studio scalp therapy — exfoliation, targeted serums, low-level light, and guided home protocol — reviewed against your baseline images at each milestone. Priced per visit; most plans run six to twelve visits.",
    includes: [
      "Scalp exfoliation and decongesting treatment",
      "Targeted actives applied under professional guidance",
      "Low-level light therapy session",
      "Progress imaging and plan adjustment every 4th visit",
    ],
  },
  {
    slug: "topper-integration",
    name: "Topper & Integration Fitting",
    category: "restoration",
    priceFrom: 350,
    duration: "2 hr",
    summary: "Custom-matched hair systems, cut and blended in-studio.",
    description:
      "For areas where density cannot be regrown, we fit and customise premium toppers and integration pieces — matched to your colour and pattern, then cut and styled so the transition is invisible. Includes a fitting, customisation, and a styling lesson.",
    includes: [
      "Colour and pattern matching",
      "Base sizing and attachment method selection",
      "In-studio cut-in and blend",
      "Maintenance and re-application coaching",
    ],
  },

  // Colour
  {
    slug: "dimensional-blonding",
    name: "Dimensional Blonding",
    category: "color",
    priceFrom: 185,
    duration: "3 – 4 hr",
    summary: "Foil and balayage placement for depth and brightness.",
    description:
      "A full session of hand-painted and foiled lightening designed around your face and how your hair falls. We work in stages to protect integrity, glossing and toning to a finish that grows out softly.",
    includes: [
      "Custom lightening placement",
      "Bond-protecting additive throughout",
      "Toning and gloss",
      "Finishing blow-dry and style",
    ],
  },
  {
    slug: "lived-in-colour",
    name: "Lived-In Colour",
    category: "color",
    priceFrom: 140,
    duration: "2 – 3 hr",
    summary: "Root melts, glazes, and low-maintenance depth.",
    description:
      "Soft, rooted colour that flatters without a rigid regrowth line. Ideal between blonding sessions or as a standalone refresh.",
    includes: ["Root melt or shadow", "All-over gloss", "Blow-dry and style"],
  },
  {
    slug: "colour-correction",
    name: "Colour Correction",
    category: "color",
    priceFrom: 250,
    duration: "By consultation",
    summary: "Multi-session repair of banding, brass, or over-processing.",
    description:
      "Correction work is booked only after a consultation so we can assess condition, history, and the number of sessions required. Pricing is quoted per session against a clear roadmap.",
    includes: [
      "Strand testing and condition assessment",
      "Staged correction roadmap",
      "Integrity treatment at each visit",
    ],
  },

  // Extensions
  {
    slug: "hand-tied-extensions",
    name: "Hand-Tied Extensions",
    category: "extensions",
    priceFrom: 400,
    duration: "3 hr + hair",
    summary: "Wefted rows for natural length and fullness.",
    description:
      "Lightweight hand-tied wefts installed on a beaded foundation, colour-matched and cut to blend with your own hair. Price covers installation; hair is quoted separately after your consultation.",
    includes: [
      "Foundation install and weft placement",
      "Colour blend and custom cut",
      "Styling and home-care lesson",
    ],
  },
  {
    slug: "individual-extensions",
    name: "Individual / I-Tip Extensions",
    category: "extensions",
    priceFrom: 350,
    duration: "2 – 4 hr + hair",
    summary: "Strand-by-strand placement for fine hair.",
    description:
      "Discreet single-strand bonds suited to finer hair or targeted fullness. Installation price shown; hair quoted after consultation.",
    includes: ["Strand placement", "Colour blend and cut", "Move-up scheduling"],
  },
  {
    slug: "extension-maintenance",
    name: "Extension Move-Up",
    category: "extensions",
    priceFrom: 150,
    duration: "1.5 – 2.5 hr",
    summary: "Reposition and refresh every 6 – 9 weeks.",
    description:
      "Removal, reinstallation, and a re-blend to keep rows sitting close and comfortable as your hair grows.",
    includes: ["Take-down and scalp check", "Reinstall", "Re-blend and style"],
  },

  // Haircuts
  {
    slug: "precision-cut",
    name: "Precision Cut & Style",
    category: "haircuts",
    priceFrom: 75,
    duration: "60 min",
    summary: "Consultation, shampoo, cut, and finish.",
    description:
      "A cut built around your growth patterns, density, and how much time you want to spend at home — finished with a blow-dry and a few minutes of styling guidance.",
    includes: ["Consultation", "Shampoo and scalp massage", "Cut and finish"],
  },
  {
    slug: "dry-detail",
    name: "Dry Detail / Restyle",
    category: "haircuts",
    priceFrom: 95,
    duration: "75 min",
    summary: "Cutting into a finished style for shape and movement.",
    description:
      "A longer appointment for significant shape changes or curly and textured hair, cut dry so we can see exactly how it falls.",
    includes: ["Extended consultation", "Dry cutting", "Wash and re-style"],
  },
  {
    slug: "fringe-trim",
    name: "Fringe & Neckline Trim",
    category: "haircuts",
    priceFrom: 25,
    duration: "20 min",
    summary: "Complimentary within two weeks of a cut.",
    description:
      "A quick tidy of your fringe or neckline between full appointments. Free within fourteen days of a Precision Cut.",
    includes: ["Fringe or neckline shape", "Quick finish"],
  },

  // Treatments
  {
    slug: "bond-repair",
    name: "Bond Repair Treatment",
    category: "treatments",
    priceFrom: 45,
    duration: "30 min add-on",
    summary: "In-studio strengthening for compromised hair.",
    description:
      "A professional-strength bond-building treatment, added to any colour or styling appointment, to rebuild internal structure after chemical or heat stress.",
    includes: ["Multi-step application", "Heat processing", "Post-treatment seal"],
  },
  {
    slug: "scalp-therapy",
    name: "Scalp Therapy Facial",
    category: "treatments",
    priceFrom: 85,
    duration: "45 min",
    summary: "Exfoliation, massage, and a balancing mask.",
    description:
      "A standalone scalp reset — physical and enzymatic exfoliation, lymphatic massage, and a balancing mask — to relieve build-up, flaking, and tightness.",
    includes: ["Double exfoliation", "10-minute massage", "Balancing mask and rinse"],
  },
  {
    slug: "gloss-refresh",
    name: "Gloss & Shine Refresh",
    category: "treatments",
    priceFrom: 55,
    duration: "30 min",
    summary: "Tone and seal between colour appointments.",
    description:
      "A quick, low-commitment gloss to revive tone, boost shine, and smooth the cuticle — no lightener involved.",
    includes: ["Custom gloss", "Blow-dry"],
  },
];

export function servicesByCategory(categoryId: string): Service[] {
  if (categoryId === "all") return services;
  return services.filter((s) => s.category === categoryId);
}
