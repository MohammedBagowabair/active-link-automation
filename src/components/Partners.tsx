import { Reveal } from "@/components/Reveal"
import { partners } from "@/lib/site"

export function Partners() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24" aria-labelledby="partners-title">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">07 — Brand partnerships</p>
        <h2 id="partners-title" className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
          Names the trade already knows.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mist">
          Hikvision HikTech Star Winner, Dahua KIP Partner, CynicsXtra and Tiandy Master Dealer.
        </p>
      </Reveal>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <li key={partner.name} className="rounded-[1.4rem] border border-line bg-panel px-5 py-6">
            {partner.name === partner.detail ? (
              <p className="font-display text-2xl font-bold tracking-tight text-ivory">{partner.name}</p>
            ) : (
              <>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber">{partner.name}</p>
                <p className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-ivory">
                  {partner.detail}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
