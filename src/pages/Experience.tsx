import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import GMLogo from '../assets/gm.svg'
import JiffyLogo from '../assets/jiffy.svg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Reveal from '../components/Reveal'

const JIFFY_FEATURES = [
  {
    name: 'Trust & Safety Systems',
    desc: 'Built fraud-detection checks on payment flows using the Stripe API — validating card type, postal code, and risk signals — and synced credit-card state across app components. On the pro side, implemented job limits and suspensions that block banned or probated pros from receiving new jobs.',
    tags: ['Kotlin', 'Stripe API', 'Firebase'],
  },
  {
    name: 'Cross-Company Loyalty Integration',
    desc: "Built a cross-application, cross-company integration linking Intact and Belair Direct (parent company) customers to Jiffy, surfacing tailored discounts and loyalty offers across each customer base.",
    tags: ['Kotlin', 'REST APIs', 'Cross-Platform'],
  },
  {
    name: 'AI-Powered Product Features',
    desc: 'Built an OpenAI-powered evaluator that scores user ↔ pro chat interactions against an open checklist to confirm generic questions get answered, plus AI markers surfacing recommendations and tips across job descriptions and pro summaries.',
    tags: ['OpenAI API', 'Kotlin', 'Jetpack Compose'],
  },
  {
    name: 'Experimentation & Analytics Platform',
    desc: 'Implemented A/B testing infrastructure using Mixpanel and LaunchDarkly, wired up user-action analytics through Customer.io and feature flags, and led cleanup of unused strings, functions, and legacy test scaffolding.',
    tags: ['Mixpanel', 'LaunchDarkly', 'Customer.io'],
  },
  {
    name: 'XML → Compose Architecture Migration',
    desc: 'Migrated core flows out of legacy XML/VIPER into Jetpack Compose and MVVM inside dedicated feature modules — including the job booking flow, discounted credits UI, pro rating flows, and chat bubble/list redesigns — without breaking live user traffic.',
    tags: ['Jetpack Compose', 'MVVM', 'Feature Modules'],
  },
  {
    name: 'Solo-Owned Feature Portfolio',
    desc: 'Independently owned a string of features end-to-end — empty/add address screens, new-customer badges and boosters, lawn-sign and flexibility toggles, failed-payment billing states, and account deletion with reason analytics.',
    tags: ['Kotlin', 'Room', 'Firebase'],
  },
]

const JIFFY_ALSO_IN_THE_MIX = [
  'Fastlane CI/CD Automation',
  'Shared Date-Utils Tooling',
  'Deeplink Handling',
  'Crashlytics Bug Fixes',
  'French Localization (Crowdin)',
  'Multi-Province Tax Onboarding',
]

const GM_FEATURES = [
  {
    name: 'Hard-Key Telephony Controls',
    desc: 'Built end-to-end software letting drivers answer and end calls from console and multi-function controller buttons, coordinating vehicle signal handling, the AAOS telephony stack, and HMI teams.',
    tags: ['Java', 'AAOS', 'HMI Integration'],
  },
  {
    name: 'Mute & Volume Control Services',
    desc: "Shipped mute and volume control services for GM's Android Automotive infotainment system, validated against pre-release vehicle builds and hardware configurations.",
    tags: ['Java', 'AAOS'],
  },
  {
    name: 'Passenger-Side Location Services',
    desc: "Enabled location services for the passenger display in GM's multi-display architecture, powering location-aware apps independent of the driver display.",
    tags: ['AAOS', 'Multi-Display'],
  },
  {
    name: 'VIP Platform & CAN Integration',
    desc: "Developed infotainment features on GM's VIP platform, working with CAN bus signals and ARXML communication descriptions to integrate Android Automotive with the vehicle's software-defined architecture.",
    tags: ['CAN Bus', 'ARXML', 'JNI'],
  },
]

