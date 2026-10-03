export type ServiceCategory = {
  id: string;
  label: string;
  /** One-line description shown when the tab is active. */
  blurb: string;
  /** Media label (alt text). */
  media: string;
  /** Photo revealed behind the tab on hover (path under /public). */
  image: string;
};

/**
 * Service menu — mirrors the salon's Vagaro listing (names, descriptions,
 * prices), with the client's corrections applied on top.
 */
export type Service = {
  slug: string;
  name: string;
  category: string; // ServiceCategory.id
  /** Numeric price in USD; null when Vagaro lists no fixed price. */
  price: number | null;
  /** Overrides the default price display (e.g. "$175+", "Priced hourly"). */
  priceLabel?: string;
  description: string;
};

export function formatPrice(service: Service): string {
  if (service.priceLabel) return service.priceLabel;
  if (service.price === null) return "Price varies";
  if (service.price === 0) return "Complimentary";
  return `$${service.price}`;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "all",
    label: "All",
    blurb: "Every service across the salon.",
    media: "The Nine Zero Four salon floor",
    image: "/studio-floor.webp",
  },
  {
    id: "extensions",
    label: "Extensions",
    blurb: "Hand-tied, tape-in, and K-tip extensions for seamless length and fullness.",
    media: "A stylist installing tape-in extensions",
    image: "/work-tape-in.webp",
  },
  {
    id: "haircuts",
    label: "Haircuts",
    blurb: "Precision cuts, smoothing, and in-salon treatment.",
    media: "A blow-dry and finish at the chair",
    image: "/work-blowdry.webp",
  },
  {
    id: "color",
    label: "Color Services",
    blurb: "Custom color, glosses, and grey coverage tailored to you.",
    media: "Soft dimensional blonde colour",
    image: "/work-blonde-back.webp",
  },
  {
    id: "hairloss",
    label: "Hair Loss Services",
    blurb: "Mesh and meshless integration, CR Lab hair systems, and scalp pigmentation for thinning hair.",
    media: "An extension bond at the crown",
    image: "/work-extension-detail.webp",
  },
];

