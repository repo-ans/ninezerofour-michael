export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  excerpt: string;
  media: string;
  /** Body as an array of paragraphs (placeholder copy). */
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "reading-your-scalp",
    title: "What a scalp analysis actually tells us",
    date: "2025-07-02",
    readingTime: "5 min read",
    category: "Restoration",
    excerpt:
      "Density, miniaturisation, inflammation, follicular units per zone — the language behind the images we take at your first visit.",
    media: "Trichoscope imaging",
    body: [
      "Most people arrive at a consultation with one question: is my hair falling out? The honest answer is that everyone sheds — the useful question is whether the hair growing back is as strong as the hair that left, and where that balance is shifting.",
      "Under magnification we can see the width of individual strands within a follicular unit. When thicker terminal hairs are being replaced by finer, shorter ones, that's miniaturisation, and it tends to follow a pattern. Mapping it across defined zones of the scalp gives us a baseline we can measure against three and six months later.",
      "We also look at the skin itself — redness, flaking, build-up around the follicle — because a scalp under stress rarely grows its best hair. Often the first phase of a plan is simply calming that environment.",
      "None of this is a diagnosis; where something looks medical, we refer. But it's enough to build a staged, realistic plan and to know quickly whether it's working.",
    ],
  },
  {
    slug: "blonding-without-breakage",
    title: "Going blonder without wrecking your hair",
    date: "2025-06-11",
    readingTime: "4 min read",
    category: "Colour",
    excerpt:
      "Why we lighten in stages, what bond additives really do, and how to tell if your hair can take another session.",
    media: "Foil placement",
    body: [
      "The fastest route to bright blonde is almost never the healthiest one. Hair has a finite amount of structural protein, and every lightening service spends some of it. Our job is to spend it slowly.",
      "Working in stages — lifting part of the head, or lifting less per visit — lets us assess how your hair responds before committing further. Bond-protecting additives help, but they're insurance, not permission to over-process.",
      "A good sign your hair can take another session: it still has elasticity when wet, the ends aren't gummy, and last time's colour held its tone. If any of those are off, we treat first and lighten later.",
    ],
  },
  {
    slug: "extensions-that-last",
    title: "Making extensions last the full cycle",
    date: "2025-05-19",
    readingTime: "3 min read",
    category: "Extensions",
    excerpt:
      "The home-care habits that decide whether your move-up is comfortable or overdue.",
    media: "Hand-tied wefts",
    body: [
      "Extensions fail early for predictable reasons: sleeping on wet hair, skipping the loop brush, and letting product build up at the foundation.",
      "Dry your roots before bed, brush from the ends up twice a day, and clarify the attachment area weekly. Book your move-up at six to nine weeks — waiting longer puts tension on your own hair.",
      "Done well, a single set of quality hair can be moved up several times before it needs replacing.",
    ],
  },
  {
    slug: "between-appointments",
    title: "A realistic between-appointments routine",
    date: "2025-04-08",
    readingTime: "4 min read",
    category: "Treatments",
    excerpt:
      "Four products, three habits, and the one weekly step most people skip.",
    media: "Home-care shelf",
    body: [
      "You don't need ten products. You need a gentle cleanser, a conditioner matched to your length, a weekly treatment, and heat protection — used consistently.",
      "The step most people skip is the weekly scalp cleanse. Build-up doesn't just dull your hair; it slows the follicle. Five minutes with an exfoliating scalp product once a week changes how the next appointment goes.",
      "Everything else is habit: lower heat settings, air-dry when you can, and don't wash the day before a colour appointment.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
