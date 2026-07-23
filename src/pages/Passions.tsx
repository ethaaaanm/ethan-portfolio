import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function Passions() {
  return (
    <div className="mx-auto max-w-[900px] px-6 pt-32 pb-20 sm:px-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
        ← Back home
      </Link>
      <Reveal delay={0.05}>
        <div className="mb-6 mt-6 inline-block rounded-full border border-line-accent bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
          Beyond the Code
        </div>
        <h1 className="font-display mb-5 text-[clamp(2.8rem,6vw,5rem)] font-black leading-none tracking-tight text-ink">
          What makes<br /><span className="text-accent">me, me.</span>
        </h1>
        <p className="mb-8 max-w-[520px] text-[1.05rem] leading-relaxed text-ink-muted">
          Hockey, basketball, softball, spikeball, ultimate frisbee, pickleball —
          sports are a huge part of who I am. This page will also cover my faith,
          missionary trips, music, and other things I care about beyond tech.
        </p>
        <div className="inline-block rounded-full border border-line-accent bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
          Coming soon — photos &amp; stories in progress
        </div>
      </Reveal>
    </div>
  )
}
