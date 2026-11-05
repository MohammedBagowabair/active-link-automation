import { processSteps } from "@/lib/site"

export function Process() {
  return (
    <section id="process" className="px-4 pt-12 md:px-8 md:pt-20" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">How a job runs</p>
        <h2 id="process-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
          Five steps. No skipping.
        </h2>
        <p className="mt-2 max-w-lg text-sm text-mist">
          Understand the property, identify the real requirement, select suitable equipment, plan the installation,
          then configure and test properly.
        </p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step.title} className="rounded-[1.4rem] border border-line bg-panel p-4">
              <p className="font-display text-sm font-bold text-amber">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
