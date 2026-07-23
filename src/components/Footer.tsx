import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <p className="mb-6 text-center text-sm text-ink-muted">
          Open to full-time, freelance, and the occasional cool idea.
        </p>

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <span className="text-sm text-ink-muted">
            Ethan Mah · Software Developer · Toronto
          </span>

          <div className="flex items-center gap-4 text-lg text-ink-muted">
            <a
              href="https://linkedin.com/in/etthanmah"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ethaaaanm"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <FaGithub />
            </a>
            <Link to="/contact" aria-label="Contact" className="transition-colors hover:text-accent">
              <MdEmail />
            </Link>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-medium text-ink-muted transition-colors hover:text-accent"
          >
            ↑ Back to top
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-ink-dim">
          © {new Date().getFullYear()} Ethan Mah
        </p>
      </div>
    </footer>
  )
}
