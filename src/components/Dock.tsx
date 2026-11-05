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
        className="press grid h-12 place-items-center rounded-full bg-white text-ink shadow-sm"
        aria-label="Call Active Link"
      >
        <Phone className="size-4" />
      </a>
      <button
        type="button"
        className="press h-12 rounded-full bg-ink text-sm font-semibold text-white"
        onClick={() => openQuote()}
      >
        Get a quote
      </button>
      <a
        href={whatsappHref()}
        className="press grid h-12 place-items-center rounded-full bg-white text-ink shadow-sm"
        aria-label="WhatsApp Active Link"
      >
        <WhatsAppIcon className="size-4" />
      </a>
    </nav>
  )
}
