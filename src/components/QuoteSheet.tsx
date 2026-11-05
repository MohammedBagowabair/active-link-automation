import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import { WhatsAppIcon } from "@/components/Icons"
import { useQuote } from "@/components/QuoteContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PHONE_DISPLAY, services, whatsappHref } from "@/lib/site"

const properties = [
  "Residential",
  "Commercial",
  "Industrial",
  "Agricultural or remote site",
  "Not sure yet",
]

export function QuoteSheet() {
  const { open, closeQuote } = useQuote()
  if (!open) return null
  return <SheetBody onClose={closeQuote} />
}

function SheetBody({ onClose }: { onClose: () => void }) {
  const { property, service, openQuote } = useQuote()
  const [step, setStep] = useState(0)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [details, setDetails] = useState("")
  const [error, setError] = useState("")
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    document.body.style.overflow = "hidden"
    const frame = window.requestAnimationFrame(() => panelRef.current?.querySelector("button")?.focus())
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      previous?.focus()
    }
  }, [onClose])

  const closeQuote = onClose

  const summary = services.find((item) => item.title === service)?.summary

  const send = () => {
    if (!name.trim() || !phone.trim()) {
      setError("Add your name and phone so the team can reply.")
      setStep(2)
      return
    }
    const lines = [
      "Hello Active Link Automation & Electrical, I would like a quote.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Property: ${property}`,
      `Service: ${service}`,
      details.trim() ? `Details: ${details.trim()}` : "",
    ].filter((line) => line !== "")
    const href = whatsappHref(lines.join("\n"))
    const popup = window.open(href, "_blank", "noopener,noreferrer")
    if (!popup) window.location.href = href
  }

  return (
    <div className="sheet-root" onClick={closeQuote}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="sheet-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-ivory/20" aria-hidden="true" />
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber">
              Quote · {step + 1} / 4
            </p>
            <h2 id={titleId} className="mt-1 font-display text-2xl font-bold tracking-tight">
              {step === 0 && "What kind of property?"}
              {step === 1 && "Which service?"}
              {step === 2 && "How should they reach you?"}
              {step === 3 && "Ready to send"}
            </h2>
          </div>
          <button type="button" className="rounded-full px-3 py-1 text-sm text-mist" onClick={closeQuote}>
            Close
          </button>
        </div>

        <div className="mt-4">
          {step === 0 ? (
            <div className="grid gap-2">
              {properties.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`press rounded-2xl border px-4 py-3 text-left ${
                    property === item ? "border-amber bg-amber/10" : "border-line bg-ink"
                  }`}
                  onClick={() => openQuote({ property: item })}
                >
                  <span className="font-display text-lg font-bold">{item}</span>
                </button>
              ))}
            </div>
          ) : null}

          {step === 1 ? (
            <div className="grid gap-2">
              {services.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`press rounded-2xl border px-4 py-3 text-left ${
                    service === item.title ? "border-amber bg-amber/10" : "border-line bg-ink"
                  }`}
                  onClick={() => openQuote({ service: item.title })}
                >
                  <span className="block font-display text-lg font-bold">{item.title}</span>
                  <span className="mt-1 block text-sm text-mist">{item.summary}</span>
                </button>
              ))}
              <button
                type="button"
                className={`press rounded-2xl border px-4 py-3 text-left font-display text-lg font-bold ${
                  service === "Not sure yet" ? "border-amber bg-amber/10" : "border-line bg-ink"
                }`}
                onClick={() => openQuote({ service: "Not sure yet" })}
              >
                Not sure yet
              </button>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="sheet-name">Name</Label>
                <Input id="sheet-name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sheet-phone">Phone</Label>
                <Input
                  id="sheet-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sheet-details">What should they know?</Label>
                <Textarea
                  id="sheet-details"
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  placeholder="For example: four cameras offline at a shop in Nilai."
                />
              </div>
              <p className="text-sm text-mist">The next step opens WhatsApp with your message.</p>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="rounded-2xl border border-line bg-ink p-4 text-sm leading-relaxed">
              <p className="text-mist">Property</p>
              <p className="font-semibold">{property}</p>
              <p className="mt-3 text-mist">Service</p>
              <p className="font-semibold">{service}</p>
              {summary ? <p className="mt-2 text-mist">{summary}</p> : null}
              <p className="mt-3 text-mist">Contact</p>
              <p className="font-semibold">
                {name || "Name missing"} · {phone || "Phone missing"}
              </p>
              {details.trim() ? <p className="mt-2">{details.trim()}</p> : null}
              {error ? (
                <p role="alert" className="mt-3 font-medium text-amber">
                  {error}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="mt-5 flex gap-2">
          {step > 0 ? (
            <Button variant="outline" onClick={() => setStep((value) => value - 1)}>
              <ArrowLeft />
              Back
            </Button>
          ) : null}
          {step < 3 ? (
            <Button className="flex-1" onClick={() => setStep((value) => value + 1)}>
              Continue
              <ArrowRight />
            </Button>
          ) : (
            <Button className="flex-1" onClick={send}>
              <WhatsAppIcon className="size-4" />
              Send via WhatsApp
            </Button>
          )}
        </div>
        <p className="mt-3 text-center text-xs text-mist">Or call {PHONE_DISPLAY}</p>
      </div>
    </div>
  )
}
