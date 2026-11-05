import { useState, type FormEvent } from "react";
import {
  addressLines,
  email,
  facebookUrl,
  faqs,
  instagramUrl,
  mapEmbed,
  mapsUrl,
  osmUrl,
  phoneDisplay,
  phoneTel,
  quoteMessage,
  serviceCatalog,
  sites,
  symptomLabel,
  whatsappUrl,
} from "../data.ts";
import { useQuote } from "../quote-state.ts";

export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <h2 id="faq-title">Questions</h2>
        <div className="faq">
          {faqs.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const quote = useQuote();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [readyUrl, setReadyUrl] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      next.name = "Enter your name so the team knows who is writing.";
    }
    if (phone.replace(/\D/g, "").length < 8) {
      next.phone = "Enter a phone number with at least 8 digits.";
    }
    setErrors(next);
    if (next.name) {
      document.getElementById("quote-name")?.focus();
      return;
    }
    if (next.phone) {
      document.getElementById("quote-phone")?.focus();
      return;
    }
    const text = quoteMessage({
      name,
      phone,
      site: quote.site,
      services: quote.services,
      symptom: quote.symptom,
      notes,
    });
    const url = `${whatsappUrl}?text=${encodeURIComponent(text)}`;
    setReadyUrl(url);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (opened) opened.opener = null;
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <h2 id="contact-title">Ask for a quote</h2>
          <p className="sub">
            The message is composed in this browser and opens in WhatsApp. Nothing
            on this form is sent to a website server.
          </p>
          <form className="plate form" onSubmit={onSubmit} noValidate>
            {errors.name || errors.phone ? (
              <div className="form-alert" role="alert">
                {errors.name ? <p>{errors.name}</p> : null}
                {errors.phone ? <p>{errors.phone}</p> : null}
              </div>
            ) : null}
            <label htmlFor="quote-name">
              Name
              <input
                id="quote-name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
            </label>
            {errors.name ? (
              <p id="name-error" className="field-error">
                {errors.name}
              </p>
            ) : null}
            <label htmlFor="quote-phone">
              Phone
              <input
                id="quote-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+60"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            </label>
            {errors.phone ? (
              <p id="phone-error" className="field-error">
                {errors.phone}
              </p>
            ) : null}
            <fieldset>
              <legend>Site</legend>
              <div className="choice-row">
                {sites.map((item) => (
                  <label key={item.id} className="choice">
                    <input
                      type="radio"
                      name="site"
                      value={item.id}
                      checked={quote.site === item.id}
                      onChange={() => quote.setSite(item.id)}
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Systems</legend>
              <div className="choice-grid">
                {serviceCatalog.map((service) => (
                  <label key={service.id} className="choice">
                    <input
                      type="checkbox"
                      name="services"
                      value={service.id}
                      checked={quote.services.includes(service.id)}
                      onChange={() => quote.toggleService(service.id)}
                    />
                    {service.name}
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="symptom-line">
              CCTV symptom:{" "}
              {quote.symptom ? symptomLabel(quote.symptom) : "none selected"}
            </p>
            <label htmlFor="quote-notes">
              Note
              <textarea
                id="quote-notes"
                name="notes"
                rows={4}
                maxLength={500}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
              />
            </label>
            <p className="char-count">{notes.length}/500</p>
            <button className="btn btn-primary" type="submit">
              Open WhatsApp with this quote
            </button>
            <div className="form-status" role="status">
              {readyUrl ? (
                <>
                  <p>
                    Your message is ready in WhatsApp. If a window did not open,
                    use the link.
                  </p>
                  <a href={readyUrl} target="_blank" rel="noopener noreferrer">
                    Open the WhatsApp message
                  </a>
                </>
              ) : (
                <p>Tick what you need, then send. You can still edit it in WhatsApp.</p>
              )}
            </div>
          </form>
        </div>
        <aside className="details" aria-label="Workshop details">
          <h3>Workshop</h3>
          <address>
            {addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <h3>Hours</h3>
          <ul className="hours">
            <li>
              <span>Monday–Friday</span>
              <span>9AM–6PM</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>9AM–5PM</span>
            </li>
            <li>
              <span>Sunday</span>
              <span className="closed">Closed</span>
            </li>
          </ul>
          <h3>Payments</h3>
          <p>Cash, debit and credit cards, QR Pay, and IBG.</p>
          <h3>Talk to the team</h3>
          <ul className="contact-links">
            <li>
              <a href={`tel:${phoneTel}`}>Call {phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp {phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
          <div className="map-frame">
            <iframe
              title="Map of Active Link Automation & Electrical at Putra Point, Bandar Baru Nilai"
              src={mapEmbed}
              loading="lazy"
            />
          </div>
          <p className="map-links">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>
            <a href={osmUrl} target="_blank" rel="noopener noreferrer">
              OpenStreetMap
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="brand-name">Active Link</p>
          <p>Automation & Electrical. Established 2014. Bandar Baru Nilai.</p>
        </div>
        <nav aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#build">Build your system</a>
          <a href="#cctv">CCTV</a>
          <a href="#electrical">Electrical</a>
          <a href="#who">Who we serve</a>
          <a href="#process">How a job starts</a>
          <a href="#partners">Partners</a>
          <a href="#reviews">Reviews</a>
          <a href="#areas">Service area</a>
          <a href="#faq">Questions</a>
          <a href="#contact">Quote</a>
        </nav>
        <div>
          <p>
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>© 2026 Active Link Automation & Electrical</p>
        </div>
      </div>
    </footer>
  );
}
