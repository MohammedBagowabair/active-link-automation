import { MapPin } from "lucide-react"
import { areas, MAPS_LINK } from "@/lib/site"

export function Areas() {
  return (
    <section id="areas" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="areas-title">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">09 — Service area</p>
          <h2 id="areas-title" className="mt-3 font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
            Based in Nilai. Working outwards.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Bandar Baru Nilai is home. The team also covers Seremban, the rest of Negeri Sembilan, Selangor and
            surrounding areas.
          </p>
          <a href={MAPS_LINK} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber">
            <MapPin className="size-4" />
            Open the Nilai premises on Google Maps
          </a>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {areas.map((area, index) => (
            <li key={area.name} className="rounded-[1.4rem] border border-line bg-panel px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight text-ivory">{area.name}</p>
              <p className="mt-1 text-sm text-mist">{area.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
