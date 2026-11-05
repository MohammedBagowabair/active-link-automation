import { useState } from "react"
import { useQuote } from "@/components/QuoteContext"
import { properties, propertyNeeds, type PropertyId } from "@/lib/site"
import { cn } from "@/lib/utils"

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

const shortLabel: Record<PropertyId, string> = {
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
    <section id="selector" className="px-4 pt-12 md:px-8 md:pt-20" aria-labelledby="selector-title">
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Build your system</p>
        <h2 id="selector-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
          What are we protecting?
        </h2>
        <p className="mt-2 max-w-lg text-sm text-mist">Tap a property. The matching systems appear, ready to quote.</p>
        <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4" role="listbox" aria-label="Property type">
          {properties.map((item) => {
            const on = picked === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={on}
                className={cn(
                  "press rounded-[1.3rem] border px-4 py-4 text-left",
                  on ? "border-amber bg-amber text-inktext" : "border-line bg-panel text-ivory",
                )}
                onClick={() => setPicked(item.id)}
              >
                <span className="block font-display text-xl font-bold">{shortLabel[item.id]}</span>
                <span className={cn("mt-1 block text-xs", on ? "text-inktext/70" : "text-mist")}>{item.detail}</span>
              </button>
            )
          })}
        </div>
        <div className="mt-4 min-h-16" aria-live="polite">
          {picked ? (
            <ul className="grid gap-2">
              {needs.map((need, index) => (
                <li key={need.id} className="pick-in" style={{ animationDelay: `${index * 45}ms` }}>
                  <button
                    type="button"
                    className="press flex w-full items-start justify-between gap-4 rounded-[1.3rem] border border-line bg-panel px-4 py-4 text-left"
                    onClick={() =>
                      openQuote({
                        property: quoteProperty[picked],
                        service: quoteService[need.id] ?? "Not sure yet",
                      })
                    }
                  >
                    <span>
                      <span className="block font-display text-lg font-bold">{need.title}</span>
                      <span className="mt-1 block text-sm text-mist">{need.blurb}</span>
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-amber">Quote</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
