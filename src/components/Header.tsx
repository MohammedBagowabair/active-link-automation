import { Menu, Phone, X } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_E164, whatsappHref } from "@/lib/site"
import { cn } from "@/lib/utils"
import { WhatsAppIcon } from "@/components/Icons"

const links = [
  { href: "#services", id: "services", label: "Services" },
  { href: "#repair", id: "repair", label: "Repair" },
  { href: "#electrical", id: "electrical", label: "Electrical" },
  { href: "#process", id: "process", label: "Process" },
  { href: "#reviews", id: "reviews", label: "Reviews" },
  { href: "#contact", id: "contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [current, setCurrent] = useState("")
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const panelId = useId()

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
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.3, 0.6] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.toggleAttribute("data-menu-open", open)
    document.body.style.overflow = open ? "hidden" : ""
    if (open) firstLinkRef.current?.focus()
    return () => {
      document.body.removeAttribute("data-menu-open")
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled || open ? "border-line bg-ink/95" : "border-transparent bg-ink/80",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="rounded-xl" aria-label="Active Link Automation & Electrical, home">
          <Logo compact />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={current === link.id ? "location" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm text-mist transition-colors hover:text-ivory",
                current === link.id && "text-amber",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={`tel:${PHONE_E164}`}>
              <Phone />
              Call
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={whatsappHref()}>
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </Button>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          className="grid size-11 place-items-center rounded-full border border-line text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <div id={panelId} className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-line bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6" aria-label="Mobile">
            {links.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                onClick={closeMenu}
                className="rounded-2xl px-2 py-3 font-display text-4xl font-bold tracking-tight text-ivory"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button size="lg" asChild>
                <a href={whatsappHref()} onClick={closeMenu}>
                  <WhatsAppIcon className="size-4" />
                  WhatsApp the team
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${PHONE_E164}`} onClick={closeMenu}>
                  <Phone />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
