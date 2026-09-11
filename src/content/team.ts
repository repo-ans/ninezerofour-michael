import { site } from "@/content/site";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  /** Short credential line. */
  credentials: string;
  bio: string;
  /** Media label (alt text). */
  media: string;
  /** Portrait photo (path under /public). */
  image?: string;
  /** CSS object-position for the portrait crop. */
  imagePosition?: string;
  bookUrl: string;
  focus: string[];
};

export const team: TeamMember[] = [
  {
    slug: "amanda",
    name: "Amanda",
    role: "Founder & Restoration Lead",
    credentials: "Certified trichology practitioner · 14 years behind the chair",
    bio: "Amanda built Nine Zero Four around a single idea: hair concerns deserve the same rigour as skin. She leads every scalp and density assessment, and oversees the studio's restoration protocols and imaging standards.",
    media: "Amanda, founder and restoration lead",
    image: "/team4amanda.webp",
    imagePosition: "52% 18%",
    bookUrl: site.bookUrl,
    focus: ["Scalp & density assessment", "Restoration programmes", "Integration systems"],
  },
  {
    slug: "kayla",
    name: "Kayla",
    role: "Senior Colourist",
    credentials: "Advanced blonding certification · Master colour educator",
    bio: "Kayla specialises in dimensional blonding and multi-session correction. She is meticulous about hair integrity, working in stages and testing before every lightening service.",
    media: "Kayla, senior colourist",
    image: "/team5kayla.webp",
    imagePosition: "50% 18%",
    bookUrl: site.bookUrl,
    focus: ["Dimensional blonding", "Colour correction", "Lived-in colour"],
  },
  {
    slug: "ile",
    name: "ILE",
    role: "Permanent Makeup & Brow Artist",
    credentials: "Licensed PMU artist · Bloodborne pathogen certified",
    bio: "ILE brings a clinical, symmetry-first approach to permanent makeup — hairstroke brows, soft liner, and lip blush — with a mapping consultation before any pigment.",
    media: "ILE, permanent makeup and brow artist",
    // team6Ile.webp is a landscape marketing banner — needs a real portrait.
    imagePosition: "50% 30%",
    bookUrl: site.bookUrl,
    focus: ["Hairstroke brows", "Soft liner", "Lip blush"],
  },
  {
    slug: "kaydee",
    name: "Kaydee",
    role: "Extension Specialist",
    credentials: "Hand-tied & I-tip certified · 8 years",
    bio: "Kaydee focuses exclusively on extensions — matching, installing, and maintaining hand-tied and individual methods that stay comfortable and undetectable.",
    media: "Kaydee, extension specialist",
    image: "/team7Kaydee.webp",
    imagePosition: "20% 18%",
    bookUrl: site.bookUrl,
    focus: ["Hand-tied wefts", "I-tip / individual", "Maintenance & blending"],
  },
  {
    slug: "renata",
    name: "Renata",
    role: "Stylist & Treatment Therapist",
    credentials: "Precision cutting diploma · Scalp therapy certified",
    bio: "Renata delivers precision and dry-detail cutting alongside the studio's scalp therapy and bond-repair treatments. She is known for low-maintenance shapes that grow out well.",
    media: "Renata, stylist and treatment therapist",
    image: "/team8unnamedavatar.webp",
    imagePosition: "44% 10%",
    bookUrl: site.bookUrl,
    focus: ["Precision & dry cutting", "Scalp therapy", "Bond repair"],
  },
  {
    slug: "new-chair",
    name: "Your future chair",
    role: "Apprentice & Associate openings",
    credentials: "Structured pathway from apprentice to senior",
    bio: "We are always meeting stylists who want to train seriously. If that's you, the Join Us page has the details.",
    media: "The studio — now hiring",
    image: "/join1.webp",
    imagePosition: "50% 35%",
    bookUrl: "/join-us",
    focus: ["Mentored apprenticeship", "Paid training days", "Clear advancement"],
  },
];
