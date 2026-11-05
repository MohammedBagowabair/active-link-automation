import { asset, repairIssues, whatsappHref } from "@/lib/site"

export function Repair() {
  return (
    <section id="repair" className="px-4 pt-12 md:px-8 md:pt-20" aria-labelledby="repair-title">
      <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-2">
        <img
          src={asset("images/hero.jpg")}
          alt="A wall of outdoor CCTV cameras"
          width={2000}
          height={1345}
          className="h-56 w-full rounded-[1.5rem] object-cover md:h-80"
        />
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">CCTV repair</p>
          <h2 id="repair-title" className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
            When the cameras stop.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Tap a fault. WhatsApp opens with that issue written in.
          </p>
        </div>
      </div>
      <div className="rail-fade mx-auto mt-4 max-w-6xl">
        <ul className="rail" aria-label="CCTV faults">
          {repairIssues.map((issue) => (
            <li key={issue} className="!flex-[0_0_auto]">
              <a
                href={whatsappHref(
                  `Hello Active Link Automation & Electrical, I need help with a CCTV issue: ${issue}.`,
                )}
                aria-label={`${issue}. Enquire on WhatsApp`}
                className="press inline-flex rounded-full border border-line bg-panel px-4 py-2 text-sm"
              >
                {issue}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
