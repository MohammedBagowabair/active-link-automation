import { useEffect, useState } from "react"
import { Logo } from "@/components/Logo"
import { useQuote } from "@/components/QuoteContext"
import { getBusinessStatus, PHONE_E164, whatsappHref } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { href: "#selector", id: "selector", label: "Build" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#repair", id: "repair", label: "Repair" },
  { href: "#reviews", id: "reviews", label: "Reviews" },
  { href: "#contact", id: "contact", label: "Visit" },
]

function reduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

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
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.15, 0.4] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={cn("sticky top-0 z-30 border-b", scrolled ? "border-line bg-white" : "border-transparent bg-paper")}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-5 md:h-16 md:px-8">
        <a href="#top" aria-label="Active Link Automation & Electrical, home">
          <Logo compact />
        </a>
        <p className="text-xs text-mist md:hidden">{status.label}</p>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={current === link.id ? "location" : undefined}
              className={cn("text-sm text-mist hover:text-ink", current === link.id && "text-ink")}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href={`tel:${PHONE_E164}`} className="rounded-full px-3 py-2 text-sm">
            Call
          </a>
          <a href={whatsappHref()} className="rounded-full px-3 py-2 text-sm">
            WhatsApp
          </a>
          <button
            type="button"
            className="press h-10 rounded-full bg-ink px-4 text-sm font-semibold text-white"
            onClick={() => openQuote()}
            onPointerMove={(event) => {
              if (reduced()) return
              const rect = event.currentTarget.getBoundingClientRect()
              const x = event.clientX - (rect.left + rect.width / 2)
              const y = event.clientY - (rect.top + rect.height / 2)
              event.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.transform = ""
            }}
          >
            Quote
          </button>
        </div>
      </div>
    </header>
  )
}
