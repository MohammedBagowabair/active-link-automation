import {
  areas,
  audiences,
  facebookUrl,
  mapsUrl,
  partners,
  reviews,
} from "../data.ts";

export function Audiences() {
  return (
    <section className="section" id="who" aria-labelledby="who-title">
      <div className="wrap">
        <h2 id="who-title">Who we serve</h2>
        <p className="sub">
          Residential, commercial, industrial, and agricultural and remote sites
          around Nilai.
        </p>
        <div className="audience-list">
          {audiences.map((item) => (
            <article className="audience" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <h2 id="process-title">How a job starts</h2>
        <p className="sub">
          Three steps you can do today. No visit time is promised on this page.
        </p>
        <ol className="steps">
          <li>
            <h3>Name the site and the system</h3>
            <p>
              Home, shop, factory, or farm, and which of the eight services.
              Build your system above, or say it on the call.
            </p>
          </li>
          <li>
            <h3>Reach the team during opening hours</h3>
            <p>
              Call or WhatsApp +60 16-666 0106, or email activelink0724@gmail.com.
              Monday to Friday 9AM–6PM. Saturday 9AM–5PM. Sunday the workshop is
              closed.
            </p>
          </li>
          <li>
            <h3>Coverage from Bandar Baru Nilai</h3>
            <p>
              The team works from Putra Point and covers Nilai, Seremban, Negeri
              Sembilan, Selangor, and surrounding areas.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="section" id="partners" aria-labelledby="partners-title">
      <div className="wrap">
        <h2 id="partners-title">Partner badges</h2>
        <p className="sub">Names as published. No logos are redrawn here.</p>
        <ul className="seals">
          {partners.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <svg className="stars" viewBox="0 0 120 24" width="120" height="24" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <path
          key={index}
          fill="#0058A8"
          transform={`translate(${index * 24} 0)`}
          d="M12 2.2 14.7 8l6.3.7-4.7 4.3 1.3 6.2L12 16.2 6.4 19.2 7.7 13 3 8.7 9.3 8Z"
        />
      ))}
    </svg>
  );
}

export function Reviews() {
  return (
    <section className="section band" id="reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <h2 id="reviews-title">Google reviews</h2>
        <div className="plate review-plate">
          <p className="rating">
            <Stars />
            <span className="rating-num">5.0</span>
            <span>1,070+ Google reviews</span>
          </p>
          <div className="quotes">
            {reviews.map((quote) => (
              <blockquote key={quote}>
                <p>{quote}</p>
                <footer>Google review</footer>
              </blockquote>
            ))}
          </div>
          <div className="link-row">
            <a className="btn btn-line" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Active Link on Google Maps
            </a>
            <a
              className="btn btn-line"
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Active Link on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Areas() {
  return (
    <section className="section" id="areas" aria-labelledby="areas-title">
      <div className="wrap">
        <h2 id="areas-title">Service area</h2>
        <p className="sub">
          Based in Bandar Baru Nilai. Serving Nilai, Seremban, Negeri Sembilan,
          Selangor, and surrounding areas.
        </p>
        <ul className="areas">
          {areas.map((area) => (
            <li key={area.name}>
              <strong>{area.name}</strong>
              <span>{area.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
