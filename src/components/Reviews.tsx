import { Star } from "lucide-react"
import { FACEBOOK, GOOGLE_REVIEWS_LINK, reviews } from "@/lib/site"

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-14 text-inktext md:px-8 md:py-20" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber-deep">Google reviews</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="reviews-title" className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              5.0 from 1,070+ reviews.
            </h2>
            <p className="mt-2 flex items-center gap-1 text-amber-deep" aria-label="5.0 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
              <span className="ml-2 text-sm text-inktext/70">Google rating</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <a className="text-inktext underline decoration-inktext/30 underline-offset-4" href={GOOGLE_REVIEWS_LINK}>
              Read all reviews on Google
            </a>
            <a className="text-inktext underline decoration-inktext/30 underline-offset-4" href={FACEBOOK}>
              Facebook
            </a>
          </div>
        </div>
        <p className="mt-3 text-sm text-inktext/70">Three excerpts. Attributed as Google reviews. No names added.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {reviews.map((review, index) => (
            <figure key={review.id} className="flex h-full flex-col rounded-[1.4rem] bg-white p-5 shadow-sm">
              <div className="flex gap-0.5 text-amber-deep" aria-hidden="true">
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-base font-medium leading-relaxed">“{review.quote}”</blockquote>
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
