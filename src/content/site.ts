export type NavItem = { label: string; href: string };

/** Primary navigation — mirrors the current site. */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "CRLAB", href: "/crlab" },
  { label: "Team", href: "/team" },
  { label: "Join Us", href: "/join-us" },
  { label: "Blog", href: "/blog" },
];

export const site = {
  name: "Nine Zero Four",
  wordmark: "NINEZEROFOUR",
  tagline: "Beauty Bar",
  /** Short positioning line — clinical / credential-forward register. */
  descriptor:
    "A Ponte Vedra Beach studio for advanced hair restoration, dimensional colour, and natural extensions — delivered with clinical precision.",
  /** External booking — Vagaro. Opens in a new tab. */
  bookUrl: "https://www.vagaro.com/ninezerofourbeautybar1",
  address: {
    line1: "1110 A1A N, Suite 105",
    line2: "Ponte Vedra Beach, FL 32082",
  },
  phone: "(904) 252-5345",
  phoneHref: "tel:+19042525345",
  email: "ninezerofourpvb@gmail.com",
  emailHref: "mailto:ninezerofourpvb@gmail.com",
  hours: [
    { day: "Monday – Thursday", time: "10:00 AM – 7:00 PM" },
    { day: "Friday", time: "10:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  /** Studio contacts (internal reference). */
  contacts: ["Amanda Lawler", "Renee Weyeneth"],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
  /** Booking / cancellation policy shown in the footer. */
  policy:
    "A card on file is required to reserve any appointment. Cancellations or changes made within 48 hours of your reservation, and no-shows, are subject to a charge of 50% of the scheduled service.",
} as const;
