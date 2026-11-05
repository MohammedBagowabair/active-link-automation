import { useEffect, useState } from "react"
import { Logo } from "@/components/Logo"
import { useQuote } from "@/components/QuoteContext"
import { Button } from "@/components/ui/button"
import { getBusinessStatus, PHONE_E164, whatsappHref } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/Icons"

const links = [
  { href: "#why", id: "why", label: "Why us" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#selector", id: "selector", label: "Build" },
  { href: "#repair", id: "repair", label: "Repair" },
  { href: "#electrical", id: "electrical", label: "Electrical" },
  { href: "#industries", id: "industries", label: "Who" },
  { href: "#process", id: "process", label: "Process" },
  { href: "#partners", id: "partners", label: "Partners" },
  { href: "#reviews", id: "reviews", label: "Reviews" },
  { href: "#areas", id: "areas", label: "Areas" },
  { href: "#faq", id: "faq", label: "FAQ" },
  { href: "#contact", id: "contact", label: "Visit" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [current, setCurrent] = useState("")
  const status = getBusinessStatus()
  const { openQuote } = useQuote()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setCurrent(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.4] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b transition-colors",
        scrolled ? "border-line bg-ink" : "border-transparent bg-ink/85",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:h-[4.5rem] md:px-8">
        <a href="#top" className="rounded-xl" aria-label="Active Link Automation & Electrical, home">
          <Logo compact />
        </a>
        <p
          className={`rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] md:hidden ${
            status.open ? "bg-amber text-inktext" : "bg-panel text-mist"
          }`}
        >
          {status.label}
        </p>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={`tel:${PHONE_E164}`}>
              <Phone />
              Call
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={whatsappHref()}>
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </Button>
          <Button size="sm" onClick={() => openQuote()}>
            Quote
          </Button>
        </div>
      </div>
      <nav className="border-t border-line/70" aria-label="Sections">
        <div className="mx-auto flex max-w-6xl gap-1.5 overflow-x-auto px-4 py-2 md:flex-wrap md:px-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={current === link.id ? "location" : undefined}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-mist hover:text-ivory",
                current === link.id && "bg-amber text-inktext",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
