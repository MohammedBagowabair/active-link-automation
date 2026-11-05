import { serviceCatalog } from "../data.ts";

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <h2 id="services-title">Systems we install and repair</h2>
        <p className="sub">
          Eight lines of work from one workshop in Bandar Baru Nilai. The same
          team handles security, automation, and electrical.
        </p>
        <div className="service-list">
          {serviceCatalog.map((service) => (
            <article className="service-row" key={service.id} id={`service-${service.id}`}>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
