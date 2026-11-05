import { WhatsAppIcon } from "@/components/Icons"
import { whatsappHref } from "@/lib/site"

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref()}
      className="whatsapp-fab btn-amber fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-amber px-4 py-3 text-sm font-semibold text-inktext shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:bg-amber-2 md:bottom-6 md:right-6"
    >
      <WhatsAppIcon className="size-5" />
      WhatsApp
    </a>
  )
}
