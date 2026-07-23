# Ethan Mah — Portfolio Site Build Plan

> **How to use this document.** Drop this file in the root of your repo as `PORTFOLIO_PLAN.md`. When working with Claude Code, start each session with:
> `Read PORTFOLIO_PLAN.md. We're building Phase X. Follow the design system in §3 exactly — don't invent new colors, fonts, or spacing values.`
> Build one page per session. Don't let it do all five at once; you'll lose control of the design system.
>
> **This revision reconciles the plan with what's actually shipped.** An earlier draft of this doc proposed a different visual system (cool blue-black, Bricolage Grotesque, cyan accents) than what's built (warm dark, Fraunces, amber-only). We're keeping the shipped visual system — it's already built, verified, and good — and adopting this draft's sharper positioning, voice, privacy, and content-architecture thinking on top of it. §0 below is the honest gap list between this doc and the live code; work through it before treating any single line here as already true.

---

## 0. Known gaps — reconcile before relying on this doc

- **Hero headline says the forbidden phrase.** §1 says never write "glue guy" on the site. The shipped Home hero literally reads *"The glue that keeps the team shipping."* Needs a new headline (a candidate is in §5).
- **Date formats don't match §1's rules yet.** Experience currently shows month-level ranges ("July 2023 – Present", "May–Aug 2022, Jan–Apr 2023") and Queen's shows years ("2020 – 2025"). The rule is years-only for roles, no years at all for education.
- **The two highest-signal claims from §1 aren't in the copy yet:** the LLM chat assistant work at Jiffy, and "Church Duds" by name. Both should show up on Landing and/or Experience.
- **Content isn't extracted to `src/content/*.ts` yet.** Every page still hardcodes its copy/data inline. Worth doing before Projects/Passions/Contact add three more files' worth of inline arrays.
- **No dedicated `Tile` / `Tag` / `Stat` / `SectionHeading` component layer.** The site uses Tailwind utility component classes instead (`.card`, `.chip`, `.chip-lead`, `.btn-primary`, `.tile-label` in `index.css`). This works fine and is simpler — treat it as the real component layer, not a gap, unless it starts causing duplication.
- **Telltale strip, boot sequence, animated nav-underline, and the fade+rise page transition are not built.** All are nice-to-have polish, described below adapted to the warm palette, not yet implemented.
- **Icon library is `react-icons`, already integrated everywhere** (not `lucide-react`). No functional reason to swap; keep it.
- **Hosting is GitHub Pages, not Cloudflare Pages** — HashRouter + GitHub Actions deploy, built and verified end-to-end. **A future migration to Cloudflare Pages is planned** (cleaner URLs, native SPA fallback, free analytics) but not scheduled. When it happens: swap `HashRouter` → `BrowserRouter`, add a `_redirects` file, drop the Pages GitHub Action in favor of Cloudflare's git integration, and change `base` in `vite.config.ts` back to `/`.

---

## 1. Positioning brief

Everything on this site serves one job: make a recruiter or hiring manager think *"this person will take the thing nobody else wants to own, and they'll finish it."*

**The three claims the site must land, in priority order:**

1. **I ship on surfaces that are hard to ship on.** Not just apps — pre-release vehicles, hardware-in-the-loop rigs, a 500K-download consumer app, CAN bus signals, AOSP. This is the differentiator. Most engineers your age have shipped to exactly one kind of surface.
2. **I build *with* AI, not around it.** You use Claude Code daily *and* you're building an LLM chat assistant into a production consumer app. That's the difference between "uses ChatGPT" and "ships AI product." Lead with the second. **Before this goes live: confirm with Jiffy that naming the LLM chat assistant work publicly is fine** — it's now the second-highest-priority claim on the whole site, more prominent than earlier drafts, which raises the stakes on that check.
3. **I take the unowned thing.** Fastlane was your initiative, nobody assigned it. The emulator SME role you grew into. Cross-platform point of contact. This is your "glue guy" claim — but *never say "glue guy" on the site.* Show it three times and let the reader name it themselves.

**On the AI-resistance question:** "writes Android screens" is a compressible job. Three things in your background are not: (a) work that touches physical hardware and vehicle systems, (b) cross-team coordination and being the person who knows why the system behaves the way it does, and (c) shipping LLM features rather than being replaced by them. The site should quietly stack the evidence for all three. Never argue the point explicitly — a site that says "I'm AI-proof" reads defensive. Show the work; the conclusion is obvious.

