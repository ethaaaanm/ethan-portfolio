import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import Reveal from '../components/Reveal'

const SPORTS_SUPPORTING = [
  {
    label: 'Softball',
    cadence: 'Weekly',
    desc: 'Two leagues: a church league and the one I run myself.',
  },
  {
    label: 'Hockey',
    cadence: 'Weekly, in season',
    desc: 'Canadian, so this was less a choice than an inheritance.',
  },
  {
    label: 'Volleyball · Basketball · Frisbee',
    cadence: 'Recreational',
    desc: 'Mostly through the Nexus league. Not the best player in any of these — reliably the one who shows up.',
  },
]

const COMMUNITY = [
  {
    label: 'Commissioner',
    desc: "Nexus Sports League. Runs it, wrote the software for it — when the standings are wrong there's exactly one person to blame.",
  },
  {
    label: 'Volunteer',
    desc: "A discussion program at church, built around asking hard questions in a room where nobody's expected to have the answer already. Made for a substantially better listener, which has been quietly useful in code reviews.",
  },
  {
    label: 'In Progress',
    desc: 'Pickleball coaching certification.',
  },
]

const PLACES = ['Belize', 'China', 'Kenya']
const FOOD = ['Dinner 01', 'Dinner 02', 'Dinner 03', 'Dinner 04']

function PhotoPlaceholder({
  label,
  className = '',
  onClick,
}: {
  label: string
  className?: string
  onClick?: () => void
}) {
  const interactive = Boolean(onClick)
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center rounded-[10px] border border-dashed border-line text-center text-[0.7rem] font-medium text-ink-dim ${interactive ? 'cursor-pointer transition-colors hover:border-line-accent' : ''} ${className}`}
      style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
    >
      {label}
    </div>
  )
}

function Lightbox({ label, onClose }: { label: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
    >
      <div className="relative aspect-[4/3] w-full max-w-[640px]">
        <PhotoPlaceholder label={label} className="h-full w-full" />
      </div>
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink"
      >
        <FaTimes />
      </button>
    </motion.div>
  )
}

export default function Passions() {
  const [openPhoto, setOpenPhoto] = useState<string | null>(null)

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
          ← Back home
        </Link>

        {/* Header */}
        <Reveal className="mt-7 mb-20">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            03 — Passions
          </p>
          <h1 className="font-display mb-5 max-w-[800px] text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-[1.02] tracking-tight text-ink">
            I'm significantly more interesting away from a keyboard.
          </h1>
          <p className="max-w-[600px] text-[1.05rem] leading-relaxed text-ink-muted">
            Sports most nights, a run most mornings, and a standing interest in whatever's
            for dinner.
          </p>
        </Reveal>

        {/* Sports */}
        <section className="mb-28">
          <Reveal className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-center lg:gap-10">
            <div className="lg:col-span-3">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Pickleball · 4.5
              </p>
              <h2 className="font-display mb-4 text-[1.9rem] font-extrabold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
                The one I'm actually good at.
              </h2>
              <p className="max-w-[520px] text-base leading-relaxed text-ink-muted">
                Weekly at a 4.5 level, a few tournament wins, backed off the competitive
                circuit lately. Working toward a coaching certification — partly because
                the game's fun, mostly because teaching something is the fastest way to
                find out whether it's actually understood.
              </p>
            </div>
            <PhotoPlaceholder
              label="Pickleball action"
              className="aspect-[4/3] lg:col-span-2"
              onClick={() => setOpenPhoto('Pickleball action')}
            />
          </Reveal>

          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {SPORTS_SUPPORTING.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="tile-label">{s.label} · {s.cadence}</div>
                <p className="text-sm leading-relaxed text-ink-muted">{s.desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <PhotoPlaceholder label="Softball" className="aspect-square" onClick={() => setOpenPhoto('Softball')} />
            <PhotoPlaceholder label="Hockey" className="aspect-square" onClick={() => setOpenPhoto('Hockey')} />
            <PhotoPlaceholder label="Nexus league" className="aspect-square" onClick={() => setOpenPhoto('Nexus league')} />
          </div>
        </section>

        {/* The run — full-bleed standout */}
        <Reveal className="mb-28 -mx-4 sm:-mx-8">
          <div
            className="relative flex min-h-[420px] items-end overflow-hidden sm:min-h-[520px]"
            style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-10 px-4 pb-12 sm:px-8 sm:pb-16">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                42.2 km · Solo · Summer 2026
              </p>
              <h2 className="font-display mb-5 max-w-[700px] text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-ink">
                Running a marathon nobody's organizing.
              </h2>
              <p className="max-w-[620px] text-base leading-relaxed text-ink-muted">
                No race, no bib, no crowd — a self-mapped route through Toronto's ravine
                trail network, with friends stationed along the way with water and a ride
                home at the end. I like this for the same reason as the projects with
                source code: nobody asked for it, it only happens if the work gets done,
                and there's no version of finishing it that isn't earned.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Community */}
        <section className="mb-28">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {COMMUNITY.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="tile-label">{c.label}</div>
                <p className="text-sm leading-relaxed text-ink-muted">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Places */}
        <Reveal className="mb-28">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">Travel</p>
          <h2 className="font-display mb-6 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Wherever I can get to.
          </h2>
          <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:-mx-8 sm:px-8">
            {PLACES.map((place) => (
              <div key={place} className="w-[220px] shrink-0 snap-start">
                <PhotoPlaceholder
                  label={place}
                  className="aspect-[3/4] w-full"
                  onClick={() => setOpenPhoto(place)}
                />
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-dim">{place}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Food */}
        <Reveal className="mb-28">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">Food</p>
          <h2 className="font-display mb-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            I plan my weekends around meals.
          </h2>
          <p className="mb-8 max-w-[560px] text-base leading-relaxed text-ink-muted">
            Toronto is an unfairly good city for this and I've made it my business to
            take advantage. If you want a recommendation I have one. If you want an
            argument about the best place for a specific dish, I have that too.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FOOD.map((f) => (
              <PhotoPlaceholder key={f} label={f} className="aspect-square" onClick={() => setOpenPhoto(f)} />
            ))}
          </div>
        </Reveal>

        {/* Closer */}
        <Reveal className="border-t border-line pt-14 pb-4 text-center">
          <h2 className="font-display mb-6 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            If any of this overlaps with your thing, come say hi.
          </h2>
          <Link to="/contact" className="btn-primary">
            Contact
          </Link>
        </Reveal>
      </div>

      <AnimatePresence>
        {openPhoto && <Lightbox label={openPhoto} onClose={() => setOpenPhoto(null)} />}
      </AnimatePresence>
    </div>
  )
}
