import { asset, electricalTasks } from "@/lib/site"

export function Electrical() {
  return (
    <section id="electrical" className="px-4 pt-12 md:px-8 md:pt-20" aria-labelledby="electrical-title">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Electrical</p>
          <h2 id="electrical-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Power, panels and the faults in between.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
            Electrical services from the same Nilai team that handles the security and automation.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {electricalTasks.map((task) => (
              <li key={task} className="rounded-full border border-line bg-panel px-3 py-1.5 text-sm">
                {task}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={asset("images/wires.jpg")}
          alt="An electrician working on a wall-mounted electrical enclosure"
          width={1600}
          height={1068}
          className="h-64 w-full rounded-[1.5rem] object-cover md:h-80"
        />
      </div>
    </section>
  )
}
