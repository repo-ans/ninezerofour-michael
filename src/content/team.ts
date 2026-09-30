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
    image: "/team-amanda.webp",
    imagePosition: "50% 22%",
    bookUrl: site.bookUrl,
    focus: ["Scalp & density assessment", "Restoration programmes", "Integration systems"],
  },
  {
    slug: "renee",
    name: "Renee",
    role: "Extensions & Hair-Loss Solutions Specialist",
    credentials:
      "Hair extensions specialist since 2014 · Thinning-hair & hair-loss specialist since 2019",
    bio: "Renee has spent her career going deep rather than wide. Since 2014 she's specialised in hair extensions, including K-tip; since 2019 her main focus has been fine, thin, and thinning hair — mesh and meshless integration systems and their ongoing maintenance. She trains other stylists on the team in these techniques as the studio grows its hair-loss specialty.",
    media: "Renee, extensions and hair-loss solutions specialist",
    image: "/team-renee.webp",
    imagePosition: "50% 22%",
    bookUrl: site.bookUrl,
    focus: ["K-tip extensions", "Mesh & meshless integration", "Thinning-hair solutions"],
  },
];
