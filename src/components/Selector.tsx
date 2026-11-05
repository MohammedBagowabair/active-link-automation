import { properties } from "@/lib/site"
import { useQuote } from "@/components/QuoteContext"

const propertyName: Record<(typeof properties)[number]["id"], string> = {
  home: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  remote: "Agricultural or remote site",
}

export function Selector() {
  const { openQuote } = useQuote()
  return (
    <section id="selector" className="pt-12 md:px-8" aria-labelledby="selector-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Which system</p>
        <h2 id="selector-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
          Start with the property.
        </h2>
        <p className="mt-2 max-w-lg text-sm text-mist">
          Tap a card. The quote sheet opens on that property, then the service, then WhatsApp.
        </p>
      </div>
      <div className="rail-fade mt-4">
        <div className="rail">
          {properties.map((item) => (
            <button
              key={item.id}
              type="button"
              className="press rounded-[1.4rem] border border-line bg-panel p-4 text-left"
              onClick={() => openQuote({ property: propertyName[item.id] })}
            >
              <span className="block font-display text-xl font-bold">{item.title}</span>
              <span className="mt-2 block text-sm text-mist">{item.detail}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