**De-emphasis rules (apply everywhere):**
- Job title on the site is **"Android Developer — Jiffy on Demand."** No "Junior." *(Already matches shipped Experience/Home copy.)*
- Education block shows **"Queen's University — Bachelor of Computing, Software Design Specialization."** No years. *(Gap — see §0.)*
- Experience dates use **years only**: `2023 — Present`, `2022 / 2023`. No months. *(Gap — see §0.)*
- Never write "3+ years" and a grad year on the same page. Let the reader do arithmetic if they want to.

**Voice:** first person, warm, dry humor, specific over impressive. Contractions. Short sentences next to long ones. You're allowed to admit what broke — in fact you must (see §7, Nexus). Engineers who can name their own product failures interview 10× better than engineers who can't, and recruiters notice it on a page.

**Anti-voice — never use these:** "passionate about leveraging," "results-driven," "wearing many hats," "team player," "cutting-edge," "seamlessly," "solutions." If a sentence could appear on any other engineer's portfolio, cut it.

---

## 2. Technical setup

### Stack (as shipped)

```
Vite + React 19 + TypeScript
Tailwind CSS v4 (via @tailwindcss/vite, config-free — tokens live in src/index.css)
react-router-dom v7 (HashRouter)
framer-motion — animation (Reveal, PageTransition components)
react-icons — icons (Fa / Fa6 / Md sets in use)
```

**Why Vite over Next.js:** the site is fully static with no server-rendering needs. Vite is faster to iterate on, simpler for Claude Code to reason about, and Tailwind v4 is config-free — tokens live directly in CSS as `@theme` variables.

### Hosting

**Current: GitHub Pages.** `HashRouter` (URLs look like `/#/experience`) sidesteps GitHub Pages' lack of SPA fallback with zero extra config — a hard refresh on any route just works, verified end-to-end against a production build. `vite.config.ts` sets `base: '/ethan-portfolio/'` to match the repo name exactly. Deploys via `.github/workflows/deploy.yml` on push to `main`.

**Planned future migration: Cloudflare Pages.** Free, connects straight to the GitHub repo, deploys on push, handles SPA fallback natively (one line in `_redirects`) so URLs can drop the `#/`, free custom domain with SSL, and free privacy-first analytics with no cookie banner. When this happens: switch `HashRouter` → `BrowserRouter`, add `_redirects`, set `base: '/'`, retire the GitHub Actions workflow. Not scheduled yet — GitHub Pages is fully working, so there's no urgency.

**Domain: buy one when ready.** `ethanmah.com` or `ethanmah.dev` (~$12–15/year) reads far more credible than `ethaaaanm.github.io/ethan-portfolio`. Cheapest credibility available. Do this whenever — not blocking, and easiest to bundle with the Cloudflare migration since Cloudflare Registrar + Pages pair naturally.

### Contact form + protecting your data

This is the concrete spec for the not-yet-built Contact page (§9), and it directly closes the privacy gap flagged in earlier reviews (personal Gmail currently sits in a raw `mailto:` on the Contact page).

1. **Form service: Web3Forms or Formspree.** Both free at this volume. Post to their endpoint; they email you. Your real address never appears in the HTML. Web3Forms' access key is safe to expose publicly — it's write-only, it can't read submissions.
2. **Honeypot field.** A hidden input named e.g. `botcheck`. Real humans leave it empty; bots fill it. Drop any submission where it's non-empty. Both services support this natively.
3. **Never put a `mailto:` in the markup.** For a visible "email me" action, render it as a "Copy email" button that assembles the string in JS at click time (`['ethanmah238', 'gmail.com'].join('@')`), with a copied-to-clipboard confirmation. Stops the overwhelming majority of scrapers.
4. **No phone number anywhere on the site.** The site-hosted resume PDF must be a separate export with the phone number removed — keep `resume-public.pdf` (site) distinct from the real one used for applications.

### Analytics, SEO, and OG images

- **SEO** — `<title>` + `<meta description>` per page (via `react-helmet-async` or manually per route), so searching "Ethan Mah Toronto software engineer" surfaces the site. Free, ~20 minutes, not yet done.
- **OG image** — the preview card rendered when the link is pasted into LinkedIn/Slack/iMessage. Without one: blank grey box. One 1200×630px image referenced in a meta tag. Not yet done — needed before this URL goes on any application.
- **Analytics** — Cloudflare Web Analytics (free, no cookies, no consent banner) once on Cloudflare Pages, or GoatCounter in the meantime if analytics are wanted sooner. Avoid Google Analytics — overkill for a personal site and drags in cookie-consent obligations for no benefit.

### File structure

