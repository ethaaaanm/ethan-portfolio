import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export type CarouselSlide = {
  src?: string
  alt: string
  tag: string
  caption: string
  // Any valid CSS `object-position` value ("top", "center 30%", "65% 40%", …) —
  // tunes where the crop is anchored so portrait photos in this wide slide
  // don't just show empty sky/background above the actual subject.
  focus?: string
}

const AUTOPLAY_MS = 4500

export default function Carousel({
  slides,
  aspect = 'aspect-[4/3] sm:aspect-[16/9]',
}: {
  slides: CarouselSlide[]
  aspect?: string
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [showCaption, setShowCaption] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const jumpTo = (next: number) => {
    setIndex(next)
    setShowCaption(false)
  }

  useEffect(() => {
    if (paused || showCaption || shouldReduceMotion || slides.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
      setShowCaption(false)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, showCaption, shouldReduceMotion, slides.length])

  const go = (dir: 1 | -1) => {
    jumpTo((index + dir + slides.length) % slides.length)
  }

  const slide = slides[index]

  return (
    <div
      role="region"
      aria-label="Photo slideshow"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
      className={`group relative w-full overflow-hidden rounded-card border border-line-accent bg-surface outline-none ${aspect}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) go(1)
            else if (info.offset.x > 80) go(-1)
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          {slide.src ? (
            <img
              src={slide.src}
              alt={slide.alt}
              className="pointer-events-none h-full w-full object-cover"
              style={{ objectPosition: slide.focus ?? 'center' }}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center px-6 text-center text-sm font-medium text-ink-dim"
              style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
            >
              {slide.alt}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Top gradient for legibility */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Category tag */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white backdrop-blur-sm">
        {slide.tag}
      </span>

      {/* Caption toggle */}
      <button
        type="button"
        onClick={() => setShowCaption((v) => !v)}
        aria-expanded={showCaption}
        aria-label="Toggle photo description"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-sm font-semibold italic text-white backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        i
      </button>

      {/* Prev / Next */}
      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/50 text-3xl leading-none text-white opacity-90 backdrop-blur-sm transition-opacity hover:opacity-100 focus-visible:opacity-100 sm:h-10 sm:w-10"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/50 text-3xl leading-none text-white opacity-90 backdrop-blur-sm transition-opacity hover:opacity-100 focus-visible:opacity-100 sm:h-10 sm:w-10"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.alt}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => jumpTo(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-accent' : 'w-1.5 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Caption panel */}
      <AnimatePresence>
        {showCaption && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-x-0 bottom-0 bg-black/80 px-5 py-4 backdrop-blur-sm"
          >
            <p className="text-sm leading-relaxed text-white">{slide.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
