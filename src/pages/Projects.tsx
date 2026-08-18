import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Reveal from '../components/Reveal'

const NEXUS_STACK = ['React', 'TypeScript', 'Firebase', 'Google Apps Script']
const RUFUS_STACK = ['JavaScript', 'Game Loop', 'GitHub Pages']

const NEXUS_SECTIONS = [
  {
    label: 'The Problem',
    body: 'A recreational sports league — softball, volleyball, basketball, frisbee — started at two teams and 24 players and is now four teams and 20 active players. Everything lived in Google Sheets: standings, schedules, rosters, matchups. Every week someone re-typed data that already existed somewhere else.',
  },
  {
    label: 'What I Built',
    body: "A full-stack web app — React and TypeScript on the front, Firebase behind it — for standings, schedules, and player management. Then the part actually worth being proud of: a Google Apps Script pipeline that syncs league data between Sheets and the app, so the people running the league keep working in the tool they already know and the site just stays current. Also a matchup algorithm and a skill-assessment tool to balance teams, because a league where the same team wins every week isn't a league, it's a scrimmage.",
  },
  {
    label: 'What Broke',
    body: "Adoption. A good tool, and then people didn't use it — a specific kind of educational. Two reasons: no profile creation on mobile, so players hit a wall the moment they wanted to do anything personal; and data entry was gated behind a shared password, exactly as bad as it sounds. Optimized for the admin's workflow, skipped the player's.",
  },
  {
    label: "What I'm Fixing",
    body: "Real Firebase Auth with proper profile creation, a mobile-first rebuild of the player flows, and role-based access so the shared password can die. Still the only person maintaining it, which means every bug in this paragraph gets fixed personally.",
  },
  {
    label: 'What It Taught Me',
    body: 'Shipping isn\'t the finish line. This would\'ve been called "done" in 2024; the real lesson landed six months later watching real people bounce off a feature that felt finished. Changed how the work at Jiffy gets thought about too — a feature that ships and doesn\'t get used didn\'t ship.',
  },
]

const WHATS_NEXT = [
  { status: 'IN PROGRESS', text: 'Church Duds digital edition' },
  { status: 'IN PROGRESS', text: 'Nexus v2: real auth, mobile-first player flows' },
  { status: 'NEXT', text: 'Ship a mobile app of my own, start to finish, on the App Store and Play.' },
  { status: 'EXPLORING', text: "Going deeper on the low-level side — the automotive work gave a taste of what's under the framework." },
]

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex aspect-[4/3] items-center justify-center rounded-[10px] border border-dashed border-line px-3 text-center text-[0.7rem] font-medium text-ink-dim"
      style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
    >
      {label}
    </div>
  )
}

function PulsingDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  )
}

