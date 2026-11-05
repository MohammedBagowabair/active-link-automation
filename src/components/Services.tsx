import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { serviceFilters, services, whatsappHref, type Service, type ServiceFilter } from "@/lib/site"
import { cn } from "@/lib/utils"

function cardsFor(filter: ServiceFilter) {
  if (filter === "All") return services
  return services.filter((service) => service.category === filter)
}

function ServiceCard({ service, featured }: { service: Service; featured: boolean }) {
  const Icon = service.icon
  const big = featured && Boolean(service.image) && service.id === "cctv"
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-amber/70",
        big && "relative min-h-[26rem]",
      )}
    >
      {service.image ? (
        <div className={cn(big ? "absolute inset-0" : "relative aspect-[16/10] overflow-hidden")}>
          <img
            src={service.image}
            alt={service.imageAlt ?? ""}
            width={service.width}
            height={service.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          {big ? <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/15" /> : null}
        </div>
      ) : null}
      <div className={cn("flex flex-1 flex-col p-6", big && "relative z-10 mt-auto")}>
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-amber/12 text-amber ring-1 ring-amber/30">
            <Icon className="size-5" />
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mist">{service.category}</span>
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight text-ivory">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist md:text-base">{service.summary}</p>
        <a
          href={whatsappHref(
            `Hello Active Link Automation & Electrical, I would like to ask about ${service.title}.`,
          )}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber"
        >
          Ask on WhatsApp
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="services-title">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">01 — Services</p>
        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 id="services-title" className="max-w-xl font-display text-4xl font-bold tracking-tight text-ivory md:text-5xl">
            Security, automation and electrical, in one place.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-mist">
            One team handles the cameras, the gates, the access and the electrical work. Filter by the kind of job.
          </p>
        </div>
      </Reveal>

      <Tabs defaultValue="All" className="mt-10">
        <TabsList aria-label="Filter services">
          {serviceFilters.map((filter) => (
            <TabsTrigger key={filter} value={filter}>
              {filter}
            </TabsTrigger>
          ))}
        </TabsList>
        {serviceFilters.map((filter) => {
          const items = cardsFor(filter)
          const featured = filter === "All"
          return (
            <TabsContent key={filter} value={filter}>
              <div
                className={cn(
                  "grid gap-4",
                  featured ? "md:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
                )}
              >
                {items.map((service, index) => (
                  <Reveal
                    key={service.id}
                    delay={Math.min(index, 5) * 60}
                    className={cn(
                      "h-full",
                      featured && service.id === "cctv" && "md:col-span-2 lg:row-span-2",
                    )}
                  >
                    <ServiceCard service={service} featured={featured} />
                  </Reveal>
                ))}
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </section>
  )
}
