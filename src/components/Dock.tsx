import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/Icons"
import { useQuote } from "@/components/QuoteContext"
import { PHONE_E164, whatsappHref } from "@/lib/site"

export function Dock() {
  const { openQuote } = useQuote()
  return (
    <nav className="dock md:hidden" aria-label="Quick actions">
      <a
        href={`tel:${PHONE_E164}`}
        className="press grid place-items-center rounded-2xl py-3 text-xs font-semibold text-ivory"
      >
        <Phone className="mb-0.5 size-4 text-amber" />
        Call
      </a>
      <button
        type="button"
        className="press rounded-2xl bg-amber py-3 text-sm font-bold text-inktext"
        onClick={() => openQuote()}
      >
        Get a quote
      </button>
      <a
        href={whatsappHref()}
        className="press grid place-items-center rounded-2xl py-3 text-xs font-semibold text-ivory"
      >
        <WhatsAppIcon className="mb-0.5 size-4 text-amber" />
        WhatsApp
      </a>
    </nav>
  )
}