const PILLARS = [
  {
    label: 'Hard Surfaces',
    desc: "I ship where the feedback loop is slow and expensive. Automotive isn't web. You can't hotfix a car. Telephony hard-key controls, mute/volume services, and multi-display location handling, all validated against pre-release vehicle builds and hardware-in-the-loop rigs. It taught me to get it right before it ships — a useful habit everywhere else too.",
  },
  {
    label: 'AI as a Tool and as a Product',
    desc: "I use it daily and I'm shipping it. Claude Code speeds up boilerplate, migrations, and repetitive work daily, which means real judgment about where it helps and where it quietly makes things worse. Right now: an LLM-powered chat assistant shipping into the production app. Using the tools is table stakes; shipping the product is the part worth talking about.",
  },
  {
    label: 'I Take the Unowned Thing',
    desc: "Nobody assigned me most of what I'm proudest of. Nobody asked for the Fastlane pipeline; the manual release process was costing the team time every release, so it got fixed. Nobody made the emulator setup a job either — happened to be the intern who'd already dug into the pre-release emulator the year before, wrote the guide, and was still there when the whole org moved onto it.",
  },
]

function TimelineNode({ isLast, emphasized, children }: { isLast?: boolean; emphasized?: boolean; children: ReactNode }) {
  return (
    <div className="flex gap-5 sm:gap-7">
      <div className="flex flex-col items-center pt-2">
        <span className={`h-3.5 w-3.5 shrink-0 rounded-full ${emphasized ? 'bg-accent ring-4 ring-accent-soft' : 'bg-accent'}`} />
        {!isLast && <span className="mt-1 w-px flex-1 bg-line-accent" />}
      </div>
      <div className="flex-1 pb-16">{children}</div>
    </div>
  )
}

function TechLine({ children }: { children: string }) {
  return <p className="mb-5 font-mono text-xs tracking-wide text-ink-dim">{children}</p>
}

