import { useEffect, useState } from 'react'

type LightboxImage = { src?: string; alt: string; caption?: string; focus?: 'top' | 'center' | 'bottom' }

function Frame({ img, className }: { img: LightboxImage; className: string }) {
  if (!img.src) {
    return (
      <div
        className={`flex items-center justify-center text-center text-[0.7rem] font-medium text-ink-dim ${className}`}
        style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
      >
        {img.alt}
      </div>
    )
  }
  return <img src={img.src} alt={img.alt} loading="lazy" className={className} />
}

export default function Lightbox({
  images,
  aspect = 'aspect-[2/1]',
  cols,
}: {
  images: LightboxImage[]
  aspect?: string
  cols?: 2 | 3 | 4
}) {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i === null ? i : (i + 1) % images.length))
      if (e.key === 'ArrowLeft') setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length))
    }
    window.addEventListener('keydown', onKey)

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [active, images.length])

  const colsClass = cols
    ? cols === 4
      ? 'grid-cols-2 sm:grid-cols-4'
      : cols === 3
        ? 'grid-cols-1 sm:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2'
    : images.length >= 3
      ? 'grid-cols-1 sm:grid-cols-3'
      : images.length === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-1'

  return (
    <>
      <div className={`grid gap-3 ${colsClass}`}>
        {images.map((img, i) => (
          <button
            key={img.src ?? img.alt}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Enlarge: ${img.alt}`}
            className={`group relative w-full overflow-hidden rounded-[10px] border border-line bg-surface transition-colors duration-300 hover:border-line-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${aspect}`}
          >
            <Frame
              img={img}
              className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                img.focus === 'bottom' ? 'object-bottom' : img.focus === 'center' ? 'object-center' : 'object-top'
              }`}
            />
            <span className="pointer-events-none absolute inset-0 flex items-end bg-black/0 p-3 text-left text-xs font-medium text-transparent transition-colors duration-300 group-hover:bg-black/50 group-hover:text-white">
              {img.caption ?? 'Click to enlarge'}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
          >
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length))
                }}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition-colors hover:bg-white/20 sm:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActive((i) => (i === null ? i : (i + 1) % images.length))
                }}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition-colors hover:bg-white/20 sm:right-6"
              >
                ›
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-full flex-col overflow-hidden rounded-card border border-line-accent shadow-2xl"
          >
            <Frame img={images[active]} className="max-h-[75vh] min-h-[200px] w-full object-contain" />
            {images[active].caption && (
              <p className="max-w-[640px] bg-surface px-5 py-4 text-sm leading-relaxed text-ink-muted">
                {images[active].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
