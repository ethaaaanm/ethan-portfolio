import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaDownload, FaGithub, FaLinkedin, FaRegCopy } from 'react-icons/fa'
import Reveal from '../components/Reveal'

// TODO: sign up at web3forms.com (free), grab your access key, and paste it here.
// The key is safe to expose publicly — it's write-only and can't read submissions.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

const OPEN_TO = [
  {
    label: 'Full-Time Roles',
    desc: 'Toronto-based, open to remote or in-person in the GTA, and open to hearing about anything genuinely interesting beyond it.',
  },
  {
    label: 'Freelance App Work',
    desc: 'Android is home turf; full-stack web shipped start to finish too.',
  },
  {
    label: 'Projects and Collaborations',
    desc: 'Nights-and-weekends builds, if a second pair of hands would help.',
  },
]

const TOPICS = ['A role', 'Freelance work', 'A project idea', 'Something else']

function assembleEmail() {
  return ['ethanmah238', 'gmail.com'].join('@')
}

type CopyState = 'idle' | 'copied' | 'failed'

function CopyEmailButton() {
  const [state, setState] = useState<CopyState>('idle')

  const handleCopy = async () => {
    const email = assembleEmail()
    try {
      await navigator.clipboard.writeText(email)
      setState('copied')
    } catch {
      setState('failed')
    }
    setTimeout(() => setState('idle'), 2500)
  }

  return (
    <button onClick={handleCopy} className="card flex w-full flex-col items-start text-left">
      <div className="tile-label">Email</div>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
        {state === 'copied' && (
          <>
            <FaCheck className="text-accent" /> Copied to clipboard
          </>
        )}
        {state === 'failed' && <>Couldn't auto-copy — it's {assembleEmail()}</>}
        {state === 'idle' && (
          <>
            <FaRegCopy /> Copy email address
          </>
        )}
      </span>
    </button>
  )
}

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
            Let's build something.
          </h1>
          <p className="text-[1.05rem] leading-relaxed text-ink-muted">
            Usually replies within a day or two.
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

        {/* Reach me */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Reveal>
              <CopyEmailButton />
            </Reveal>
            <Reveal delay={0.05}>
              <a
                href="https://linkedin.com/in/etthanmah"
                target="_blank"
                rel="noreferrer"
                className="card flex flex-col items-start"
              >
                <div className="tile-label">LinkedIn</div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  <FaLinkedin /> linkedin.com/in/etthanmah
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="https://github.com/ethaaaanm"
                target="_blank"
                rel="noreferrer"
                className="card flex flex-col items-start"
              >
                <div className="tile-label">GitHub</div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  <FaGithub /> github.com/ethaaaanm
                </span>
              </a>
            </Reveal>
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
              <label htmlFor="subject" className="tile-label mb-2 block">What's this about?</label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="w-full rounded-[10px] border border-line bg-white/[0.03] px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-line-accent"
              >
                <option value="" disabled>Choose one</option>
                {TOPICS.map((t) => (
                  <option key={t} value={t} className="bg-surface">{t}</option>
                ))}
              </select>
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
                  That didn't send. Email me directly and I'll get it either way.
                </span>
              )}
            </div>

            <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-dim">
              Prefer email? The address is one click above.
            </p>
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
