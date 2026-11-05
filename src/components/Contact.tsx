import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons"
import { useQuote } from "@/components/QuoteContext"
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
  whatsappHref,
} from "@/lib/site"

export function Contact() {
  const status = getBusinessStatus()
  const { openQuote } = useQuote()

  return (
    <section id="contact" className="px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Visit</p>
          <h2 id="contact-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Putra Point, Bandar Baru Nilai.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Quotes open WhatsApp on your phone. Nothing is sent to a server.
          </p>
          <button
            type="button"
            className="press mt-5 h-12 rounded-full bg-amber px-5 text-sm font-bold text-inktext"
            onClick={() => openQuote()}
          >
            Open the quote sheet
          </button>
          <address className="mt-6 text-sm not-italic leading-relaxed text-ivory">
            {ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-amber" href={`tel:${PHONE_E164}`}>
                <Phone className="size-4 text-amber" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-amber" href={whatsappHref()}>
                <WhatsAppIcon className="size-4 text-amber" />
                WhatsApp
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 break-all hover:text-amber" href={`mailto:${EMAIL}`}>
                <Mail className="size-4 shrink-0 text-amber" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-amber" href={DIRECTIONS_LINK}>
                <MapPin className="size-4 text-amber" />
                Directions
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href={FACEBOOK}
              className="grid size-11 place-items-center rounded-full border border-line"
              aria-label="Active Link on Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={INSTAGRAM}
              className="grid size-11 place-items-center rounded-full border border-line"
              aria-label="Active Link on Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[1.4rem] border border-line bg-panel p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                <Clock className="size-4 text-amber" />
                Hours
              </h3>
              <p className={`rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${status.open ? "bg-ink text-white" : "bg-white text-ink"}`}>
                {status.label}
              </p>
            </div>
            <dl className="mt-3 text-sm">
              {hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4 border-b border-line py-2">
                  <dt className="text-mist">{row.days}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-3 flex flex-wrap gap-2">
              {payments.map((method) => (
                <li key={method} className="rounded-full border border-line px-3 py-1 text-xs">
                  {method}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[1.4rem] border border-line">
            <iframe
              title="Map of Active Link Automation & Electrical at Putra Point, Bandar Baru Nilai"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-56 w-full border-0 md:h-72"
            />
            <p className="sr-only">{ADDRESS_ONE_LINE}. Coordinates 2.814138, 101.796191.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
