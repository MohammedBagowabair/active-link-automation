import { CountUp } from "@/components/CountUp"

const points = [
  { label: "Established", value: <CountUp to={2014} from={2000} grouping={false} />, hint: "Bandar Baru Nilai" },
  { label: "Google rating", value: <CountUp to={5} decimals={1} />, hint: "Out of 5" },
  { label: "Google reviews", value: <CountUp to={1070} suffix="+" />, hint: "Public reviews" },
  { label: "One team", value: "All", hint: "Security, automation, electrical" },
]

export function Why() {
  return (
    <section id="why" className="px-4 py-12 md:px-8 md:py-16" aria-labelledby="why-title">
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Why this team</p>
        <h2 id="why-title" className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight md:text-5xl">
          One team for security, automation and electrical.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-mist">
          Established 2014 in Bandar Baru Nilai. Rated 5.0 from 1,070+ Google reviews.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
          {points.map((point) => (
            <div key={point.label} className="rounded-[1.3rem] border border-line bg-panel px-4 py-4">
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mist">{point.label}</dt>
              <dd className="mt-2 font-display text-3xl font-bold text-ivory">{point.value}</dd>
              <p className="mt-1 text-xs text-mist">{point.hint}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
