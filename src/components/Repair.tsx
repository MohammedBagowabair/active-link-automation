import { Reveal } from "@/components/Reveal"
import { asset, repairIssues, whatsappHref } from "@/lib/site"

export function Repair() {
  return (
    <section id="repair" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="repair-title">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.8rem] border border-line">
            <img
              src={asset("images/hero.jpg")}
              alt="A wall of outdoor CCTV cameras"
              width={2000}
              height={1345}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">03 — CCTV repair</p>
            <h2 id="repair-title" className="mt-3 font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
              When the cameras stop doing their job.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist md:text-lg">
              Troubleshooting and repair for systems that are already installed. Pick the fault and WhatsApp
              opens with that issue written in.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-2">
            {repairIssues.map((issue) => (
              <li key={issue}>
                <a
                  href={whatsappHref(
                    `Hello Active Link Automation & Electrical, I need help with a CCTV issue: ${issue}.`,
                  )}
                  className="inline-flex rounded-full border border-line bg-panel px-4 py-2 text-sm text-ivory transition hover:border-amber hover:text-amber"
                  aria-label={`${issue}. Enquire on WhatsApp`}
                >
                  {issue}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
