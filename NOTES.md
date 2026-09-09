# Nine Zero Four — build notes

Next.js 16 (App Router) · Tailwind CSS v4 · Framer Motion (`motion`) · TypeScript.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where things live

| Area | Path |
|---|---|
| Design tokens (colours, fonts, radius) — **the re-skin surface** | `src/app/globals.css` (`:root`) |
| Copy & data (services, team, FAQs, blog, contact) | `src/content/*` |
| Pages | `src/app/*/page.tsx` |
| Layout (nav, footer) | `src/components/layout/` |
| Animation primitives | `src/components/motion/` |
| Shared UI | `src/components/ui/` |

## Animations (all in `src/components/`)

1. **Oversized hero** — `hero/OversizedHero.tsx`: bottom-anchored headline bleeding off-edge, load fade-in.
2. **White-panel scroll reveal** — `motion/StickyPanelSection.tsx`: hero pins, panel slides up over it (home page only).
3. **Hover-reveal category tabs** — `services/CategoryTabs.tsx`: photo crossfades in on hover, text inverts.
4. **Hover-expand service cards** — `services/ServiceCard.tsx`: actions fade/slide in on hover (always shown on touch).
5. **Service detail modal** — `services/ServiceModal.tsx`: `AnimatePresence`, backdrop blur, scale-in.
6. **Scroll reveals** — `motion/Reveal.tsx` (`<Reveal>` / `<RevealItem>`): `whileInView` fade + slide-up, staggered.

All respect `prefers-reduced-motion` (via `<MotionConfig reducedMotion="user">` in `layout.tsx` plus explicit gates on the scroll-scrubbed hero).

## Placeholders — swap before launch

- **Photography.** Every image is `src/components/ui/Media.tsx` (a labelled placeholder block). Replace with `next/image`; each call site already passes a descriptive `label`. Add real hosts to `next.config.ts` `images.remotePatterns` if remote.
- **Brand palette / fonts.** Currently a neutral clinical-editorial system (warm off-white + deep ink + one eucalyptus accent, Fraunces + Inter). Edit `:root` in `globals.css` once inspiration lands.
- **Contact details** (`src/content/site.ts`) — address, phone, hours are transcribed from the current live site. **Confirm with the client.**
- **Booking.** `/book` and every "Book Now" post to a stub form (`src/components/book/BookingForm.tsx`, `src/components/layout/NewsletterForm.tsx`). Wire to the studio's provider (GHL / Bookedly). The `/book` sidebar has a slot for an embed.
- **Blog.** 4 placeholder posts in `src/content/blog.ts`. No CMS — content is typed files for now.

## Known follow-ups

- Hair-restoration line is folded into Services as the "Scalp & Restoration" category; promote to its own page/nav item if the client wants it more prominent.
- Consider a real image for the hero so the scroll-panel effect reads fully.
