import { industries } from "@/lib/site"

export function Industries() {
  return (
    <section id="industries" className="pt-12 md:px-8 md:pt-20" aria-labelledby="industries-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Who it is for</p>
        <h2 id="industries-title" className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight md:text-5xl">
          Homes, shops, factories, and remote sites.
        </h2>
      </div>
      <div className="mx-auto mt-6 grid max-w-6xl gap-3 px-4 md:grid-cols-2 md:px-0">
        {industries.map((industry) => (
          <IndustryCard key={industry.title} industry={industry} />
        ))}
      </div>
    </section>
  )
}

function IndustryCard({ industry }: { industry: (typeof industries)[number] }) {
  return (
    <article className="press relative h-80 overflow-hidden rounded-[1.5rem] border border-line">
      <img
        src={industry.image}
        alt={industry.alt}
        width={industry.width}
        height={industry.height}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-amber">{industry.who}</p>
        <h3 className="mt-1 font-display text-2xl font-bold">{industry.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ivory/85">{industry.text}</p>
      </div>
    </article>
  )
}
