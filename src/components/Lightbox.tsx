import { useEffect, useState } from 'react'

type LightboxImage = { src: string; alt: string }

export default function Lightbox({ images }: { images: LightboxImage[] }) {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [active])

  const colsClass =
    images.length >= 3 ? 'sm:grid-cols-3' : images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'

  return (
    <>
      <div className={`grid grid-cols-1 gap-3 ${colsClass}`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Enlarge: ${img.alt}`}
            className="group relative aspect-[2/1] w-full overflow-hidden rounded-[10px] border border-line bg-surface transition-colors duration-300 hover:border-line-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 text-sm font-medium text-transparent transition-colors duration-300 group-hover:bg-black/40 group-hover:text-white">
              Click to enlarge
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

          <img
            src={images[active].src}
            alt={images[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-card border border-line-accent object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  )
}
