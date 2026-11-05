import { MapPin } from "lucide-react"
import { areas, MAPS_LINK } from "@/lib/site"

export function Areas() {
  return (
    <section id="areas" className="pt-12 md:px-8 md:pt-20" aria-labelledby="areas-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Service area</p>
        <h2 id="areas-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
          Based in Nilai. Working outwards.
        </h2>
        <p className="mt-2 max-w-lg text-sm text-mist">
          Bandar Baru Nilai is home. The team also covers Seremban, Negeri Sembilan, Selangor and surrounding areas.
        </p>
        <a href={MAPS_LINK} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber">
          <MapPin className="size-4" />
          Open the Nilai premises
        </a>
      </div>
      <ol className="mx-auto mt-6 grid max-w-6xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-5 lg:px-0">
        {areas.map((area, index) => (
          <AreaCard key={area.name} index={index} name={area.name} note={area.note} />
        ))}
      </ol>
    </section>
  )
}

function AreaCard({ index, name, note }: { index: number; name: string; note: string }) {
  return (
    <li className="rounded-[1.4rem] border border-line bg-panel p-4">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-amber">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-2 font-display text-2xl font-bold">{name}</p>
      <p className="mt-1 text-sm text-mist">{note}</p>
    </li>
  )
}
