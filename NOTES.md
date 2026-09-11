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

## Images

- Client photos live in `public/` and are wired through `src/components/ui/Media.tsx`.
  `Media` renders `next/image` when given `src`, else a labelled placeholder.
  Assignments: hero + haircuts tab → `join3`; extensions → `services1`; colour →
  `services2` / `blog1`; restoration → `services4`; products → `services5` /
  `team2virtue`; team portraits → `team4amanda`/`team5kayla`/`team7Kaydee`/
  `team8unnamedavatar`; group shots → `team3` / `join1`; scissors → `join2`.
- **Still needs a real photo:** `ILE` on the Team page — `team6Ile.webp` is a
  landscape marketing banner, so that card shows the placeholder. Drop a portrait
  in `public/` and set `image` / `imagePosition` in `src/content/team.ts`.
- Portrait crops are tuned per-image with `imagePosition` (CSS `object-position`)
  in the content files — re-check these when photos are replaced.

## Placeholders — swap before launch

- **Brand palette / fonts.** Currently a neutral clinical-editorial system (warm off-white + deep ink + one eucalyptus accent, Fraunces + Inter). Edit `:root` in `globals.css` once inspiration lands.
- **Contact details** (`src/content/site.ts`) — email, hours, and the Vagaro
  booking link are the client's real values (email `ninezerofourpvb@gmail.com`,
  Vagaro `vagaro.com/ninezerofourbeautybar1`). Address + phone still from the
  current live site — confirm. `site.contacts` holds the studio owner names
  (internal reference, not shown on the site). Socials still point to bare
  domains — add the real handles.
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
