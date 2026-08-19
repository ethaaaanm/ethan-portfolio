import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import NexusLanding from '../assets/nexus_landing.png'
import AlgorithmLanding from '../assets/algorithm_landing.png'
import FigmaDesign from '../assets/figma_design.png'
import NexusBanner from '../assets/nexus_banner.jpg'
import NexusDemo from '../assets/nexus_demo.mp4'
import RufusBanner from '../assets/rufus_banner.png'
import DudsLanding from '../assets/duds_landing.png'
import DudsTracker from '../assets/duds_tracker.png'
import EyeShieldLogo from '../assets/eyeshield_logo.png'

const DUDS_SCREENSHOTS = [
  { src: DudsLanding, alt: 'Church Duds landing page' },
  { src: DudsTracker, alt: 'Church Duds card tracker' },
]

const NEXUS_SCREENSHOTS = [
  { src: NexusLanding, alt: 'The Nexus League Landing Page' },
  { src: FigmaDesign, alt: 'Figma Design Page' },
  { src: AlgorithmLanding, alt: 'The Algorithm Landing Page' },
]

const NEXUS_STACK = ['React', 'TypeScript', 'Firebase', 'Google Apps Script', 'HTML', 'CSS', 'GitHub Pages']
const RUFUS_STACK = ['JavaScript',  'Game Design', 'GitHub Pages', 'Unity']

const NEXUS_SECTIONS = [
  {
    label: 'The Problem',
    body: 'I run a recreational Christian multi-sports league playing softball, volleyball, basketball, frisbee. Four sports, four teams, twenty plus players. Everything lived in Google Sheets: standings, schedules, rosters, matchups. Every week someone re-typed data that already existed somewhere else.',
  },
  {
    label: 'What I Built',
    body: 'A full-stack web app using React and TypeScript on the front, Firebase on the backend for standings, schedules, and player management. Also a Google Apps Script pipeline that syncs league data between Sheets and the website, handling the matchmaking and skill assessment. The goal was to make the league run itself, greatly minimizing the need for admin work each week.',
  },
  {
    label: 'What Broke',
    body: "Adoption. I built a good tool and then watched people not use it, which is a very humbling experience. Two culprits: no profile creation on mobile so barrier to entry was high from the start, and I'd optimized for the admin's workflow and forgotten the players were the point.",
  },
  {
    label: "What I'm Fixing",
    body: 'Real Firebase Auth with proper profile creation, a mobile-first rebuild of the player flows, and role-based access. The goal is to make the app more user-centric so that the players are getting the features they want to use.',
  },
  {
    label: 'What It Taught Me',
    body: "Failing fast beats finishing perfect. I worked on this project until it felt polished but in the end it reached very few users and had a limited impact that no amount of refinement would've fixed.",
  },
]

