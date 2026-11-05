import { FacebookIcon, InstagramIcon } from "@/components/Icons"
import { Logo } from "@/components/Logo"
import {
  ADDRESS_ONE_LINE,
  EMAIL,
  FACEBOOK,
  hours,
  INSTAGRAM,
  PHONE_DISPLAY,
  PHONE_E164,
  whatsappHref,
} from "@/lib/site"

const explore = [
  ["Services", "#services"],
  ["System selector", "#selector"],
  ["CCTV repair", "#repair"],
  ["Electrical", "#electrical"],
  ["Who we serve", "#industries"],
  ["Process", "#process"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Security. Automation. Electrical. One team. Complete solutions. Established 2014 in Bandar Baru Nilai.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Explore</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {explore.map(([label, href]) => (
              <li key={href}>
                <a className="text-ivory hover:text-amber" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Contact</h2>
          <ul className="mt-4 grid gap-2 text-sm text-ivory">
            <li>
              <a className="hover:text-amber" href={`tel:${PHONE_E164}`}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a className="hover:text-amber" href={whatsappHref()}>
                WhatsApp
              </a>
            </li>
            <li>
              <a className="break-all hover:text-amber" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li className="text-mist">{ADDRESS_ONE_LINE}</li>
            <li className="flex gap-3 pt-2">
              <a href={FACEBOOK} className="hover:text-amber" aria-label="Facebook" target="_blank" rel="noreferrer">
                <FacebookIcon className="size-5" />
              </a>
              <a href={INSTAGRAM} className="hover:text-amber" aria-label="Instagram" target="_blank" rel="noreferrer">
                <InstagramIcon className="size-5" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Hours</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4 text-ivory">
                <span className="text-mist">{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-5 py-6 text-xs text-mist md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {year} Active Link Automation & Electrical. Nilai, Negeri Sembilan.</p>
        <p>Photography from Unsplash. Coordinates 2.814138, 101.796191.</p>
      </div>
    </footer>
  )
}
