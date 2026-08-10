import { Link } from 'react-router-dom'
import Portrait from '../assets/landing_profile.jpg'
import { FaDownload, FaLongArrowAltRight } from 'react-icons/fa'
import Reveal from '../components/Reveal'

const STACK = [
  'Kotlin',
  'Jetpack Compose',
  'Android Automotive OS',
  'React',
  'TypeScript',
  'Firebase',
  'CI/CD',
  'LLM integration',
]

function PhotoStripPlaceholder() {
  const labels = ['Sports', 'Trail', 'Travel', 'Food']
  return (
    <div className="mt-5 grid grid-cols-4 gap-2.5">
      {labels.map((label) => (
        <div
          key={label}
          className="flex aspect-square items-center justify-center rounded-[10px] border border-dashed border-line text-center text-[0.65rem] font-medium text-ink-dim"
          style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="pt-16 pb-16">
      <div className="mx-auto max-w-[1400px] px-6 py-7 sm:px-8">
        <div className="landing-grid">

          {/* A — Hero */}
          <Reveal className="card flex min-h-[260px] flex-col justify-center p-10 [grid-area:hero]">
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-[450px] w-[450px] rounded-full"
              style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)' }}
            />
            <p className="mb-4 font-mono text-s font-medium uppercase tracking-[0.14em] text-accent">
              Software Developer · Toronto
            </p>
            <h1 className="font-display mb-5 text-[clamp(2rem,3.4vw,3rem)] font-black leading-[1.05] tracking-tight text-ink">
              With a foundation in software and business, I build technology that meets real-world needs.
            </h1>
            <p className="max-w-[560px] text-[0.95rem] leading-relaxed text-ink-muted">
              Android developer with 3+ years of production experience across consumer apps, automotive systems, and LLM-powered assistants.
            </p>
          </Reveal>

          {/* B — Portrait */}
          <Reveal delay={0.05} className="group relative overflow-hidden rounded-card border border-line-accent [grid-area:portrait]">
            <img src={Portrait} alt="Portrait of Ethan" className="h-full min-h-[260px] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent px-4 pb-3 pt-8 font-mono text-[0.5rem] uppercase tracking-[0.12em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Secret: I've hid an Easter Egg on one of the other pages.
            </div>
          </Reveal>

          {/* C — Summary */}
          <Reveal delay={0.1} className="card [grid-area:stats]">
            <div className="tile-label">A bit about me</div>
            <p className="text-sm leading-relaxed text-ink-muted">
              I'm an <span className="font-semibold text-accent">Android developer</span> at Jiffy
              on Demand, where I've spent three years shipping a consumer app to{' '}
              <span className="font-semibold text-accent">500K+ users</span>.
              Before that, two co-op terms at GM building infotainment features now in Cadillac vehicles. Lately I'm building where{' '}
              <span className="font-semibold text-accent">mobile meets AI</span> — most recently
              an <span className="font-semibold text-accent">LLM chat assistant</span>.
            </p>
          </Reveal>

          {/* D — Outside of work */}
          <Reveal delay={0.15} className="card [grid-area:now]">
            <div className="tile-label">Outside of work</div>
            <p className="text-sm leading-relaxed text-ink-muted">
              Running the Nexus League, a Christian rec sports league, playing pickleball, and
              building a productivity app of my own.
            </p>
          </Reveal>

          {/* E — Stack */}
          <Reveal delay={0.2} className="card [grid-area:stack]">
            <div className="tile-label">Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {STACK.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
            <Link to="/experience" className="relative z-10 mt-3 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-accent transition-all hover:gap-2.5">
              The full stack →
            </Link>
          </Reveal>

          {/* F — Experience */}
          <Reveal delay={0.25} className="[grid-area:experience]">
            <Link to="/experience" className="card flex h-full flex-col">
              <div className="tile-label">01 — Experience</div>
              <h2 className="font-display mb-3 text-xl font-bold leading-tight tracking-tight text-ink">
                The full story behind the resume lines.
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-ink-muted">
                What I've shipped, and what broke along the way. <br /> A deep dive into my journey so far
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read the full story <FaLongArrowAltRight className="text-xs" />
              </span>
            </Link>
          </Reveal>

          {/* G — Projects */}
          <Reveal delay={0.3} className="[grid-area:projects]">
            <Link to="/projects" className="card flex h-full flex-col">
              <div className="tile-label">02 — Projects</div>
              <h2 className="font-display mb-3 text-xl font-bold leading-tight tracking-tight text-ink">
                From side projects to things I've built because I needed them.              </h2>
              <p className="mb-6 text-sm leading-relaxed text-ink-muted">
                A league platform and matchmaking algorithm, an educational platformer game, a card game going digital. Usually how I
                find out what I don't know yet.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                See what I've built <FaLongArrowAltRight className="text-xs" />
              </span>
            </Link>
          </Reveal>

          {/* H — Passions */}
          <Reveal delay={0.35} className="[grid-area:passions]">
            <Link to="/passions" className="card flex h-full flex-col">
              <div className="tile-label">03 — Passions</div>
              <h2 className="font-display mb-2 text-xl font-bold leading-tight tracking-tight text-ink">
                Sports, Travel, and Food
              </h2>
              <PhotoStripPlaceholder />
              <span className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Get to know me <FaLongArrowAltRight className="text-xs" />
              </span>
            </Link>
          </Reveal>

          {/* I — Contact (the one amber CTA tile) */}
          <Reveal delay={0.4} className="[grid-area:contact]">
            <Link to="/contact" className="flex h-full flex-col justify-center rounded-card bg-accent p-7 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-accent-dark">
              <h2 className="font-display mb-2 text-xl font-bold leading-tight tracking-tight text-white">
                Let's build something.
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-white/85">
                Full-time roles, freelance app work, or an idea you can't stop thinking about.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Get in touch <FaLongArrowAltRight className="text-xs" />
              </span>
            </Link>
          </Reveal>

          {/* J — Resume */}
          <Reveal delay={0.45} className="[grid-area:resume]">
            <a href={`${import.meta.env.BASE_URL}resume-public.pdf`} download className="card flex h-full items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-dim">
                Resume.pdf · Updated July 2026
              </span>
              <FaDownload className="text-accent" />
            </a>
          </Reveal>

        </div>
      </div>
    </div>
  )
}