**Current (real):**
```
src/
  main.tsx                   # HashRouter + routes
  App.tsx                    # layout shell: Nav, AnimatePresence routes, Footer
  index.css                  # Tailwind v4 @theme tokens (§3) + component classes
  components/
    Nav.tsx  Footer.tsx  PageTransition.tsx  Reveal.tsx
  context/
    ThemeContext.tsx  theme-context.ts  useTheme.ts   # dark/light toggle
  pages/
    Home.tsx  Experience.tsx  Projects.tsx  Passions.tsx  Contact.tsx
public/
  ic_logo_black.svg  ic_logo_white.svg
```

**Target (worth migrating toward, not urgent):**
```
src/
  content/                   # ALL copy and data — no strings hardcoded in components
    profile.ts  experience.ts  projects.ts  passions.ts  contact.ts  meta.ts
```
**Content living in `src/content/*.ts` as typed objects is still the single most valuable structural change left to make.** It means copy can be rewritten without touching layout, and it stops Projects/Passions/Contact from repeating the inline-array pattern three more times. Worth doing at the start of the Projects page session rather than retrofitting later.

---

## 3. Design system (as shipped)

### The concept

The visual identity borrows from automotive HMI/instrument-cluster design without being literal about it (no fake speedometers): warm-dark tile surfaces, hairline borders, a JetBrains Mono micro-label in the corner of each tile (`PROFILE`, `SIGNAL / CAN`, `CURRENTLY`, `STACK`, `ON FIELD`, `03 TRIPS`, `PROJECT 01`, `CONTACT`) — a restrained nod to the AAOS/infotainment work, which is the standout differentiator. This is also why the bento layout works so well here specifically: a bento grid *is* an infotainment home screen.

### Color

Warm dark rather than pure black or cool blue-black — real automotive night modes avoid `#000`, and it's a warmer bed for photography. One accent, disciplined.

```css
/* src/index.css */
:root {
  --bg: #0a0a0a;            /* page background */
  --bg-card: #111111;       /* tile surface */
  --bg-card-hover: #171717; /* hover / elevated tile */
  --border: rgba(255, 255, 255, 0.07);
  --border-accent: rgba(245, 158, 11, 0.32);

  --text: #fafafa;
  --text-muted: #a1a1aa;
  --text-dim: #52525b;

  --accent: #f59e0b;
  --accent-dark: #d97706;
  --accent-soft: rgba(245, 158, 11, 0.1);
  --accent-glow: rgba(245, 158, 11, 0.15);
}

[data-theme='light'] {
  --bg: #f0f5f1;    --bg-card: #ffffff;    --bg-card-hover: #f5f9f6;
  --border: rgba(0, 0, 0, 0.08);           --border-accent: rgba(161, 98, 7, 0.25);
  --text: #1a2e1f;  --text-muted: #4a6741; --text-dim: #8aaa86;
  --accent: #a16207; --accent-dark: #854d0e;
  --accent-soft: rgba(161, 98, 7, 0.08);   --accent-glow: rgba(161, 98, 7, 0.1);
}
```

These map into Tailwind v4 via `@theme` as `--color-canvas`, `--color-surface`, `--color-surface-hover`, `--color-line`, `--color-line-accent`, `--color-ink`, `--color-ink-muted`, `--color-ink-dim`, `--color-accent`, `--color-accent-dark`, `--color-accent-soft` — used as `bg-canvas`, `text-ink-muted`, `border-line-accent`, etc.

