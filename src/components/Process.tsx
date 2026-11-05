import { processSteps } from "@/lib/site"

export function Process() {
  return (
    <section id="process" className="pt-12 md:px-8 md:pt-20" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">How a job runs</p>
        <h2 id="process-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
          Five steps. No skipping.
        </h2>
      </div>
      <div className="rail-fade mt-4 lg:hidden">
        <ol className="rail">
          {processSteps.map((step, index) => (
            <li key={step.title} className="rounded-[1.4rem] border border-line bg-panel p-4">
              <p className="font-display text-sm font-bold text-amber">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <ol className="mx-auto mt-8 hidden max-w-6xl gap-3 lg:grid lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <li key={step.title} className="rounded-[1.4rem] border border-line bg-panel p-4">
            <p className="font-display text-sm font-bold text-amber">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-display text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-mist">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