export default function Projects() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
          ← Back home
        </Link>

        {/* Header */}
        <Reveal className="mt-7 mb-16">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            02 — Projects
          </p>
          <h1 className="font-display mb-5 text-[clamp(2.8rem,6vw,5rem)] font-black leading-none tracking-tight text-ink">
            Bringing my ideas<br /><span className="text-accent">to fruition.</span>
          </h1>
          <p className="max-w-[680px] text-[1.05rem] leading-relaxed text-ink-muted">
            Side projects are where I find out what I don't know. Here's what I've built,
            what broke, and what I'm building next.
          </p>
        </Reveal>

        {/* Nexus Sports League — flagship case study */}
        <Reveal className="mb-20 rounded-card border border-line-accent bg-surface p-6 sm:p-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-accent">
            Flagship Project · 2024 — Present · Sole Developer
          </p>
          <h2 className="font-display mb-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Nexus Sports League
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-ink-muted">
            A league management platform for a community I actually play in.
          </p>
          <div className="mb-10 flex flex-wrap gap-1.5">
            {NEXUS_STACK.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          <div className="mb-10 flex flex-col gap-8">
            {NEXUS_SECTIONS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="tile-label mb-2">{s.label}</div>
                <p className="max-w-[760px] text-[0.95rem] leading-relaxed text-ink-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <PhotoPlaceholder label="Standings screen" />
            <PhotoPlaceholder label="Mobile view" />
            <PhotoPlaceholder label="Sheets automation" />
          </div>
        </Reveal>

        {/* Run Rufus Run! */}
        <Reveal className="mb-16 border-t border-line pt-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-accent">
            Educational Game · Shipped · Playable in Browser
          </p>
          <h2 className="font-display mb-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Run Rufus Run!
          </h2>
          <p className="mb-4 max-w-[680px] text-base leading-relaxed text-ink-muted">
            A platformer that teaches kids COVID safety, which is a harder design problem
            than it sounds.
          </p>
          <div className="mb-8 flex flex-wrap gap-1.5">
            {RUFUS_STACK.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-start">
            <div className="flex flex-col gap-6">
              <div>
                <div className="tile-label mb-2">The Problem</div>
                <p className="text-[0.9rem] leading-relaxed text-ink-muted">
                  Kids needed to learn public health protocols. Kids do not want to learn
                  public health protocols.
                </p>
              </div>
              <div>
                <div className="tile-label mb-2">What I Built</div>
                <p className="text-[0.9rem] leading-relaxed text-ink-muted">
                  A browser platformer with a trivia layer — the educational content
                  arrives through gameplay rather than in front of it. Playable in-browser,
                  no install, because the audience was kids and the distribution channel
                  was "a link an adult sends you."
                </p>
              </div>
              <div>
                <div className="tile-label mb-2">What I'd Do Differently</div>
                <p className="text-[0.9rem] leading-relaxed text-ink-muted">
                  Built the game first, fitted the learning in afterward. Next time: start
                  from the thing a kid actually needs to retain, design the mechanic around
                  that.
                </p>
              </div>
            </div>
            <PhotoPlaceholder label="Gameplay screenshot" />
          </div>

          <a
            href="https://ethaaaanm.github.io/Run-Rufus-Run/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Play it live <FaExternalLinkAlt className="text-xs" />
          </a>
        </Reveal>

        {/* Currently building — Church Duds */}
        <Reveal className="mb-16 border-t border-line pt-14">
          <div className="rounded-card border border-line-accent bg-accent-soft/40 p-7">
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-accent">
              <PulsingDot /> In Progress · 2026
            </div>
            <h2 className="font-display mb-2 text-2xl font-extrabold tracking-tight text-ink">
              Church Duds — Digital Edition
            </h2>
            <p className="mb-5 max-w-[680px] text-base leading-relaxed text-ink-muted">
              Taking a friend's physical card game and turning it into something you can
              play from anywhere.
            </p>
            <p className="mb-6 max-w-[680px] text-[0.9rem] leading-relaxed text-ink-muted">
              A friend designed a tabletop card game; this is the digital version — which
              means the interesting problems aren't technical, they're translation. Physical
              games carry rules in the players' heads and enforce them through social
              pressure. Digital games have to make every one of those rules explicit,
              including the ones nobody's ever written down. Still finding out how many of
              those there are.
            </p>
            <div className="max-w-[380px]">
              <PhotoPlaceholder label="Cards / mockups / early screens" />
            </div>
          </div>
        </Reveal>

        {/* Earlier work */}
        <Reveal className="mb-16 border-t border-line pt-14">
          <div className="section-label">Earlier Work</div>
          <div className="card">
            <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-base font-bold tracking-tight text-ink">EyeShield — VP of Technology</h3>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-dim">
                High School · Junior Achievement
              </span>
            </div>
            <p className="mb-4 max-w-[640px] text-sm leading-relaxed text-ink-muted">
              A student company selling laptop camera covers. Built the site, ran the tech
              side. First time shipping something a stranger could buy, and the first lesson
              that the code is genuinely the easy part.
            </p>
            <a
              href="https://eye-shield.square.site"
              target="_blank"
              rel="noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-accent"
            >
              eye-shield.square.site <FaExternalLinkAlt className="text-[0.65rem]" />
            </a>
          </div>
        </Reveal>

        {/* What's next */}
        <Reveal className="border-t border-line pt-14 pb-4">
          <div className="section-label">What's Next</div>
          <div className="flex flex-col gap-3">
            {WHATS_NEXT.map((item) => (
              <div key={item.text} className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent">
                  {item.status}
                </span>
                <span className="text-sm text-ink-muted">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm italic text-ink-dim">This list changes. That's the point of having one.</p>
        </Reveal>
      </div>
    </div>
  )
}