**Accent discipline:** amber is for one thing per screen — the primary action or the single most important number/status. No second accent color is in use yet. *(The idea of reserving a secondary color strictly for "this is currently true and ongoing" states — the Now tile, the in-progress project — is a good one and worth considering before Projects' "Currently building" card is built, but don't add a new color without deciding this deliberately; it's not a decision to make silently mid-implementation.)* No gradients on text. No glow effects except the single soft radial glow behind the Home hero, which stays.

**Light/dark toggle:** the site has a working `data-theme` toggle (`ThemeContext`), defaulting to system preference, persisted to `localStorage`. Keep it — it's already built and working. Known tension: the light theme's accent (`#a16207`, amber-brown) currently doubles as *the* accent everywhere, whereas earlier notes floated reserving a green/pine tone for the Passions page specifically. Not resolved; not urgent.

### Type

```
Display  — Fraunces (variable, Google Fonts). Weights 700–900, italic used for the nav wordmark.
Body     — DM Sans (Google Fonts). Weights 400–700.
Utility  — JetBrains Mono (Google Fonts). Weight 500–600, uppercase, tracking-[0.14em].
```

Fraunces is warm and editorial rather than corporate — carries the personality on headlines. DM Sans is a neutral, highly legible workhorse for body copy. JetBrains Mono carries every micro-label, tile corner label, and tag-line stat — this is where the "instrument cluster" personality actually lives.

**Scale in use** (mobile → desktop, via `clamp`):

| Role | Size | Face | Notes |
|---|---|---|---|
| Hero / page title | `clamp(2.75rem, 6vw, 5rem)` | Fraunces 800–900 | `leading-[0.95]` or tighter, `tracking-tight` |
| Section/role heading | `1.3rem – 1.8rem` | Fraunces 700–800 | |
| Body | `0.95rem – 1.05rem` | DM Sans 400 | `leading-relaxed` |
| Tile label / eyebrow | `0.7rem – 0.75rem` | JetBrains Mono 500 | uppercase, `tracking-[0.14em]`, `text-ink-dim` or `text-accent` |
| Tech / stat line | `0.75rem` | JetBrains Mono | e.g. `Kotlin · Jetpack Compose · MVVM · 500K+ user app` |

Numbers that matter (`500K+`, `2023 → Now`, `03 Trips`) are set in JetBrains Mono. This is the instrument-readout rule — it's what makes the type system feel intentional rather than decorative, and it's already the pattern in use.

### Space, shape, motion

- **Radius:** `--radius-card: 16px` for tiles, `--radius-chip: 10px` for chips/small elements, `rounded-full` for pills/tags. Consistent throughout — don't mix.
- **Borders:** every tile is `1px solid var(--color-line)` via the `.card` component class. No drop shadows except the tile hover shadow (`0 12px 40px rgba(0,0,0,0.5)`). Elevation reads through hover lift + border brightening, not shadow depth.
- **Container:** `max-w-[1100px]` to `max-w-[1400px]` depending on page, centered, with responsive horizontal padding.
- **Motion**, implemented via two shared components:
  - `Reveal.tsx` — fade + 12px rise on scroll, once, `viewport margin: -60px`, 400ms ease-out, optional `delay` prop for stagger. Fully skipped (renders a plain `div`) under `useReducedMotion()`.
  - `PageTransition.tsx` — 250ms opacity cross-fade between routes via `AnimatePresence`, keyed on `location.pathname`. Also skipped under reduced motion.
  - Tile hover (via `.card:hover`): border brightens to `--color-line-accent`, `translateY(-2px)`, shadow appears. That's the whole hover vocabulary — no scale, no tilt, no 3D.
  - **`prefers-reduced-motion: reduce` is respected everywhere already built.** Keep this true of every new animated element.

### The boot sequence (not yet built)

A one-time "grand opening" moment, adapted to the warm/amber-only palette (no cyan telltales):

```
0ms     Warm-dark screen. "Ethan Mah" fades/types in.
~600ms  A single amber underline sweeps beneath the name.
~1000ms The intro lifts away to reveal the hero underneath.
1400ms  Complete.
```

Requirements: fires once per browser session on first Landing load only (`sessionStorage`-gated), never replays on internal navigation. Skippable immediately on any key/click/scroll. Fully bypassed under reduced motion — loads straight to the hero. **Hard ceiling of ~1.4s.** Build this last, once every page exists — it's the easiest thing to overbuild and the easiest thing to cut if it starts feeling gimmicky.

---

## 4. Global shell (as shipped)

### Nav
Fixed top, `h-16`, `backdrop-blur-xl`, `bg-canvas/85`, 1px bottom border (`border-line`). Left: `ethan.` wordmark in Fraunces, amber period. Right (desktop, `md:flex`): five links in DM Sans, active route in `text-ink`, inactive in `text-ink-muted`. Mobile: hamburger opens a full-screen `AnimatePresence` overlay, links stacked at `text-4xl font-display`, staggered by list order, closes on link click or the ✕ button.

*Not yet built: an animated underline that slides between the active nav link (`layoutId` in framer-motion) instead of the current plain color-swap. Nice polish, not required.*

### Telltale strip (not yet built)
A persistent thin status bar directly beneath the nav, adapted to the warm/amber-only palette — borrows the visual grammar of a vehicle indicator cluster: small dot indicators with short mono labels, e.g. `● OPEN TO ROLES · 2026` (amber, slow pulse) / `◈ TORONTO, ON` (dim) / `▲ NOW — LLM CHAT ASSISTANT` (amber). Says "available" on every page without repeating it in prose. Keep it to 3–4 items, horizontally scrollable on mobile.

### Page transitions
Currently a plain 250ms opacity fade (`PageTransition.tsx`). *Optional upgrade, not required:* add a `y: 12→0` rise to match the reveal vocabulary elsewhere. Scroll resets to top on route change already (default HashRouter/browser behavior — verify this holds once any page grows a saved scroll position).

### Footer
Built: closer line ("Open to full-time, freelance, and the occasional cool idea.") above a row of [name/title/location] · [LinkedIn, GitHub, Contact-link icons] · [↑ Back to top], with a dynamic-year copyright line beneath. Matches the spirit of a three-column footer without literally being three equal columns — fine as-is.

---

## 5. Page 1 — Landing (as shipped, 8-tile bento)

**Job:** if this is the only page a recruiter sees, they still know who you are, what you've shipped, how you work, and how to reach you. Every tile is a door to a deeper page.

**Shipped structure:** Hero (eyebrow, headline, subhead, portrait, two CTAs) → 8-tile bento grid → closing band → footer.

```
┌────────────────┬────────┬──────┬────────┐
│ WHO (2×1)       │ SIGNAL │ CURR │
├────────┬────────┤ / CAN  ├──────┤
│ ONFIELD│ STACK  │ (1×2)  │ TRIPS│
│ (1×2)  ├────────┴────────┴──────┤
│        │ NEXUS (2×1)     │ CONTACT│
└────────┴─────────────────┴────────┘
```

**Known copy gaps to close (see §0):**
- Hero headline currently reads *"The glue that keeps the team shipping."* — violates the no-"glue guy" rule. Candidate replacement, adapted from this plan's positioning: **"I build software for phones, for cars, and for the people I play sports with."** Pair with a subhead naming the 500K+ app and the pre-release GM vehicles explicitly (both hard-surface, high-signal facts).
- The `Currently` tile should name the two highest-signal current facts explicitly rather than gesture at them: the LLM chat assistant work at Jiffy, and "Church Duds" by name (the friend's card game going digital) — both are real, specific, and currently under-represented anywhere on the site.
- The `Who I am` tile bio is safe to keep as-is; it already avoids the forbidden phrase.

**Tile inventory (unchanged, still the right set):** Who I am (profile) · Automotive/Signal (differentiator, → `/experience`) · Currently (→ `/experience`) · Nexus League (flagship project, → `/projects`) · Stack (→ `/projects`) · On the Field (→ `/passions`) · Where I've Been (→ `/passions`) · Contact (→ `/contact`).

---

## 6. Page 2 — Experience (as shipped, vertical timeline)

**Job:** prove capability and range, and make the growth arc the emotional center — arc over checklist.

**Shipped structure:** intro (mono eyebrow "The Journey So Far" + growth-arc paragraph) → single amber-spine vertical timeline (Jiffy → General Motors, visually emphasized with an amber left border + "Ownership Story" callout → Queen's, compact) → three-column "what sets me apart" strip → single CTA to `/projects`.

**Known copy gaps to close (see §0):** Jiffy shows "July 2023 – Present" and GM shows "May–Aug 2022, Jan–Apr 2023" — switch to years-only (`2023 — Present`, `2022 / 2023`). Queen's currently shows "2020 – 2025" — drop the years entirely per §1's education rule.

**Recommended content swap — "what sets me apart" strip.** The shipped strip is Range / Ownership / Glue, each a short unsupported statement. This plan's version is more specific and each pillar carries its own concrete proof point in the same breath, which matches the "never claim without evidence" rule better. Worth adopting, and it conveniently already avoids the word "glue":

**`HARD SURFACES` — I ship where the feedback loop is slow and expensive.**
Automotive isn't web. You can't hotfix a car. Telephony hard-key controls, mute/volume services, and multi-display location handling, all validated against pre-release vehicle builds and hardware-in-the-loop rigs. It taught me to get it right before it ships — a useful habit everywhere else too.

**`AI AS A TOOL AND AS A PRODUCT` — I use it daily and I'm shipping it.**
Claude Code speeds up boilerplate, migrations, and repetitive work daily, which means real judgment about where it helps and where it quietly makes things worse. Right now: an LLM-powered chat assistant shipping into the production app. Using the tools is table stakes; shipping the product is the part worth talking about.

**`I TAKE THE UNOWNED THING` — nobody assigned me most of what I'm proudest of.**
Nobody asked for the Fastlane pipeline; the manual release process was costing the team time every release, so it got fixed. Nobody made the emulator setup a job either — happened to be the intern who'd already dug into the pre-release emulator the year before, wrote the guide, and was still there when the whole org moved onto it.

**Candidate future enhancements (not built, structurally different from what's shipped — don't build silently, this needs a decision first):**
- A horizontal 3-state "arc" visual (2022 → 2023 → Now, hairline that draws itself on scroll) as a signature section above the timeline, distinct from the timeline itself.
- Expandable/collapsible timeline cards (currently everything is shown inline, which is simpler and was an explicit acceptable fallback last round).
- A dedicated two-tier "toolkit" section (`I GO DEEP HERE` vs `ALSO IN THE TOOLBOX`) — the current site's Home `Stack` tile is a flat list; this would be a richer, ranked version specific to the Experience page.

---

## 7. Page 3 — Projects (not yet built — this is the canonical spec)

**Job:** prove range and drive beyond the job title. Two full case studies plus a supporting shelf beats six shallow cards — depth is the signal, and one honest case study does more work than five feature lists.

### 7.1 — Header
> `02 — PROJECTS`
> # Nobody asked me to build any of this.
> Side projects are where I find out what I don't know. Here's what I've built, what broke, and what I'm building next.

### 7.2 — Case study 1: Nexus Sports League ★ flagship

Full-width, alternating text/media rows. Structure: `The problem → What I built → What broke → What I'm fixing → What it taught me`.

`FLAGSHIP PROJECT · 2024 — PRESENT · SOLE DEVELOPER`
# Nexus Sports League
**A league management platform for a community I actually play in.**
`React` `TypeScript` `Firebase` `Google Apps Script`

**The problem.** A recreational sports league — softball, volleyball, basketball, frisbee — started at two teams and 24 players and is now four teams and 20 active players. Everything lived in Google Sheets: standings, schedules, rosters, matchups. Every week someone re-typed data that already existed somewhere else.

**What I built.** A full-stack web app — React and TypeScript on the front, Firebase behind it — for standings, schedules, and player management. Then the part actually worth being proud of: a Google Apps Script pipeline that syncs league data between Sheets and the app, so the people running the league keep working in the tool they already know and the site just stays current. Also a matchup algorithm and a skill-assessment tool to balance teams, because a league where the same team wins every week isn't a league, it's a scrimmage.

**What broke.** Adoption. A good tool, and then people didn't use it — a specific kind of educational. Two reasons: no profile creation on mobile, so players hit a wall the moment they wanted to do anything personal; and data entry was gated behind a shared password, exactly as bad as it sounds. Optimized for the admin's workflow, skipped the player's.

**What I'm fixing.** Real Firebase Auth with proper profile creation, a mobile-first rebuild of the player flows, and role-based access so the shared password can die. Still the only person maintaining it, which means every bug in this paragraph gets fixed personally.

**What it taught me.** Shipping isn't the finish line. This would've been called "done" in 2024; the real lesson landed six months later watching real people bounce off a feature that felt finished. Changed how the work at Jiffy gets thought about too — a feature that ships and doesn't get used didn't ship.

`[PHOTO: standings screen]` `[PHOTO: mobile view]` `[PHOTO: Sheets automation]` `[LINK: live site]` `[LINK: repo, if public]`

> **Note:** the "what broke" paragraph is the single most valuable thing on the whole site. Almost nobody writes it. An interviewer who reads it will bring it up — don't let anyone edit the honesty out of it.

### 7.3 — Case study 2: Run Rufus Run!

`EDUCATIONAL GAME · SHIPPED · PLAYABLE IN BROWSER`
# Run Rufus Run!
**A platformer that teaches kids COVID safety, which is a harder design problem than it sounds.**
`JavaScript` `Game Loop` `GitHub Pages`

**The problem.** Kids needed to learn public health protocols. Kids do not want to learn public health protocols.

**What I built.** A browser platformer with a trivia layer — the educational content arrives through gameplay rather than in front of it. Playable in-browser, no install, because the audience was kids and the distribution channel was "a link an adult sends you."

**What I'd do differently.** Built the game first, fitted the learning in afterward. Next time: start from the thing a kid actually needs to retain, design the mechanic around that.

`[LINK: https://ethaaaanm.github.io/Run-Rufus-Run/]` — *live and playable* `[PHOTO: gameplay screenshot]`

### 7.4 — Currently building

Amber-accented card with a slow-pulsing status dot (reuse the pulsing-dot pattern already built for the Home Contact tile's "Open to opportunities" indicator).

`IN PROGRESS · 2026`
# Church Duds — Digital Edition
**Taking a friend's physical card game and turning it into something you can play from anywhere.**

A friend designed a tabletop card game; this is the digital version — which means the interesting problems aren't technical, they're translation. Physical games carry rules in the players' heads and enforce them through social pressure. Digital games have to make every one of those rules explicit, including the ones nobody's ever written down. Still finding out how many of those there are.

*(Quick gut-check before this ships: confirm the friend is fine with the game being named and described publicly.)*

`[PHOTO: cards / mockups / early screens]`

### 7.5 — Earlier work

**EyeShield — VP of Technology** · `HIGH SCHOOL · JUNIOR ACHIEVEMENT`
A student company selling laptop camera covers. Built the site, ran the tech side. First time shipping something a stranger could buy, and the first lesson that the code is genuinely the easy part. `[LINK: eye-shield.square.site]`

### 7.6 — What's next

Not a roadmap — a working list, kept honest.

> `IN PROGRESS` — Church Duds digital edition
> `IN PROGRESS` — Nexus v2: real auth, mobile-first player flows
> `NEXT` — Ship a mobile app of my own, start to finish, on the App Store and Play.
> `EXPLORING` — Going deeper on the low-level side — the automotive work gave a taste of what's under the framework.
>
> *This list changes. That's the point of having one.*

---

## 8. Page 4 — Passions (not yet built — this is the canonical spec)

**Job:** make them like you. Looser layout, bigger photos, shorter sentences, more jokes — this is the page that turns "qualified candidate" into "I'd grab coffee with this person," and the page most engineers skip, which is exactly why this one will be remembered.

**Layout:** breaks the disciplined grid deliberately — full-bleed photos, asymmetric two-column blocks, generous negative space, a horizontally scrolling photo strip. Same colors and fonts; the system holds, the rhythm loosens.

**Privacy rules, applied throughout** (extends the rules already in place for the shipped pages): no names other than your own. No identifiable close-ups of other people without asking first. No specific recurring locations or times — "a church league," not the field's name; "Thursday nights" is fine, an exact address and time is not. Strip EXIF/GPS from every photo before uploading. **Gut-check for the run section specifically:** it currently names an exact multi-trail solo route start-to-finish. That's a one-time, friend-supported event rather than a recurring pattern, which is lower-risk, but it's still a very locatable path for someone running it alone — worth a deliberate yes/no rather than shipping by default.

### 8.1 — Header
> `03 — PASSIONS`
> # I'm significantly more interesting away from a keyboard.
> Sports most nights, a run most mornings, and a standing interest in whatever's for dinner.

### 8.2 — Sports

Lead tile — pickleball:
> `PICKLEBALL · 4.5`
> ### The one I'm actually good at.
> Weekly at a 4.5 level, a few tournament wins, backed off the competitive circuit lately. Working toward a coaching certification — partly because the game's fun, mostly because teaching something is the fastest way to find out whether it's actually understood.

Supporting grid:
- **`SOFTBALL` — weekly.** Two leagues: a church league and the one I run myself.
- **`HOCKEY` — weekly, in season.** Canadian, so this was less a choice than an inheritance.
- **`VOLLEYBALL · BASKETBALL · FRISBEE` — recreational.** Mostly through the Nexus league. Not the best player in any of these — reliably the one who shows up.

`[PHOTO: pickleball action]` `[PHOTO: softball]` `[PHOTO: hockey]`

### 8.3 — The run (full-bleed standout section)

> `42.2 KM · SOLO · SUMMER 2026`
> # Running a marathon nobody's organizing.
> No race, no bib, no crowd — a self-mapped route through Toronto's ravine trail network, with friends stationed along the way with water and a ride home at the end.
> I like this for the same reason as the projects with source code: nobody asked for it, it only happens if the work gets done, and there's no version of finishing it that isn't earned.

*(See the privacy gut-check in the section intro above before naming the exact trail sequence.)*

`[PHOTO: ravine trail]` — optional: a simple SVG route line animating on scroll with amber waypoint dots. High-effort, high-payoff — save it for last.

### 8.4 — Community

> `COMMISSIONER` — **Nexus Sports League.** Runs it, wrote the software for it — when the standings are wrong there's exactly one person to blame.
> `VOLUNTEER` — **A discussion program at church**, built around asking hard questions in a room where nobody's expected to have the answer already. Made for a substantially better listener, which has been quietly useful in code reviews.
> `IN PROGRESS` — **Pickleball coaching certification.**

### 8.5 — Places
Horizontal scrolling photo strip, mono captions with city (no exact coordinates if that reads too precise — city name is enough). Lightbox on click.

### 8.6 — Food
Short and human. Close the page light.

### 8.7 — Closer
> ### If any of this overlaps with your thing, come say hi.
> `→ Contact` (amber)

---

## 9. Page 5 — Contact (not yet built — this is the canonical spec)

**Job:** remove every reason not to reach out. Short page, high contrast, one clear action. This page is also where the still-open privacy fix (raw `mailto:` currently on the Contact stub) gets closed for good — see §2's contact-form spec.

### 9.1 — Header
> `04 — CONTACT`
> # Let's build something.
> Usually replies within a day or two.

### 9.2 — What I'm open to
Three cards, specific rather than generic — "open to opportunities" converts nothing:
- **`FULL-TIME ROLES`** — Toronto-based, open to remote or in-person in the GTA, and open to hearing about anything genuinely interesting beyond it.
- **`FREELANCE APP WORK`** — Android is home turf; full-stack web shipped start to finish too.
- **`PROJECTS AND COLLABORATIONS`** — nights-and-weekends builds, if a second pair of hands would help.

### 9.3 — Reach me
Three tiles: `EMAIL` (copy-email button, JS-assembled, never in markup), `LINKEDIN`, `GITHUB`.

### 9.4 — Message form
Fields: Name, Email, "What's this about?" (select: A role / Freelance work / A project idea / Something else), Message, plus a hidden honeypot. Amber submit labelled **Send message** → success state **Message sent.** (same verb, button and confirmation must match). Error state: *"That didn't send. Email me directly and I'll get it either way."*

### 9.5 — Resume
Amber-bordered tile, `PDF · UPDATED [MONTH YEAR]` label, download link to `resume-public.pdf` (phone number stripped — see §2). Keep the "updated" date in one place (a `content/meta.ts` once that exists) so there's a single spot to change it.

---

## 10. Quality floor

Not optional, cheaper to build in than retrofit:

- **Responsive** from 375px up — verified at 375 / 768 / 1024+ for shipped pages; re-check for each new page.
- **Keyboard navigable.** Visible focus rings. Every interactive element a real `<button>`/`<a>`. Skip-to-content link (not yet added — add with Projects/Passions).
- **Reduced motion respected** everywhere, including anything new (boot sequence, telltale strip, when built).
- **Semantic HTML.** One `<h1>` per page. Alt text describing content, not filenames.
- **Images:** WebP, `loading="lazy"` below the fold, explicit dimensions to prevent layout shift. **Strip EXIF before upload** — this applies to every photo asset still pending (sports, travel, food, project screenshots).
- **Contrast:** verify `--text-dim` on `--bg` passes AA for body text before shipping copy-heavy pages.
- **Lighthouse ≥ 95** on performance and accessibility before calling any page done.

---

## 11. Build order — current status

| Phase | Work | Status |
|---|---|---|
| **0 — Foundation** | Vite + TS + Tailwind v4 + HashRouter. `index.css` tokens. Fonts loaded. Nav, Footer, Reveal, PageTransition. | ✅ Done |
| **1 — Shared patterns** | `.card` / `.chip` / `.chip-lead` / `.btn-primary` / `.btn-secondary` / `.tile-label` component classes in `index.css` (in place of dedicated Tile/Tag/Stat components). | ✅ Done (as utility classes, not React components — works fine) |
| **2 — Landing** | Hero + 8-tile bento + closing band. | ✅ Done — copy gaps in §0/§5 to close |
| **3 — Experience** | Intro, amber-spine timeline (Jiffy/GM/Queen's), pillars strip, CTA. | ✅ Done — copy gaps in §0/§6 to close, pillar-content swap recommended |
| **4 — Projects** | Nexus case study, Run Rufus Run, Church Duds, earlier work, what's next. Extract `content/projects.ts` while building this. | ⏳ Next |
| **5 — Passions** | Looser layout, photo strips, lightbox, the run section. Resolve the route-specificity gut-check first. | Pending |
| **6 — Contact** | Form + Web3Forms/Formspree + honeypot, copy-email button, resume tile. Closes the last privacy gap. | Pending |
| **7 — Boot sequence** | Build last, once every page exists. | Pending |
| **8 — Polish** | SEO meta + OG image, favicon, analytics, Lighthouse pass, domain, eventual Cloudflare Pages migration. | Pending |

**Photo assets still needed** (the real bottleneck, not the code): sports action shots (pickleball/softball/hockey), one ravine/trail shot, travel photos, food photos, project screenshots (Nexus standings + mobile, Run Rufus Run gameplay, Church Duds mockups), one 1200×630 OG image. Use a dashed-border placeholder component in the meantime — already the pattern in use on shipped pages.

---

## 12. Copy voice reference

Keep this in front of Claude Code whenever it's writing or editing text.

**Do:** first person · contractions · concrete nouns and real numbers · short sentence after long sentence · admit what broke · dry understatement · end sections on a human note.

**Don't:** "passionate about" · "leveraging" · "results-driven" · "team player" · "wearing many hats" · "cutting-edge" · "seamlessly" · "solutions" · "glue guy" (show it, never name it) · exclamation marks (one per site, maximum) · any sentence that would fit unchanged on another engineer's portfolio.

**The test for any sentence:** could this appear on someone else's site with the name swapped? If yes, it's not doing work — cut it or make it specific.
