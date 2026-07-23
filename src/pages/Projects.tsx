import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function Projects() {
  return (
    <div className="mx-auto max-w-[900px] px-6 pt-32 pb-20 sm:px-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
        ← Back home
      </Link>
      <Reveal delay={0.05}>
        <div className="mb-6 mt-6 inline-block rounded-full border border-line-accent bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
          Projects
        </div>
        <h1 className="font-display mb-5 text-[clamp(2.8rem,6vw,5rem)] font-black leading-none tracking-tight text-ink">
          Things I've<br /><span className="text-accent">built &amp; shipped.</span>
        </h1>
        <p className="mb-8 max-w-[520px] text-[1.05rem] leading-relaxed text-ink-muted">
          From a community sports league web app to game development and mobile
          security tools. This page will showcase each project with screenshots,
          technical breakdowns, and links to live demos or repos.
        </p>
        <div className="inline-block rounded-full border border-line-accent bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
          Coming soon — full page in progress
        </div>
      </Reveal>
    </div>
  )
}
