import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../context/useTheme'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/experience', label: 'Experience', end: false },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/passions', label: 'Passions', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function NavLinks({ className, onLinkClick }: { className?: string; onLinkClick?: () => void }) {
  return (
    <div className={className}>
      {LINKS.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `transition-colors ${isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  )
}

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-16 items-center border-b border-line bg-canvas/85 px-4 backdrop-blur-xl sm:px-8">
      <Link to="/" className="font-display text-lg font-bold tracking-tight text-ink">
        ethan<span className="text-accent">.</span>
      </Link>

      <NavLinks className="mx-auto hidden items-center gap-5 text-sm font-medium md:flex" />

      <div className="ml-auto flex items-center gap-2.5">
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-line bg-white/[0.03] text-ink-muted transition-all hover:-translate-y-0.5 hover:border-line-accent hover:text-accent"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <Link to="/contact" className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:inline-block">
          Say Hi
        </Link>
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-[9px] border border-line md:hidden"
        >
          <span className="h-px w-4 bg-ink" />
          <span className="h-px w-4 bg-ink" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex flex-col bg-canvas md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <span className="font-display text-lg font-bold text-ink">
                ethan<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-line text-ink"
              >
                ✕
              </button>
            </div>
            <NavLinks
              className="flex flex-1 flex-col items-center justify-center gap-8 font-display text-4xl font-bold"
              onLinkClick={() => setIsMenuOpen(false)}
            />
            <div className="flex justify-center pb-12">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white"
              >
                Say Hi
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
