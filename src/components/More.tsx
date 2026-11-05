import { useState } from "react"
import { areas, electricalTasks, industries, MAPS_LINK, partners, processSteps } from "@/lib/site"

export function More() {
  const [open, setOpen] = useState(false)
  return (
    <section id="more" className="mx-auto max-w-5xl px-5 py-6 md:px-8" aria-labelledby="more-title">
      <button
        type="button"
        className="press flex w-full items-center justify-between border-t border-line py-5 text-left"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>
          <span id="more-title" className="block text-lg font-medium">
            Areas, process, partners
          </span>
          <span className="text-sm text-mist">The quieter details.</span>
        </span>
        <span aria-hidden="true">{open ? "–" : "+"}</span>
      </button>
      {open ? (
        <div className="pick-in grid gap-8 pb-6">
          <div id="industries">
            <h3 className="text-sm font-medium text-mist">Who they serve</h3>
            <ul className="mt-3 grid gap-3">
              {industries.map((item) => (
                <li key={item.title}>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-mist">
                    {item.who}. {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div id="process">
            <h3 className="text-sm font-medium text-mist">How a job runs</h3>
            <ol className="mt-3 grid gap-3">
              {processSteps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-medium">
                    {index + 1}. {step.title}
                  </p>
                  <p className="text-sm text-mist">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div id="electrical">
            <h3 className="text-sm font-medium text-mist">Electrical work</h3>
            <p className="mt-2 text-sm text-mist">{electricalTasks.join(" · ")}</p>
          </div>
          <div id="partners">
            <h3 className="text-sm font-medium text-mist">Brand partnerships</h3>
            <ul className="mt-3 grid gap-2">
              {partners.map((partner) => (
                <li key={partner.name} className="text-sm">
                  {partner.name === partner.detail ? partner.name : `${partner.name} · ${partner.detail}`}
                </li>
              ))}
            </ul>
          </div>
          <div id="areas">
            <h3 className="text-sm font-medium text-mist">Service area</h3>
            <p className="mt-2 text-sm text-mist">
              Based in Bandar Baru Nilai. Serves Nilai, Seremban, Negeri Sembilan, Selangor and surrounding areas.
            </p>
            <ul className="mt-3 grid gap-1 text-sm">
              {areas.map((area) => (
                <li key={area.name}>
                  {area.name}
                  <span className="text-mist"> — {area.note}</span>
                </li>
              ))}
            </ul>
            <a className="mt-3 inline-block text-sm font-medium" href={MAPS_LINK}>
              Open the Nilai premises
            </a>
          </div>
        </div>
      ) : null}
    </section>
  )
}
