export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  /** Short credential line. */
  credentials: string;
  bio: string;
  /** Placeholder media label. */
  media: string;
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
    media: "Amanda — portrait",
    bookUrl: "/book?with=amanda",
    focus: ["Scalp & density assessment", "Restoration programmes", "Integration systems"],
  },
  {
    slug: "kayla",
    name: "Kayla",
    role: "Senior Colourist",
    credentials: "Advanced blonding certification · Master colour educator",
    bio: "Kayla specialises in dimensional blonding and multi-session correction. She is meticulous about hair integrity, working in stages and testing before every lightening service.",
    media: "Kayla — portrait",
    bookUrl: "/book?with=kayla",
    focus: ["Dimensional blonding", "Colour correction", "Lived-in colour"],
  },
  {
    slug: "ile",
    name: "ILE",
    role: "Permanent Makeup & Brow Artist",
    credentials: "Licensed PMU artist · Bloodborne pathogen certified",
    bio: "ILE brings a clinical, symmetry-first approach to permanent makeup — hairstroke brows, soft liner, and lip blush — with a mapping consultation before any pigment.",
    media: "ILE — portrait",
    bookUrl: "/book?with=ile",
    focus: ["Hairstroke brows", "Soft liner", "Lip blush"],
  },
  {
    slug: "kaydee",
    name: "Kaydee",
    role: "Extension Specialist",
    credentials: "Hand-tied & I-tip certified · 8 years",
    bio: "Kaydee focuses exclusively on extensions — matching, installing, and maintaining hand-tied and individual methods that stay comfortable and undetectable.",
    media: "Kaydee — portrait",
    bookUrl: "/book?with=kaydee",
    focus: ["Hand-tied wefts", "I-tip / individual", "Maintenance & blending"],
  },
  {
    slug: "renata",
    name: "Renata",
    role: "Stylist & Treatment Therapist",
    credentials: "Precision cutting diploma · Scalp therapy certified",
    bio: "Renata delivers precision and dry-detail cutting alongside the studio's scalp therapy and bond-repair treatments. She is known for low-maintenance shapes that grow out well.",
    media: "Renata — portrait",
    bookUrl: "/book?with=renata",
    focus: ["Precision & dry cutting", "Scalp therapy", "Bond repair"],
  },
  {
    slug: "new-chair",
    name: "Your future chair",
    role: "Apprentice & Associate openings",
    credentials: "Structured pathway from apprentice to senior",
    bio: "We are always meeting stylists who want to train seriously. If that's you, the Join Us page has the details.",
    media: "Studio — hiring",
    bookUrl: "/join-us",
    focus: ["Mentored apprenticeship", "Paid training days", "Clear advancement"],
  },
];
