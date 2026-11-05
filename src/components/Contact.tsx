import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useMemo, useState, type FormEvent } from "react"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ADDRESS_LINES,
  ADDRESS_ONE_LINE,
  DIRECTIONS_LINK,
  EMAIL,
  FACEBOOK,
  getBusinessStatus,
  hours,
  INSTAGRAM,
  MAP_EMBED,
  payments,
  PHONE_DISPLAY,
  PHONE_E164,
  services,
  whatsappHref,
} from "@/lib/site"

const properties = [
  "Residential",
  "Commercial",
  "Industrial",
  "Agricultural or remote site",
  "Not sure yet",
]

const fieldClass =
  "h-12 w-full appearance-none rounded-2xl border border-line bg-ink px-4 text-base text-ivory outline-none focus-visible:border-amber"

export function Contact() {
  const status = useMemo(() => getBusinessStatus(), [])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [property, setProperty] = useState(properties[0] ?? "Residential")
  const [service, setService] = useState(services[0]?.title ?? "CCTV systems")
  const [details, setDetails] = useState("")
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !phone.trim()) {
      setSent(false)
      setError("Add your name and phone so the team can reply.")
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
    setError("")
    setSent(true)
    const href = whatsappHref(lines.join("\n"))
    const popup = window.open(href, "_blank", "noopener,noreferrer")
    if (!popup) window.location.href = href
  }

  return (
    <section id="contact" className="border-t border-line" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">11 — Quote & visit</p>
          <h2 id="contact-title" className="mt-3 font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
            Tell the team about the property.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            The form does not send anything to a server. It opens WhatsApp with your message ready to send.
          </p>

          <form className="mt-8 grid gap-4" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="quote-name">Name</Label>
                <Input
                  id="quote-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  aria-invalid={Boolean(error) && !name.trim()}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quote-phone">Phone</Label>
                <Input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  aria-invalid={Boolean(error) && !phone.trim()}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="quote-property">Property</Label>
                <select
                  id="quote-property"
                  name="property"
                  className={fieldClass}
                  value={property}
                  onChange={(event) => setProperty(event.target.value)}
                >
                  {properties.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quote-service">Service</Label>
                <select
                  id="quote-service"
                  name="service"
                  className={fieldClass}
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                >
                  {services.map((option) => (
                    <option key={option.id} value={option.title}>
                      {option.title}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quote-details">What should they know?</Label>
              <Textarea
                id="quote-details"
                name="details"
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="For example: four cameras offline at a shop in Nilai, or a power trip after rain."
              />
            </div>
            {error ? (
              <p role="alert" className="text-sm font-medium text-amber">
                {error}
              </p>
            ) : null}
            {sent ? (
              <p role="status" className="text-sm text-mist">
                WhatsApp should open in a new tab with your message. If it did not, use the button again or call{" "}
                {PHONE_DISPLAY}.
              </p>
            ) : null}
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <WhatsAppIcon className="size-4" />
              Send via WhatsApp
            </Button>
          </form>
        </div>

        <div className="grid gap-4 content-start">
          <div className="rounded-[1.6rem] border border-line bg-panel p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-bold text-ivory">Visit or call</h3>
              <p
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  status.open ? "bg-amber text-inktext" : "bg-ink text-ivory"
                }`}
              >
                <span className="sr-only">Business status: </span>
                {status.label}
              </p>
            </div>
            <address className="mt-4 text-sm not-italic leading-relaxed text-mist">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block text-ivory">
                  {line}
                </span>
              ))}
            </address>
            <ul className="mt-5 grid gap-3 text-sm">
              <li>
                <a className="inline-flex items-center gap-2 text-ivory hover:text-amber" href={`tel:${PHONE_E164}`}>
                  <Phone className="size-4 text-amber" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-ivory hover:text-amber"
                  href={whatsappHref()}
                >
                  <WhatsAppIcon className="size-4 text-amber" />
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 break-all text-ivory hover:text-amber"
                  href={`mailto:${EMAIL}`}
                >
                  <Mail className="size-4 shrink-0 text-amber" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 text-ivory hover:text-amber" href={DIRECTIONS_LINK}>
                  <MapPin className="size-4 text-amber" />
                  Directions to Putra Point
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a
                href={FACEBOOK}
                className="grid size-11 place-items-center rounded-full border border-line text-ivory hover:border-amber hover:text-amber"
                aria-label="Active Link on Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={INSTAGRAM}
                className="grid size-11 place-items-center rounded-full border border-line text-ivory hover:border-amber hover:text-amber"
                aria-label="Active Link on Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-line bg-panel p-6">
            <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-ivory">
              <Clock className="size-5 text-amber" />
              Hours
            </h3>
            <dl className="mt-4 grid gap-2 text-sm">
              {hours.map((row) => (
                <div key={row.days} className="flex items-baseline justify-between gap-4 border-b border-line py-2">
                  <dt className="text-mist">{row.days}</dt>
                  <dd className="font-medium text-ivory">{row.time}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-mist">Payments</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {payments.map((method) => (
                <li key={method} className="rounded-full border border-line px-3 py-1 text-sm text-ivory">
                  {method}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[1.6rem] border border-line">
            <iframe
              title="Map of Active Link Automation & Electrical at Putra Point, Bandar Baru Nilai"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
            <p className="sr-only">{ADDRESS_ONE_LINE}. Coordinates 2.814138, 101.796191.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