const WHATS_NEXT = [
  { status: 'IN PROGRESS', text: 'Church Duds TCG Digital Edition' },
  { status: 'NEXT', text: 'Nexus Site V2: Real auth, mobile-first player flows, player profiles' },
  { status: 'EXPLORING', text: 'Build a mobile app of my own, start to finish, on the App Store and Play.' },
]

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

        {/* The Nexus League — flagship case study */}
        <Reveal className="mb-20 rounded-card border border-line-accent bg-surface p-6 sm:p-10">
          <img
            src={NexusBanner}
            alt="The Nexus League brand banner"
            className="mb-8 w-full rounded-[10px] border border-line"
          />

          <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-accent">
            Flagship Project · 2024 — Present · Co-Founder and Chief Technology Officer
          </p>
          <a
            href="https://thenexusleague.ca/"
            target="_blank"
            rel="noreferrer"
            className="group mb-2 inline-flex flex-wrap items-center gap-4"
          >
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-4xl">
              The Nexus League
            </h2>
            <FaExternalLinkAlt className="text-sm text-ink-dim transition-colors group-hover:text-accent" />
          </a>
          <p className="mb-5 text-lg leading-relaxed text-ink-muted">
            Built a league management platform and matchmaking tool for my recreational Christian sports league.
          </p>
          <div className="mb-6 flex flex-wrap gap-1.5">
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

          <div className="mb-10">
            <div className="tile-label mb-3">See It In Action</div>
            <video
              src={NexusDemo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full rounded-[10px] border border-line bg-surface"
            />
          </div>

          <div className="tile-label mb-3">Screens</div>
          <Lightbox images={NEXUS_SCREENSHOTS} />

          <a
            href="https://thenexusleague.ca/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-8"
          >
            Visit The Nexus Site <FaExternalLinkAlt className="text-xs" />
          </a>
        </Reveal>

        {/* Run Rufus Run! */}
        <Reveal className="mb-16 border-t border-line pt-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-accent">
            Educational Game · 2023 · Founder and Game Developer
          </p>
          <a
            href="https://ethaaaanm.github.io/Run-Rufus-Run/"
            target="_blank"
            rel="noreferrer"
            className="group mb-2 inline-flex flex-wrap items-center gap-4"
          >
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
              Run Rufus Run!
            </h2>
            <FaExternalLinkAlt className="text-sm text-ink-dim transition-colors group-hover:text-accent" />
          </a>
          <p className="mb-4 max-w-[680px] text-base leading-relaxed text-ink-muted">
            An educational platformer game that teaches kids COVID safety and public health protocols through gameplay.
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
                  Kids needed to learn public health protocols to stay safe during the pandemic. However, learning about public health and COVID safety is boring.
                </p>
              </div>
              <div>
                <div className="tile-label mb-2">What I Built</div>
                <p className="text-[0.9rem] leading-relaxed text-ink-muted">
                  A browser platformer with a trivia twist. The educational information
                  is embedded throughout the gameplay so that kids learn simply by playing.
                </p>
              </div>
              <div>
                <div className="tile-label mb-2">What I'd Do Differently</div>
                <p className="text-[0.9rem] leading-relaxed text-ink-muted">
                  Criticism is hard to take, but it's also the most honest form of feedback to learn from.
                  Adults politely finish a level but kids just stop playing. Watching a kid silently put the game down stung but it became the most useful lesson from the overall experience.
                </p>
              </div>
            </div>
            <img
              src={RufusBanner}
              alt="Run Rufus Run! gameplay screenshot"
              className="aspect-video w-full rounded-[10px] border border-line object-cover"
            />
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
              <PulsingDot /> In Progress · 2026 · Game Developer
            </div>
            <h2 className="font-display mb-2 text-2xl font-extrabold tracking-tight text-ink">
              Church Duds TCG Digital Edition
            </h2>
            <p className="mb-5 max-w-[680px] text-base leading-relaxed text-ink-muted">
              Taking a friend's card game project and turning it into something you can
              play online.
            </p>
            <p className="mb-6 max-w-[680px] text-[0.9rem] leading-relaxed text-ink-muted">
              A friend designed a tabletop card game that I plan on integrating into a digital format, which
              means the interesting problems aren't so much about the technical but rather the
              translation. Physical games carry rules in the players' heads and enforce them through social
              pressure. Digital games lack the social aspect, so the social implications need to be expressed in other ways.
              
              <br/> <br/> The goal is to make the digital version feel like the physical one, while also taking advantage of the digital medium to enhance the experience.
            </p>
            <Lightbox images={DUDS_SCREENSHOTS} />
          </div>
        </Reveal>

        {/* Earlier work */}
        <Reveal className="mb-16 border-t border-line pt-14">
          <div className="section-label">Earlier Work</div>
          <div className="card">
            <div className="mb-1 flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
              <div className="flex items-center gap-3">
                <img
                  src={EyeShieldLogo}
                  alt="Eye Shield logo"
                  className="h-10 w-10 rounded-[10px] bg-white p-1.5"
                />
                <div>
                  <h3 className="text-base font-bold tracking-tight text-ink">Eye Shield</h3>
                  <div className="text-sm font-semibold text-accent">Vice President of Technology</div>
                </div>
              </div>
              <span className="whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-dim">
                2019 · Junior Achievement Company
              </span>
            </div>
            <p className="mb-4 max-w-[640px] text-sm leading-relaxed text-ink-muted">
              A student-run company selling laptop camera covers. 
              I volunteered to build the site with limited experience, figured it out, and walked away with the realization that started everything: 
              coding wasn't so hard, it was just unfamiliar. Every job on this page traces back to that initial site.
            </p>
            <a
              href="https://eye-shield.square.site"
              target="_blank"
              rel="noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-accent"
            >
              Eye Shield Site <FaExternalLinkAlt className="text-[0.65rem]" />
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
        </Reveal>
      </div>
    </div>
  )
}
