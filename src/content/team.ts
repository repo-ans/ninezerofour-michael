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
    slug: "renee",
    name: "Renee",
    role: "Founder · Color & Extension Specialist",
    credentials: "20+ years of salon ownership",
    bio: "Guiding the brilliance of Nine Zero Four is our founder, Renee. With over 20 years of salon ownership experience, Renee has shaped the salon into what it is today. Renee's dedication to setting trends, fostering team collaboration, and ensuring every client feels amazing defines the Nine Zero Four experience. Beyond just hair, Renee's expertise is about boosting confidence, enabling self-expression, and delivering exceptional beauty. Renee is accepting new color and extension clients, and as a color and extension specialist she does not offer stand alone haircut services anymore. She books out about 4-6 weeks in advance. Her uniqueness shines through her spirited personality, and sitting in her chair will always leave you filled with laughter and smiles. For an extraordinary hair experience led by a visionary with a zest for life, Renee Weyeneth at Nine Zero Four Beauty Bar is your new stylist.",
    media: "Renee, founder and color & extension specialist",
    image: "/team-renee.webp",
    imagePosition: "50% 22%",
    bookUrl: site.bookUrl,
    focus: ["Color", "Extensions"],
  },
  {
    slug: "amanda",
    name: "Amanda",
    role: "Hairstylist",
    credentials: "8 years behind the chair · Certified in balayage",
    bio: "Hello! My name is Amanda! I’ve been a hairstylist for 8 years, and I’m passionate about creating beautiful blondes, seamless extensions, and natural-looking dimensional color. I’m certified in balayage and proud to have completed multiple Master Stylist Extension classes. Whether you’re looking for a fresh new look or a subtle update, I’m here to bring your vision to life. I can’t wait to have you in my chair!",
    media: "Amanda, hairstylist",
    image: "/team-amanda.webp",
    imagePosition: "50% 22%",
    bookUrl: site.bookUrl,
    focus: ["Blondes", "Extensions", "Dimensional color"],
  },
];