export default function Experience() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
          ← Back home
        </Link>

        {/* Intro */}
        <Reveal className="mt-7 mb-16">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            The Journey So Far
          </p>
          <h1 className="font-display mb-5 text-[clamp(2.8rem,6vw,5rem)] font-black leading-none tracking-tight text-ink">
            Where I've<br /><span className="text-accent">built things.</span>
          </h1>
          <p className="max-w-[680px] text-[1.05rem] leading-relaxed text-ink-muted">
            I started as an intern who could barely get Android Studio to build. Three years
            and two very different engineering cultures later, I'm the one driving epics,
            onboarding senior developers, and keeping cross-functional teams aligned. Here's
            how that happened — role by role.
          </p>
        </Reveal>

        {/* Timeline */}
        <div>
          {/* Jiffy */}
          <TimelineNode>
            <Reveal className="flex flex-wrap items-center gap-4.5">
              <img src={JiffyLogo} alt="Jiffy on Demand logo" className="w-[90px]" />
              <div className="min-w-[200px] flex-1">
                <div className="font-display text-[1.6rem] font-extrabold tracking-tight text-ink">Jiffy on Demand</div>
                <div className="text-sm font-semibold text-accent">Android Developer</div>
              </div>
              <span className="whitespace-nowrap font-mono text-xs text-ink-dim">2023 → Now</span>
            </Reveal>
            <div className="mt-3">
              <TechLine>Kotlin · Jetpack Compose · MVVM · 500K+ user app</TechLine>
            </div>
            <Reveal delay={0.05} className="mb-7 max-w-[760px] text-[0.95rem] leading-relaxed text-ink-muted">
              I joined as an intern who could barely get Android Studio to build. Three years
              later I drive epics end-to-end and keep a 10-person cross-platform team (iOS,
              Android, Web) aligned during planning and delivery on a 500K+ user app — the one
              making sure the team actually enjoys building it together.
            </Reveal>
            <div className="mb-8 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
              {JIFFY_FEATURES.map((f, i) => (
                <Reveal key={f.name} delay={i * 0.05} className="card transition-[border-color,transform] duration-300 hover:border-line-accent hover:-translate-y-0.5">
                  <div className="mb-2 text-[0.95rem] font-bold tracking-tight text-ink">{f.name}</div>
                  <div className="mb-3.5 text-[0.8rem] leading-relaxed text-ink-muted">{f.desc}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="section-label">Also in the Mix</div>
            <div className="flex flex-wrap gap-2">
              {JIFFY_ALSO_IN_THE_MIX.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </TimelineNode>

          {/* General Motors — the differentiator */}
          <TimelineNode emphasized>
            <div className="rounded-card border border-line-accent bg-accent-soft/40 p-6 sm:p-7">
              <Reveal className="flex flex-wrap items-center gap-4.5">
                <img src={GMLogo} alt="General Motors logo" className="w-[140px]" />
                <div className="min-w-[200px] flex-1">
                  <div className="font-display text-[1.8rem] font-extrabold tracking-tight text-ink">General Motors</div>
                  <div className="text-sm font-semibold text-accent">Software Developer, Infotainment (Co-op)</div>
                </div>
                <span className="whitespace-nowrap font-mono text-xs text-ink-dim">2022 &amp; 2023</span>
              </Reveal>
              <div className="mt-3">
                <TechLine>AAOS · AOSP · GM VIP · CAN · ARXML</TechLine>
              </div>
              <Reveal delay={0.05} className="mb-7 max-w-[760px] text-[0.95rem] leading-relaxed text-ink-muted">
                Two co-op terms building Android Automotive OS software for pre-release GM vehicles —
                jumping from telephony to displays to CAN bus integration, and picking up whatever the
                team needed next.
              </Reveal>
              <div className="mb-8 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
                {GM_FEATURES.map((f, i) => (
                  <Reveal key={f.name} delay={i * 0.05} className="card transition-[border-color,transform] duration-300 hover:border-line-accent hover:-translate-y-0.5">
                    <div className="mb-2 text-[0.95rem] font-bold tracking-tight text-ink">{f.name}</div>
                    <div className="mb-3.5 text-[0.8rem] leading-relaxed text-ink-muted">{f.desc}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {f.tags.map((tag) => (
                        <span key={tag} className="chip">{tag}</span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.1} className="rounded-card border border-line-accent bg-canvas/60 p-6">
                <div className="tile-label mb-3">Ownership Story</div>
                <p className="text-[0.9rem] leading-relaxed text-ink-muted">
                  During my first co-op, I spearheaded the setup of GM's next-generation Android
                  emulator a year ahead of the org-wide rollout, writing the configuration guide
                  myself. By the time I came back for my second term, the whole org had shifted
                  from physical vehicle rigs to laptop emulators — and I'd become the go-to person
                  onboarding and unblocking developers with years more experience than me.
                </p>
              </Reveal>
            </div>
          </TimelineNode>

          {/* Queen's University — compact, no dates per the education rule */}
          <TimelineNode isLast>
            <Reveal className="flex flex-wrap items-center gap-4.5">
              <div className="min-w-[200px] flex-1">
                <div className="font-display text-[1.3rem] font-extrabold tracking-tight text-ink">Queen's University</div>
                <div className="text-sm font-semibold text-accent">B.Computing, Software Design</div>
              </div>
            </Reveal>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Minor in Business · Certificate in Entrepreneurship &amp; Innovation
            </p>
          </TimelineNode>
        </div>

        {/* What sets me apart */}
        <Reveal className="mb-16 border-t border-line pt-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {PILLARS.map((p) => (
              <div key={p.label} className="border-line sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
                <div className="tile-label">{p.label}</div>
                <p className="text-sm leading-relaxed text-ink-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="border-t border-line px-6 py-12 text-center">
          <Link to="/projects" className="btn-primary">
            See what I build on my own <FaLongArrowAltRight className="text-base" />
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
