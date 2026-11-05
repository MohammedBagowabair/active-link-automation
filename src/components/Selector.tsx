import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { WhatsAppIcon } from "@/components/Icons"
import { Button } from "@/components/ui/button"
import {
  properties,
  propertyLabel,
  propertyNeeds,
  whatsappHref,
  type PropertyId,
} from "@/lib/site"

export function Selector() {
  const [property, setProperty] = useState<PropertyId | null>(null)
  const [needId, setNeedId] = useState<string | null>(null)

  const needs = property ? propertyNeeds[property] : []
  const need = needs.find((item) => item.id === needId) ?? null
  const step = need ? 3 : property ? 2 : 1

  const resetNeed = () => setNeedId(null)
  const resetAll = () => {
    setProperty(null)
    setNeedId(null)
  }

  const message =
    property && need
      ? `Hello Active Link Automation & Electrical. This is for ${propertyLabel(property).toLowerCase()}. I need help with ${need.title}.`
      : ""

  return (
    <section id="selector" className="px-5 pb-6 md:px-8" aria-labelledby="selector-title">
      <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-line bg-panel p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">02 — Quick selector</p>
          <h2 id="selector-title" className="mt-3 font-display text-4xl font-bold tracking-tight text-ivory">
            Which system do you need?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Choose the property, then the job. The result stays inside what Active Link actually installs and
            repairs, and WhatsApp opens with the details filled in.
          </p>
          <p className="mt-6 text-sm font-medium text-ivory">
            Step {Math.min(step, 2)} of 2
            <span className="text-mist"> · nothing is saved on this site</span>
          </p>
        </div>

        <div aria-live="polite">
          {step === 1 ? (
            <div>
              <h3 className="font-display text-xl font-semibold text-ivory">What kind of property is it?</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {properties.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProperty(item.id)}
                    className="rounded-2xl border border-line bg-ink px-4 py-4 text-left transition hover:border-amber hover:bg-ink-2"
                  >
                    <span className="block font-display text-lg font-bold text-ivory">{item.title}</span>
                    <span className="mt-1 block text-sm text-mist">{item.detail}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 2 && property ? (
            <div>
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex items-center gap-2 text-sm font-medium text-mist hover:text-ivory"
              >
                <ArrowLeft className="size-4" />
                {propertyLabel(property)}
              </button>
              <h3 className="mt-3 font-display text-xl font-semibold text-ivory">What do you need most?</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {needs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNeedId(item.id)}
                    className="rounded-2xl border border-line bg-ink px-4 py-4 text-left transition hover:border-amber hover:bg-ink-2"
                  >
                    <span className="block font-display text-lg font-bold text-ivory">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 3 && property && need ? (
            <div className="rounded-3xl border border-amber/40 bg-ink p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Suggested starting point</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ivory">{need.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-mist">{need.blurb}</p>
              <p className="mt-3 text-sm text-mist">
                For {propertyLabel(property).toLowerCase()}. The team still looks at the property before choosing
                equipment.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={whatsappHref(message)}>
                    <WhatsAppIcon className="size-4" />
                    Continue on WhatsApp
                    <ArrowUpRight />
                  </a>
                </Button>
                <Button variant="outline" onClick={resetNeed}>
                  Change the job
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
