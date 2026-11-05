import { useRef, useState } from "react"
import { reviews } from "@/lib/site"

export function Reviews() {
  const rail = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  function go(next: number) {
    const el = rail.current
    if (!el) return
    const card = el.children[next] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    setIndex(next)
  }

  return (
    <section id="reviews" className="bg-cream pt-12 text-inktext md:px-8 md:py-20" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber-deep">Google reviews</p>
        <h2 id="reviews-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
          5.0 from 1,070+ reviews.
        </h2>
        <p className="mt-2 text-sm text-inktext/70">Excerpts. No names added. Swipe for the next one.</p>
      </div>
      <div className="mt-4">
        <div
          ref={rail}
          className="rail"
          aria-label="Google reviews"
          aria-roledescription="carousel"
          onScroll={(event) => {
            const el = event.currentTarget
            const width = el.clientWidth || 1
            const next = Math.round(el.scrollLeft / (width * 0.86))
            setIndex(Math.min(reviews.length - 1, Math.max(0, next)))
          }}
        >
          {reviews.map((review, dot) => (
            <figure key={review.id} className="rounded-[1.5rem] bg-white/70 p-5">
              <blockquote className="font-display text-xl font-semibold leading-snug md:text-2xl">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-inktext/55">
                Google review · {dot + 1} / {reviews.length}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-3 flex justify-center gap-2" role="tablist" aria-label="Review progress">
          {reviews.map((review, dot) => (
            <button
              key={review.id}
              type="button"
              role="tab"
              aria-selected={dot === index}
              aria-label={`Show review ${dot + 1}`}
              className={`h-1.5 rounded-full ${dot === index ? "w-7 bg-inktext" : "w-1.5 bg-inktext/25"}`}
              onClick={() => go(dot)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
