import { useState } from "react"
import { useQuote } from "@/components/QuoteContext"
import { properties, propertyNeeds, type PropertyId } from "@/lib/site"

const quoteProperty: Record<PropertyId, string> = {
  home: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  remote: "Agricultural or remote site",
}

const quoteService: Record<string, string> = {
  cctv: "CCTV systems",
  alarm: "Security alarms",
  access: "Access control",
  attendance: "Attendance systems",
  autogate: "Autogate systems",
  barrier: "Barrier gates",
  automation: "Automation solutions",
  electrical: "Electrical services",
  repair: "CCTV troubleshooting & repair",
}

const labels: Record<PropertyId, string> = {
  home: "Home",
  commercial: "Shop",
  industrial: "Factory",
  remote: "Farm",
}

export function Selector() {
  const [picked, setPicked] = useState<PropertyId | null>(null)
  const { openQuote } = useQuote()
  const needs = picked ? propertyNeeds[picked] : []

  return (
    <section id="selector" className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20" aria-labelledby="selector-title">
      <p className="text-xs font-medium text-mist">Build your system</p>
      <h2 id="selector-title" className="mt-2 max-w-md text-3xl font-semibold tracking-tight md:text-4xl">
        What are we protecting?
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4" role="listbox" aria-label="Property type">
        {properties.map((item) => {
          const on = picked === item.id
          return (
            <button
              key={item.id}
              type="button"
              role="option"
              aria-selected={on}
              className={`press rounded-2xl border px-3 py-5 text-left ${on ? "border-ink bg-ink text-white" : "border-line bg-white"}`}
              onClick={() => setPicked(item.id)}
            >
              <span className="block text-lg font-semibold">{labels[item.id]}</span>
              <span className={`mt-1 block text-xs ${on ? "text-white/70" : "text-mist"}`}>{item.detail}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-4 min-h-16" aria-live="polite">
        {picked ? (
          <ul className="grid gap-2">
            {needs.map((need, index) => (
              <li key={need.id} className="pick-in" style={{ animationDelay: `${index * 40}ms` }}>
                <button
                  type="button"
                  className="press flex w-full items-start justify-between gap-4 rounded-2xl bg-white px-4 py-4 text-left"
                  onClick={() =>
                    openQuote({
                      property: quoteProperty[picked],
                      service: quoteService[need.id] ?? "Not sure yet",
                    })
                  }
                >
                  <span>
                    <span className="block font-medium">{need.title}</span>
                    <span className="mt-1 block text-sm text-mist">{need.blurb}</span>
                  </span>
                  <span className="shrink-0 text-sm font-medium">Quote</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-mist">Tap a property. Suitable systems appear here, ready to quote.</p>
        )}
      </div>
    </section>
  )
}
