import { useRef, useState } from "react"
import { reviews } from "@/lib/site"

export function Reviews() {
  const [index, setIndex] = useState(0)
  const startX = useRef<number | null>(null)
  const review = reviews[index] ?? reviews[0]

  function go(next: number) {
    setIndex((next + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20" aria-labelledby="reviews-title">
      <h2 id="reviews-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
        5.0 from 1,070+ reviews.
      </h2>
      <p className="mt-2 text-sm text-mist">Google review excerpts. No names.</p>
      <figure
        className="mt-6 min-h-48"
        aria-roledescription="carousel"
        aria-label={`Review ${index + 1} of ${reviews.length}`}
        onPointerDown={(event) => {
          startX.current = event.clientX
        }}
        onPointerUp={(event) => {
          if (startX.current == null) return
          const dx = event.clientX - startX.current
          if (dx > 40) go(index - 1)
          if (dx < -40) go(index + 1)
          startX.current = null
        }}
      >
        <blockquote className="max-w-2xl text-xl font-medium leading-snug tracking-tight md:text-2xl">
          “{review.quote}”
        </blockquote>
        <figcaption className="mt-4 text-xs text-mist">
          Google review · {index + 1} / {reviews.length}
        </figcaption>
      </figure>
      <div className="mt-4 flex gap-2" role="tablist" aria-label="Review progress">
        {reviews.map((item, dot) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={dot === index}
            aria-label={`Show review ${dot + 1}`}
            className={`h-1.5 rounded-full transition-all ${dot === index ? "w-8 bg-ink" : "w-2 bg-line"}`}
            onClick={() => go(dot)}
          />
        ))}
      </div>
    </section>
  )
}
