import { Star } from "lucide-react"
import { useRef, useState } from "react"
import { FACEBOOK, GOOGLE_REVIEWS_LINK, reviews } from "@/lib/site"

function Stars({ className = "size-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-amber" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className={`${className} fill-current`} />
      ))}
    </span>
  )
}

function ReviewCard({ quote }: { quote: string }) {
  return (
    <figure className="glass flex h-full flex-col rounded-[1.4rem] p-5">
      <Stars className="size-3.5" />
      <blockquote className="mt-4 flex-1 font-display text-lg font-semibold leading-snug text-ivory">
        “{quote}”
      </blockquote>
      <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
        Google review
      </figcaption>
    </figure>
  )
}

export function Reviews() {
  const rail = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  function go(next: number) {
    const el = rail.current
    const card = el?.children[next] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    setIndex(next)
  }

  return (
    <section id="reviews" className="py-14 md:py-20" aria-labelledby="reviews-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Google reviews</p>
          <h2 id="reviews-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
            What clients wrote.
          </h2>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            <a className="text-amber" href={GOOGLE_REVIEWS_LINK}>
              Read all reviews on Google
            </a>
            <a className="text-ivory" href={FACEBOOK}>
              Facebook
            </a>
          </div>
        </div>
        <div className="glass flex items-center gap-4 rounded-[1.4rem] px-5 py-4" aria-label="5.0 out of 5 from 1,070 plus Google reviews">
          <p className="font-display text-5xl font-bold leading-none text-ivory">5.0</p>
          <div>
            <Stars />
            <p className="mt-1 text-sm text-mist">1,070+ Google reviews</p>
          </div>
        </div>
      </div>

      <div className="mt-6 md:hidden">
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
          {reviews.map((review) => (
            <ReviewCard key={review.id} quote={review.quote} />
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Review progress">
          {reviews.map((review, dot) => (
            <button
              key={review.id}
              type="button"
              role="tab"
              aria-selected={dot === index}
              aria-label={`Show review ${dot + 1}`}
              className={`h-1.5 rounded-full ${dot === index ? "w-7 bg-amber" : "w-1.5 bg-ivory/25"}`}
              onClick={() => go(dot)}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 hidden max-w-6xl gap-3 px-8 md:grid md:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} quote={review.quote} />
        ))}
      </div>
    </section>
  )
}
