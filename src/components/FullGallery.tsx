import { useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import Lightbox from './Lightbox'

type GalleryPhoto = { src?: string; alt: string; caption?: string }

export default function FullGallery({
  label,
  photos,
  vscoUrl,
}: {
  label: string
  photos: GalleryPhoto[]
  vscoUrl: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[90] overflow-y-auto bg-canvas">
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-canvas/90 px-4 py-4 backdrop-blur-md sm:px-8">
            <div>
              <div className="font-display text-lg font-bold tracking-tight text-ink">Full Gallery</div>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-dim">
                {photos.length} photos
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href={vscoUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-1.5 text-sm font-semibold text-accent hover:underline sm:inline-flex"
              >
                Open on VSCO <FaExternalLinkAlt className="text-xs" />
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close gallery"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-line-accent hover:text-accent"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-[1100px] px-4 py-8 sm:px-8">
            <Lightbox aspect="aspect-square" cols={4} images={photos} />
            <a
              href={vscoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline sm:hidden"
            >
              Open on VSCO <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
