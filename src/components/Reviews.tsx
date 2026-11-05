import { reviews } from "@/lib/site"

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream pt-12 text-inktext md:px-8 md:py-20" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber-deep">Google reviews</p>
        <h2 id="reviews-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
          5.0 from 1,070+ reviews.
        </h2>
        <p className="mt-2 text-sm text-inktext/70">Excerpts. No names added. Swipe to read the next one.</p>
      </div>
      <div className="mt-4">
        <div className="rail" aria-label="Google reviews" aria-roledescription="carousel">
          {reviews.map((review, index) => (
            <figure key={review.id} className="rounded-[1.5rem] bg-white/70 p-5">
              <blockquote className="font-display text-xl font-semibold leading-snug md:text-2xl">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-inktext/55">
                Google review · {index + 1} / {reviews.length}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
