import { useEffect, useId, useRef, useState } from "react";
import { phoneDisplay, phoneTel } from "../data.ts";
import { IconMark, IconPhone } from "./Icons.tsx";

const links = [
  { href: "#services", label: "Services" },
  { href: "#build", label: "Build" },
  { href: "#cctv", label: "CCTV" },
  { href: "#electrical", label: "Electrical" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = [...panel.querySelectorAll<HTMLElement>("a")];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panel?.querySelector<HTMLElement>("a")?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1100px)");
    const close = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);

  return (
    <header className={stuck ? "topbar is-stuck" : "topbar"} id="top">
      <div className="topbar-inner">
        <a className="brand" href="#top">
          <IconMark className="brand-mark" />
          <span>
            <span className="brand-name">Active Link</span>
            <span className="brand-sub">Automation & Electrical</span>
          </span>
        </a>
        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          ref={panelRef}
          id={menuId}
          className={open ? "nav-panel open" : "nav-panel"}
          aria-label="Sections"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary top-call" href={`tel:${phoneTel}`}>
          <IconPhone />
          <span>{phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