export const services: Service[] = [
  // Extensions
  {
    slug: "custom-extension-consultation",
    name: "Custom Extension Consultation",
    category: "extensions",
    price: 35,
    description:
      "Price for the consult will be refunded at the time of the appointment, or used towards the extensions. If you are a no-show, you will forfeit this amount. This fee allows for commitment to the appointment and values dedicated time.",
  },
  {
    slug: "handtied-extension-1-row-install",
    name: "Handtied Extension 1 Row Install",
    category: "extensions",
    price: 350,
    description: "Handtied extension installation for 1 row.",
  },
  {
    slug: "1-row-maintenance",
    name: "1 Row Maintenance",
    category: "extensions",
    price: 265,
    description:
      "Specializes in the removal and reinstallation of your existing one row extensions, ensuring a seamless and professional result. Clients are advised to arrive with clean, product-free hair; a blowout can be added for an additional fee.",
  },
  {
    slug: "2-row-maintenance",
    name: "2 Row Maintenance",
    category: "extensions",
    price: 350,
    description:
      "Consists of removing your 2 rows of hand-tied extensions, a signature shampoo, reinstall, blowout, and a treatment consisting of signature products customized together just for you. Includes beach waves if desired.",
  },
  {
    slug: "3-row-maintenance",
    name: "3 Row Maintenance",
    category: "extensions",
    price: 450,
    description:
      "Consists of removing your 3 rows of hand-tied extensions, a signature shampoo, reinstall, blowout, and a treatment consisting of signature products customized together just for you. Includes beach waves if desired.",
  },
  {
    slug: "extension-3-rows-plus",
    name: "Extension 3 Rows +",
    category: "extensions",
    price: 475,
    description:
      "Offers specialized maintenance appointments for hair extensions, ensuring that three or more rows are expertly cared for and refreshed. Thorough assessments and adjustments are provided to maintain extension integrity.",
  },
  {
    slug: "tape-row-install",
    name: "Tape Row Install",
    category: "extensions",
    price: 175,
    priceLabel: "$175+",
    description:
      "Must have a consultation prior to install. Offers a seamless and natural look by applying high-quality tape-in extensions. Includes a professional blowout.",
  },
  {
    slug: "2-tape-rows",
    name: "2 Tape Rows",
    category: "extensions",
    price: 275,
    description:
      "Must have a consultation prior to install. Offers a seamless and natural look by applying two rows of high-quality tape-in extensions. Includes a professional blowout.",
  },
  {
    slug: "covet-mane-fix-tape",
    name: "Covet & Mane Fix Tape",
    category: "extensions",
    price: 15,
    description:
      "A quick 15-minute appointment to secure any loose tape extensions following installation. A fee applies if extensions were installed two weeks or more prior.",
  },
  {
    slug: "k-tip-service",
    name: "K Tip Service",
    category: "extensions",
    price: null,
    priceLabel: "Priced hourly",
    description:
      "Individual keratin bonds. Charged per hour for the install service. Hair is sold separately. Must have a consultation prior to booking.",
  },
  {
    slug: "k-tip-removal",
    name: "K Tip Removal",
    category: "extensions",
    price: null,
    priceLabel: "Priced hourly",
    description:
      "Removing K tips; charged by the hour. A quote is required before booking.",
  },

  // Haircuts
  {
    slug: "woman-haircut",
    name: "Woman Haircut",
    category: "haircuts",
    price: 75,
    description:
      "Includes a thorough wash followed by a precision cut on DRY hair. Each haircut is tailored to enhance unique features with Vidal Sassoon styling techniques.",
  },
  {
    slug: "magic-sleek",
    name: "Magic Sleek",
    category: "haircuts",
    price: 350,
    description:
      "A gentle and effective hair treatment using natural ingredients to smooth, straighten, and control frizz. Suitable for all hair types (including colored hair) and protects color longevity.",
  },
  {
    slug: "fusio-dose-treatment",
    name: "Fusio-Dose Treatment",
    category: "haircuts",
    price: 45,
    description: "An in-salon Fusio-Dose treatment, customized to your hair.",
  },

  // Color Services
  {
    slug: "color-consultation",
    name: "Color Consultation",
    category: "color",
    price: 0,
    description:
      "A pre-booked 30-minute appointment to consult about current color and future goals. Sets up a game plan and path (does not include performing color services). A $25 fee applies toward your total quote when a full service appointment is booked.",
  },
  {
    slug: "full-custom-color",
    name: "Full Custom Color",
    category: "color",
    price: 285,
    description:
      "Vibrant, tailored hair color ranging from highlights to lowlights. Additional fees apply for blowouts and haircuts. Services with Renee start at $385.",
  },
  {
    slug: "partial-custom-color",
    name: "Partial Custom Color",
    category: "color",
    price: 235,
    description:
      "Ideal for refreshing your look between full highlighting appointments, featuring tailored face-frame highlights or lowlights. Haircut incurs an additional charge.",
  },
  {
    slug: "single-process-color",
    name: "Single Process Color / Covering Greys",
    category: "color",
    price: 145,
    description:
      "Consists of coloring the base of your hair only for covering gray regrowth or going darker at the base. Haircuts are extra.",
  },
  {
    slug: "lightener-root-retouch",
    name: "Lightener Root Retouch",
    category: "color",
    price: null,
    description:
      "For super blonde/platinum blonde root touch-ups. Intended for less than half an inch of regrowth (up to 6 weeks maintenance; extra fees apply beyond that timeframe).",
  },
  {
    slug: "t-zone-color",
    name: "T-Zone Color",
    category: "color",
    price: null,
    description:
      "Refresh between usual single process color appointments. Includes Face Frame Color, Blow Dry, and Style.",
  },
  {
    slug: "color-gloss",
    name: "Color Gloss",
    category: "color",
    price: 55,
    description: "Offers a vibrant and durable finish. A blowout is not included.",
  },

  // Hair Loss Services
  {
    slug: "hair-loss-thinning-consultation",
    name: "Hair Loss / Thinning Consultation",
    category: "hairloss",
    price: 25,
    description:
      "For thinning hair, shedding, or visible scalp due to hormones, stress, genetics, postpartum, or weight loss. The $25 charge is applied toward your service if you move forward.",
  },
  {
    slug: "mesh-or-meshless-integration",
    name: "Mesh or Meshless Integration",
    category: "hairloss",
    price: null,
    description:
      "Non-surgical, semi-permanent hair loss solution using a breathable mesh foundation attached with hair extensions, blending with existing hair for thinning or loss.",
  },
  {
    slug: "mesh-designer-appointment",
    name: "Mesh Designer Appointment",
    category: "hairloss",
    price: 150,
    description:
      "Personalized 1 to 1.5-hour experience creating a hair system tailored for mesh integration.",
  },
  {
    slug: "scalp-pigmentation",
    name: "Scalp Pigmentation",
    category: "hairloss",
    price: 450,
    description:
      "Specialized technique to fill in areas of thinning hair using color-matched pigments to create the appearance of a fuller scalp.",
  },
  {
    slug: "cr-lab-designer-appointment",
    name: "CR Lab Designer Appointment",
    category: "hairloss",
    price: 150,
    description:
      "A 1.5-hour session including a detailed head casting process to create a personalized hair system. Installation follows 3 to 4 months later.",
  },
  {
    slug: "cr-lab-install-appointment",
    name: "CR Lab Install Appointment",
    category: "hairloss",
    price: 0,
    description:
      "Seamless and professional installation of your custom hair system following the initial creation period.",
  },
];

export function servicesByCategory(categoryId: string): Service[] {
  if (categoryId === "all") return services;
  return services.filter((s) => s.category === categoryId);
}
