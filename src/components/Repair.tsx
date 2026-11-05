import { useState } from "react"
import { repairIssues, whatsappHref } from "@/lib/site"

const notes: Record<(typeof repairIssues)[number], string> = {
  "CCTV offline": "The team troubleshoots CCTV that has gone offline.",
  "No recording": "The team troubleshoots systems that are not recording.",
  "Camera not displaying": "The team troubleshoots cameras that are not displaying.",
  "Poor image": "The team troubleshoots poor image quality.",
  "Night vision problems": "The team troubleshoots night vision problems.",
  "Network connection issues": "The team troubleshoots network connection issues.",
  "Faulty cameras": "The team troubleshoots faulty cameras and can replace them.",
  "NVR/DVR problems": "The team troubleshoots NVR and DVR problems.",
  "Camera replacement": "Camera replacement is part of the repair work.",
  "System upgrades": "System upgrades are part of the repair work.",
}

export function Repair() {
  const [symptom, setSymptom] = useState<(typeof repairIssues)[number] | null>(null)

  return (
    <section id="repair" className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20" aria-labelledby="repair-title">
      <h2 id="repair-title" className="max-w-md text-3xl font-semibold tracking-tight md:text-4xl">
        What is the camera doing?
      </h2>
      <p className="mt-2 text-sm text-mist">Tap a symptom.</p>
      <div className="mt-5 flex flex-wrap gap-2" role="listbox" aria-label="CCTV symptoms">
        {repairIssues.map((issue) => {
          const on = symptom === issue
          return (
            <button
              key={issue}
              type="button"
              role="option"
              aria-selected={on}
              className={`press rounded-full px-3 py-2 text-sm ${on ? "bg-ink text-white" : "bg-white text-ink"}`}
              onClick={() => setSymptom(issue)}
            >
              {issue}
            </button>
          )
        })}
      </div>
      <div className="mt-4 min-h-24" aria-live="polite">
        {symptom ? (
          <div className="pick-in max-w-lg rounded-2xl bg-white p-5">
            <p className="text-base">{notes[symptom]}</p>
            <a
              className="mt-4 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white"
              href={whatsappHref(
                `Hello Active Link Automation & Electrical, I need help with a CCTV issue: ${symptom}.`,
              )}
            >
              Get it fixed
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
