import { serviceCatalog, serviceName, sites, type SiteId } from "../data.ts";
import { useQuote } from "../quote-state.ts";

export function Builder() {
  const quote = useQuote();
  const site = sites.find((item) => item.id === quote.site) ?? sites[0];
  const activeNames = serviceCatalog
    .filter((item) => quote.services.includes(item.id))
    .map((item) => item.name);

  return (
    <section className="section band" id="build" aria-labelledby="build-title">
      <div className="wrap">
        <h2 id="build-title">Build your system</h2>
        <p className="sub">
          Choose the site. A starting set loads from the work this team actually
          does. Nothing here is a price. The quote form uses the same ticks.
        </p>
        <div className="plate">
          <span className="corners" aria-hidden="true" />
          <div className="site-switch" role="group" aria-label="Type of site">
            {sites.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={quote.site === item.id}
                onClick={() => quote.setSite(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="blurb">{site.blurb}</p>
          <div className="builder-grid">
            <figure className="drawing-frame">
              <Scene site={quote.site} active={quote.services} />
              <figcaption>{site.drawing}</figcaption>
            </figure>
            <div className="toggles" role="group" aria-label="Systems to include">
              {serviceCatalog.map((service) => {
                const on = quote.services.includes(service.id);
                return (
                  <button
                    key={service.id}
                    type="button"
                    className="sys-toggle"
                    aria-pressed={on}
                    onClick={() => quote.toggleService(service.id)}
                  >
                    <span>{service.name}</span>
                    <span className="flag">{on ? "On" : "Off"}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="visually-hidden" aria-live="polite">
            {site.label}. {activeNames.length > 0 ? activeNames.join(", ") : "No systems ticked."}
          </p>
          <a className="btn btn-primary builder-next" href="#contact">
            Continue in the quote form
          </a>
        </div>
      </div>
    </section>
  );
}

function Scene({ site, active }: { site: SiteId; active: readonly string[] }) {
  return (
    <svg className="drawing" viewBox="0 0 420 250" aria-hidden="true">
      <g className="draw-lines" key={site}>
        {site === "home" && <HomeArt />}
        {site === "shop" && <ShopArt />}
        {site === "factory" && <FactoryArt />}
        {site === "farm" && <FarmArt />}
      </g>
      {["cctv", "alarms", "access", "autogate", "barrier", "electrical"].map((id, index) => (
        <circle
          key={id}
          cx={36 + index * 64}
          cy={228}
          r={active.includes(id) ? 5 : 3}
          className={active.includes(id) ? "node on" : "node"}
        >
          <title>{serviceName(id)}</title>
        </circle>
      ))}
    </svg>
  );
}

function HomeArt() {
  return (
    <>
      <path d="M70 150 L210 58 L350 150" />
      <path d="M102 150 V214 H318 V150" />
      <path d="M188 214 V164 H232 V214" />
      <path d="M124 168 H164 V198 H124 Z" />
      <path d="M48 214 H372" />
    </>
  );
}

function ShopArt() {
  return (
    <>
      <path d="M78 118 H342 V214 H78 Z" />
      <path d="M64 118 H356 L342 86 H78 Z" />
      <path d="M118 214 V156 H176 V214" />
      <path d="M214 164 H312 V198 H214 Z" />
      <path d="M48 214 H372" />
    </>
  );
}

function FactoryArt() {
  return (
    <>
      <path d="M40 214 V150 H120 L150 112 L180 150 H230 L260 112 L290 150 H360 V214 Z" />
      <path d="M70 214 V176 H110 V214" />
      <path d="M48 188 H150" />
      <path d="M150 188 H250" />
      <path d="M250 176 H330" />
      <circle cx="330" cy="176" r="6" />
    </>
  );
}

function FarmArt() {
  return (
    <>
      <path d="M36 176 H384" />
      <path d="M92 176 V120 H250 V176" />
      <path d="M92 120 L171 78 L250 120" />
      <path d="M300 176 V70" />
      <path d="M300 86 H336" />
      <circle cx="336" cy="86" r="8" />
      <path d="M150 176 V140 H196 V176" />
    </>
  );
}
