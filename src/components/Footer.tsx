import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="flex flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Link to="/" className="font-display text-lg font-bold tracking-tight text-ink">
            ethan<span className="text-accent">.</span>
          </Link>
          <p className="mt-1 text-sm text-ink-muted">
            Thanks for scrolling.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-6 text-lg text-ink-muted">
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

          <span aria-hidden="true" className="h-5 w-px bg-line" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-medium text-ink-muted transition-colors hover:text-accent"
          >
            ↑ Top
          </button>
        </div>
      </div>

      <div className="border-t border-line px-4 py-4 sm:px-8">
        <p className="text-center text-xs text-ink-dim">
          © {new Date().getFullYear()} Ethan Mah · Software Developer · Toronto
        </p>
      </div>
    </footer>
  )
}
