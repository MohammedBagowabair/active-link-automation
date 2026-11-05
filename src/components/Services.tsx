import { useState } from "react"
import { useQuote } from "@/components/QuoteContext"
import { electricalTasks, services } from "@/lib/site"

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null)
  const { openQuote } = useQuote()

  return (
    <section id="services" className="mx-auto max-w-5xl px-5 py-6 md:px-8 md:py-10" aria-labelledby="services-title">
      <h2 id="services-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
        Services
      </h2>
      <p className="mt-2 max-w-md text-sm text-mist">Tap a line to open it.</p>
      <div className="mt-4 border-t border-line">
        {services.map((service) => {
          const open = openId === service.id
          return (
            <div key={service.id} className="border-b border-line">
              <button
                type="button"
                className="press flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : service.id)}
              >
                <span>
                  <span className="block text-lg font-medium">{service.title}</span>
                  <span className="text-xs text-mist">{service.category}</span>
                </span>
                <span aria-hidden="true" className="text-xl text-mist">
                  {open ? "–" : "+"}
                </span>
              </button>
              {open ? (
                <div className="pick-in pb-4">
                  <p className="max-w-lg text-sm leading-relaxed text-mist">{service.summary}</p>
                  {service.id === "electrical" ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {electricalTasks.map((task) => (
                        <li key={task} className="rounded-full bg-white px-3 py-1 text-xs">
                          {task}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <button
                    type="button"
                    className="mt-4 text-sm font-semibold"
                    onClick={() => openQuote({ service: service.title })}
                  >
                    Quote this
                  </button>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}
