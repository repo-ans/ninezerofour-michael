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

## Brand system & images

- **Palette** (client "Color / font inspo" board) lives in `:root` in `src/app/globals.css`:
  Ivory `#F7F4EF` (page) · Sand `#DCCBBD` (hairlines / wells, via tints) · Taupe `#A88F7B`
  (progress bar) · Mocha `#8D8076` (deepened to `#6C635D` for text-safe accent) ·
  Charcoal `#3A3838` (text + dark bands). `/crlab` uses a deeper-mocha variant of the dark band.
- **Fonts**: Cormorant Garamond (headlines) · Montserrat (subheads + body) · script accent.
  The board specifies *Austie Script* (licensed) — **Mrs Saint Delafield** is the free stand-in
  (used for "Think ahead." and the hiring card). Swap in `src/app/layout.tsx` if the licence is bought.
- **Images** are served from `public/` as optimised WebPs. Originals (heavy PNGs, the
  palette board, review screenshots, docx/pdf) are in `source-assets/new-images/`; images that
  were replaced are in `source-assets/replaced-images/` — neither folder is served.
  Assignments: hero `work-blonde-profile`; `/crlab` hero `work-blowdry`; tiles
  `studio-scalp-wall` / `work-blonde-back` / `work-tape-in`; before/after `result-colour`,
  `result-length`; reviews `review-renee`, `review-amanda` (Google screenshots, cropped);
  Amanda `team-amanda`; Join Us `stylist-seated` (**confirm who this is — may be Renee's portrait**).
- **Still needs a real photo:** `ILE` on the Team page (placeholder).
- Portrait crops are tuned per-image with `imagePosition` (CSS `object-position`) in the content files.

## Placeholders — swap before launch

- **Contact details** (`src/content/site.ts`) — email, hours, and the Vagaro
  booking link are the client's real values (email `ninezerofourpvb@gmail.com`,
  Vagaro `vagaro.com/ninezerofourbeautybar1`). Address + phone still from the
  current live site — confirm. `site.contacts` holds the studio owner names
  (internal reference, not shown on the site). Social links are the real
  Instagram / Facebook / TikTok from the client capture form.
- **Booking.** "Book Now" everywhere links to **Vagaro** in a new tab
  (`site.bookUrl` → `SmartLink` / `ButtonLink` auto-detect absolute URLs).
  `/book` keeps a "Send a message" form (`BookingForm`) for questions and the
  `?intent=careers` application flow — it is not connected to anything yet
  (`onSubmit` is a stub). `/crlab` converts via its own embedded GHL form.
- **Blog.** 4 placeholder posts in `src/content/blog.ts`. No CMS — content is typed files for now.
- **`metadataBase`** in `layout.tsx` is `https://www.ninezerofourbeautybar.com` — update if the domain differs.

## Known follow-ups

- Hair-restoration line is folded into Services as the "Scalp & Restoration" category; promote to its own page/nav item if the client wants it more prominent.
- Team member roles in `src/content/team.ts` are drafted — confirm against the real team.
