import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { useQuote } from "@/components/QuoteContext"
import { serviceFilters, services, type Service, type ServiceFilter } from "@/lib/site"
import { cn } from "@/lib/utils"

function Card({
  service,
  tall = false,
  expanded,
  onToggle,
}: {
  service: Service
  tall?: boolean
  expanded: boolean
  onToggle: () => void
}) {
  const { openQuote } = useQuote()
  const Icon = service.icon
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-panel",
        tall && expanded && "lg:min-h-[28rem]",
      )}
    >
      <button type="button" className="press text-left" aria-expanded={expanded} onClick={onToggle}>
        {service.image ? (
          <img
            src={service.image}
            alt={service.imageAlt ?? ""}
            width={service.width}
            height={service.height}
            className={cn("h-36 w-full object-cover", tall && expanded && "lg:h-56")}
          />
        ) : (
          <div className="grid h-24 place-items-center bg-ink">
            <Icon className="size-7 text-amber" />
          </div>
        )}
        <div className="p-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mist">{service.category}</p>
          <h3 className="mt-1 font-display text-xl font-bold">{service.title}</h3>
        </div>
      </button>
      {expanded ? (
        <div className="pick-in px-4 pb-4">
          <p className="text-sm leading-relaxed text-mist">{service.summary}</p>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber"
            onClick={() => openQuote({ service: service.title })}
          >
            Ask about this
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      ) : null}
    </article>
  )
}

export function Services() {
  const [filter, setFilter] = useState<ServiceFilter>("All")
  const [openId, setOpenId] = useState<string | null>(null)
  const items = filter === "All" ? services : services.filter((service) => service.category === filter)

  return (
    <section id="services" className="pt-8 md:px-8 md:pt-16" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-amber">Services</p>
        <h2 id="services-title" className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight md:text-5xl">
          Security, automation and electrical, in one place.
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-mist md:text-base">
          One Nilai team handles cameras, gates, access and the electrical work around them.
        </p>
        <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Filter services">
          {serviceFilters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold",
                filter === item ? "bg-amber text-inktext" : "bg-panel text-mist",
              )}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="rail-fade mt-3 lg:hidden">
        <div className="rail" aria-label="Services">
          {items.map((service) => (
            <Card
              key={service.id}
              service={service}
              expanded={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 hidden max-w-6xl gap-3 lg:grid lg:grid-cols-3">
        {items.map((service) => (
          <div key={service.id} className={service.id === "cctv" && filter === "All" ? "lg:col-span-2 lg:row-span-2" : ""}>
            <Card
              service={service}
              tall={service.id === "cctv" && filter === "All"}
              expanded={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
