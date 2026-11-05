import { Reveal } from "@/components/Reveal"
import { processSteps } from "@/lib/site"

export function Process() {
  return (
    <section id="process" className="border-t border-line bg-ink" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">06 — How a job runs</p>
          <h2 id="process-title" className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
            Five steps. No skipping the one that matters.
          </h2>
        </Reveal>
        <ol className="process mt-12">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span className="num">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl font-bold tracking-tight text-ivory">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
