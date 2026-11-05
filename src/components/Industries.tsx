import { Reveal } from "@/components/Reveal"
import { industries } from "@/lib/site"

export function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="industries-title">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">05 — Who it is for</p>
        <h2 id="industries-title" className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
          Homes, shops, factories, and sites with limited infrastructure.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {industries.map((industry, index) => (
          <Reveal key={industry.title} delay={index * 70} className="h-full">
            <article className="group relative h-full min-h-[22rem] overflow-hidden rounded-[1.8rem] border border-line">
              <img
                src={industry.image}
                alt={industry.alt}
                width={industry.width}
                height={industry.height}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/10" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">{industry.who}</p>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-ivory">{industry.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/85 md:text-base">{industry.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
