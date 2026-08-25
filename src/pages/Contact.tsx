import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import Reveal from '../components/Reveal'

// Safe to expose publicly — it's write-only and can't read submissions.
const WEB3FORMS_ACCESS_KEY = 'e508aacd-47c9-4336-8dd0-e75cc02e7ebe'

const OPEN_TO = [
  {
    label: 'Full-Time Roles',
    desc: "Toronto-based and open to remote or hybrid. If there's a strong mission behind it, I'd love to hear about it.",
  },
  {
    label: 'Freelance App Work',
    desc: "Android is my expertise, but I've also taken full-stack web projects start to finish too.",
  },
  {
    label: 'Projects and Collaborations',
    desc: "Building something nights and weekends? Happy to be an extra pair of hands!",
  },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: if this hidden field got filled in, it's a bot — drop it quietly.
    if (data.get('botcheck')) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await res.json()
      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-[900px] px-4 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
          ← Back home
        </Link>

        {/* Header */}
        <Reveal className="mt-7 mb-16">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            04 — Contact
          </p>
          <h1 className="font-display mb-5 text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-ink">
            Let's work together!!
          </h1>
          <p className="text-[1.05rem] leading-relaxed text-ink-muted">
            Usually reply within a day or two.
          </p>
        </Reveal>

        {/* What I'm open to */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {OPEN_TO.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.05} className="card">
                <div className="tile-label">{o.label}</div>
                <p className="text-sm leading-relaxed text-ink-muted">{o.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Message form */}
        <Reveal className="mb-16">
          <form onSubmit={handleSubmit} className="card">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

            {/* Honeypot — hidden from real visitors, left for bots to fill in */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="tile-label mb-2 block">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-[10px] border border-line bg-white/[0.03] px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-line-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="tile-label mb-2 block">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-[10px] border border-line bg-white/[0.03] px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-line-accent"
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="subject" className="tile-label mb-2 block">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                className="w-full rounded-[10px] border border-line bg-white/[0.03] px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-line-accent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="tile-label mb-2 block">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-[10px] border border-line bg-white/[0.03] px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-line-accent"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'success' && (
                <span className="text-sm font-semibold text-accent">Message sent.</span>
              )}
              {status === 'error' && (
                <span className="text-sm text-ink-muted">
                  That didn't send. Try again in a bit, or reach out via LinkedIn in the footer.
                </span>
              )}
            </div>
          </form>
        </Reveal>

        {/* Resume */}
        <Reveal className="pb-4">
          <a
            href={`${import.meta.env.BASE_URL}resume-public.pdf`}
            download
            className="flex items-center justify-between gap-3 rounded-card border border-line-accent bg-accent-soft/30 p-6"
          >
            <div>
              <div className="font-display mb-1 text-lg font-bold tracking-tight text-ink">Resume</div>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-dim">
                PDF · Updated July 2026
              </span>
            </div>
            <FaDownload className="text-xl text-accent" />
          </a>
        </Reveal>
      </div>
    </div>
  )
}
