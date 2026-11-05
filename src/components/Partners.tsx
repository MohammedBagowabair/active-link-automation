import { partners } from "@/lib/site"

export function Partners() {
  return (
    <section id="partners" className="pt-12 md:px-8 md:pt-20" aria-labelledby="partners-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Brand partnerships</p>
        <h2 id="partners-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
          Names the trade already knows.
        </h2>
        <p className="mt-2 max-w-xl text-sm text-mist">
          Hikvision HikTech Star Winner, Dahua KIP Partner, CynicsXtra and Tiandy Master Dealer.
        </p>
      </div>
      <div className="rail-fade mt-4 lg:hidden">
        <ul className="rail">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} name={partner.name} detail={partner.detail} />
          ))}
        </ul>
      </div>
      <ul className="mx-auto mt-6 hidden max-w-6xl gap-3 lg:grid lg:grid-cols-4">
        {partners.map((partner) => (
          <PartnerCard key={partner.name} name={partner.name} detail={partner.detail} />
        ))}
      </ul>
    </section>
  )
}

function PartnerCard({ name, detail }: { name: string; detail: string }) {
  return (
    <li className="rounded-[1.4rem] border border-line bg-panel p-5">
      {name === detail ? (
        <p className="font-display text-2xl font-bold">{name}</p>
      ) : (
        <>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-amber">{name}</p>
          <p className="mt-2 font-display text-2xl font-bold leading-tight">{detail}</p>
        </>
      )}
    </li>
  )
}
