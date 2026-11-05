import { ArrowUpRight, Phone, Star } from "lucide-react"
import { CountUp } from "@/components/CountUp"
import { WhatsAppIcon } from "@/components/Icons"
import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_E164, whatsappHref } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(240,180,41,0.16),transparent_42%),radial-gradient(ellipse_at_80%_80%,rgba(90,150,255,0.1),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(244,239,228,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,239,228,0.05)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-16">
        <div className="hero-copy">
          <p className="rise text-xs font-semibold uppercase tracking-[0.22em] text-amber">
            Bandar Baru Nilai · Established 2014
          </p>
          <h1 id="hero-title" className="hero-title rise mt-5 text-ivory" style={{ animationDelay: "80ms" }}>
            <span className="block">Security.</span>
            <span className="block">Automation.</span>
            <span className="block text-amber">Electrical.</span>
          </h1>
          <p
            className="rise mt-6 max-w-xl font-display text-2xl font-semibold tracking-tight text-ivory md:text-3xl"
            style={{ animationDelay: "140ms" }}
          >
            One team. Complete solutions.
          </p>
          <p className="rise mt-4 max-w-xl text-base leading-relaxed text-mist md:text-lg" style={{ animationDelay: "200ms" }}>
            CCTV, alarms, access control, attendance, autogates, barrier gates, automation and electrical
            work for homes, shops, factories and remote sites across Nilai, Seremban, Negeri Sembilan,
            Selangor and surrounding areas.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "260ms" }}>
            <Button size="lg" asChild>
              <a href={whatsappHref()}>
                <WhatsAppIcon className="size-4" />
                WhatsApp the team
                <ArrowUpRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${PHONE_E164}`}>
                <Phone />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>

        <div className="rise relative" style={{ animationDelay: "180ms" }}>
          <div className="overflow-hidden rounded-[1.8rem] border border-line shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <img
              src="/images/hero.jpg"
              alt="Rows of CCTV cameras mounted across an exterior wall"
              width={2000}
              height={1345}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
          </div>
          <div className="glass relative mt-4 rounded-2xl p-4 sm:absolute sm:bottom-4 sm:left-4 sm:mt-0 sm:max-w-xs">
            <div className="flex items-center gap-1 text-amber" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className="size-4 fill-amber text-amber" />
              ))}
            </div>
            <p className="mt-2 font-display text-3xl font-bold tracking-tight text-ivory">
              <span className="sr-only">Rated </span>
              5.0
              <span className="sr-only"> out of 5 on Google, from 1,070 plus reviews</span>
            </p>
            <p className="text-sm text-mist">Google rating · 1,070+ reviews</p>
          </div>
        </div>
      </div>

      <div className="relative border-y border-line bg-ink/70">
        <dl className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-3">
          <div className="px-5 py-8 md:px-8 sm:border-r sm:border-line">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Google rating</dt>
            <dd className="mt-2 font-display text-5xl font-bold tracking-tight text-ivory">
              <CountUp to={5} decimals={1} />
            </dd>
          </div>
          <div className="border-t border-line px-5 py-8 sm:border-t-0 sm:border-r md:px-8">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Google reviews</dt>
            <dd className="mt-2 font-display text-5xl font-bold tracking-tight text-ivory">
              <CountUp to={1070} suffix="+" />
            </dd>
          </div>
          <div className="border-t border-line px-5 py-8 sm:border-t-0 md:px-8">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Established</dt>
            <dd className="mt-2 font-display text-5xl font-bold tracking-tight text-ivory">
              <CountUp to={2014} from={2000} grouping={false} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
