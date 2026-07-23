import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <div className="mx-auto max-w-[900px] px-6 pt-32 pb-20 sm:px-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
        ← Back home
      </Link>
      <Reveal delay={0.05}>
        <div className="mb-6 mt-6 inline-block rounded-full border border-line-accent bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
          Contact
        </div>
        <h1 className="font-display mb-5 text-[clamp(2.8rem,6vw,5rem)] font-black leading-none tracking-tight text-ink">
          Let's<br /><span className="text-accent">connect.</span>
        </h1>
        <p className="mb-8 max-w-[520px] text-[1.05rem] leading-relaxed text-ink-muted">
          Always open to chatting about Android, interesting problems, new
          opportunities, or really anything. Best way to reach me is LinkedIn
          or email.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:ethanmah238@gmail.com" className="btn-primary">
            Email me
          </a>
          <a href="https://linkedin.com/in/etthanmah" target="_blank" rel="noreferrer" className="btn-secondary">
            LinkedIn
          </a>
          <a href="https://github.com/ethaaaanm" target="_blank" rel="noreferrer" className="btn-secondary">
            GitHub
          </a>
        </div>
      </Reveal>
    </div>
  )
}
