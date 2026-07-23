import { Link } from 'react-router-dom'
import Portrait from '../assets/landing_profile.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Reveal from '../components/Reveal'

const STACK = ['Kotlin', 'Jetpack Compose', 'AAOS', 'React', 'TypeScript', 'Firebase']

function SignalGraphic() {
  const bars = [40, 70, 30, 90, 50, 65, 35, 80, 45, 60, 55, 75]
  return (
    <div className="flex h-16 items-end gap-1">
      {bars.map((h, i) => (
        <span key={i} className="w-1.5 flex-1 rounded-full bg-accent/40" style={{ height: `${h}%` }} />
      ))}
    </div>
  )
}

function PlaceholderVisual({ label }: { label: string }) {
  return (
    <div
      className="flex h-24 items-center justify-center rounded-[10px] border border-dashed border-line text-center text-[0.7rem] font-medium text-ink-dim"
      style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
    >
      {label}
    </div>
  )
}

export default function Home() {
  return (
    <div className="pt-16 pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Toronto · Software Developer
            </p>
            <h1 className="font-display mb-6 text-[clamp(2.75rem,6vw,5rem)] font-black leading-[0.95] tracking-tight text-ink">
              The glue that keeps<br />the team shipping.
            </h1>
            <p className="mb-8 max-w-[560px] text-[1.05rem] leading-relaxed text-ink-muted">
              Mobile developer at Jiffy. Built AAOS infotainment on pre-release GM vehicles.
              Runs a 4-sport community league on the side.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/experience" className="btn-primary">
                See my work <FaLongArrowAltRight className="text-sm" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in touch
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div
              className="aspect-[4/5] w-full max-w-[380px] justify-self-center overflow-hidden rounded-card border border-line lg:justify-self-end"
              style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
            >
              <img src={Portrait} alt="Portrait of Ethan" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bento grid */}
      <section className="mx-auto max-w-[1400px] px-6 pb-14 sm:px-8">
        <div className="landing-grid">

          {/* Who I am */}
          <Reveal className="card [grid-area:who]">
            <div className="tile-label">Profile</div>
            <p className="max-w-[640px] text-base leading-relaxed text-ink-muted">
              I'm the developer who does whatever the team needs — Android one day, automotive
              infotainment the next, full-stack web on the side. Quick to learn, easy to work
              with, and I always find a way to ship.
            </p>
          </Reveal>

          {/* Automotive */}
          <Reveal delay={0.05} className="[grid-area:signal]">
            <Link to="/experience" className="card flex h-full flex-col">
              <div className="tile-label">Signal / CAN</div>
              <p className="mb-6 text-sm leading-relaxed text-ink-muted">
                Shipped AAOS features on pre-release GM vehicles — telephony, volume,
                multi-display, CAN bus integration. If it touches the car's software stack,
                I've probably been in it.
              </p>
              <div className="mt-auto">
                <SignalGraphic />
              </div>
            </Link>
          </Reveal>

          {/* Currently */}
          <Reveal delay={0.1} className="[grid-area:curr]">
            <Link to="/experience" className="card flex h-full flex-col">
              <div className="tile-label">Currently</div>
              <p className="text-sm leading-relaxed text-ink-muted">
                Mobile dev @ Jiffy · building a card game into a web app · leveling up my pickleball.
              </p>
            </Link>
          </Reveal>

          {/* On the field */}
          <Reveal delay={0.15} className="[grid-area:onfield]">
            <Link to="/passions" className="card flex h-full flex-col">
              <div className="tile-label">On Field</div>
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                Pickleball, ultimate, spikeball — I play in as many of them as my schedule
                allows, and run the league that ties them together.
              </p>
              <div className="mt-auto">
                <PlaceholderVisual label="Sports collage — coming soon" />
              </div>
            </Link>
          </Reveal>

          {/* Stack */}
          <Reveal delay={0.2} className="[grid-area:stack]">
            <Link to="/projects" className="card flex h-full flex-col">
              <div className="tile-label">Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {STACK.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </Link>
          </Reveal>

          {/* Where I've been */}
          <Reveal delay={0.25} className="[grid-area:trips]">
            <Link to="/passions" className="card flex h-full flex-col">
              <div className="tile-label">03 Trips</div>
              <p className="mb-4 text-sm font-semibold text-ink">Belize · China · Kenya</p>
              <div className="mt-auto">
                <PlaceholderVisual label="Landscape shot — coming soon" />
              </div>
            </Link>
          </Reveal>

          {/* Nexus League */}
          <Reveal delay={0.3} className="[grid-area:nexus]">
            <Link to="/projects" className="card flex h-full flex-col">
              <div className="tile-label">Project 01</div>
              <p className="mb-4 max-w-[520px] text-sm leading-relaxed text-ink-muted">
                <span className="font-semibold text-ink">Nexus Sports League</span> — a full-stack
                web app for the community league I help run: standings, schedules, and stats,
                built for the people who play.
              </p>
              <div className="mt-auto">
                <PlaceholderVisual label="Site thumbnail — coming soon" />
              </div>
            </Link>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.35} className="[grid-area:contact]">
            <div className="card flex h-full flex-col">
              <div className="tile-label">Contact</div>
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                Open to roles, freelance, and cool ideas.
              </p>
              <Link to="/contact" className="btn-primary mt-auto self-start">
                Get in touch
              </Link>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Closing band */}
      <Reveal>
        <section className="border-t border-line px-6 py-16 text-center sm:px-8">
          <p className="font-display mb-6 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Range, ownership, and a good attitude. That's the whole pitch.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in touch <FaLongArrowAltRight className="text-sm" />
          </Link>
        </section>
      </Reveal>
    </div>
  )
}
