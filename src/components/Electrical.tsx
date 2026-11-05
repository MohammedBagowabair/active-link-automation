import { Check } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { electricalTasks } from "@/lib/site"

export function Electrical() {
  return (
    <section id="electrical" className="border-y border-line bg-ink-2" aria-labelledby="electrical-title">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">04 — Electrical</p>
          <h2 id="electrical-title" className="mt-3 font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
            Power, panels and the faults in between.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist md:text-lg">
            Electrical services from the same Nilai team that handles the security and automation.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {electricalTasks.map((task) => (
              <li key={task} className="flex items-start gap-3 text-sm leading-snug text-ivory md:text-base">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-amber text-inktext">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {task}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <figure className="overflow-hidden rounded-[1.8rem] border border-line">
            <img
              src="/images/wires.jpg"
              alt="An electrician working on a wall-mounted electrical enclosure"
              width={1600}
              height={1068}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-[70%_center]"
            />
            <figcaption className="bg-panel px-5 py-4 text-sm text-mist">
              Wiring, panels, lighting, earthing and power restoration.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
