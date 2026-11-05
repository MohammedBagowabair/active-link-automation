import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { reviews } from "@/lib/site"

export function Reviews() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef<number | null>(null)
  const startY = useRef<number | null>(null)
  const review = reviews[index] ?? reviews[0]

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [paused])

  const go = (next: number) => {
    setIndex((next + reviews.length) % reviews.length)
  }

  return (
    <section
      id="reviews"
      className="bg-cream text-inktext"
      aria-labelledby="reviews-title"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false)
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-deep">08 — Google reviews</p>
            <h2 id="reviews-title" className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              5.0 from 1,070+ reviews.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-inktext/70">
              Excerpts from Google reviews. No names added.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-inktext/15 bg-white/50"
              onClick={() => go(index - 1)}
              aria-label="Previous review"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-inktext/15 bg-white/50"
              onClick={() => go(index + 1)}
              aria-label="Next review"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <figure
          className="mt-10 outline-none"
          tabIndex={0}
          aria-label={`Review ${index + 1} of ${reviews.length}. Use the arrow keys to change review.`}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault()
              go(index + 1)
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault()
              go(index - 1)
            }
          }}
          onPointerDown={(event) => {
            startX.current = event.clientX
            startY.current = event.clientY
          }}
          onPointerUp={(event) => {
            if (startX.current == null || startY.current == null) return
            const dx = event.clientX - startX.current
            const dy = event.clientY - startY.current
            if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? index + 1 : index - 1)
            startX.current = null
            startY.current = null
          }}
        >
          <blockquote className="max-w-4xl font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
            <span aria-hidden="true" className="mr-2 text-amber-deep">
              “
            </span>
            {review.quote}
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-inktext/60">
            Google review · {index + 1} / {reviews.length}
          </figcaption>
        </figure>

        <div className="mt-8 flex gap-2" role="tablist" aria-label="Choose a review">
          {reviews.map((item, dot) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={dot === index}
              aria-label={`Show review ${dot + 1}`}
              className={`h-2.5 rounded-full transition-all ${dot === index ? "w-8 bg-inktext" : "w-2.5 bg-inktext/25"}`}
              onClick={() => go(dot)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
