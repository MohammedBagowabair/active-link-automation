import { phoneTel, whatsappUrl } from "../data.ts";
import { ScopePanel } from "../components/ScopePanel.tsx";
import { IconChat, IconPhone } from "../components/Icons.tsx";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="finder">
        <div className="finder-grid">
          <div className="copy">
            <h1 id="hero-title">
              <span>
                Security<span className="dot">.</span>
              </span>
              <span>
                Automation<span className="dot">.</span>
              </span>
              <span>
                Electrical<span className="dot">.</span>
              </span>
            </h1>
            <p className="lede">One team. Complete solutions.</p>
            <p className="support">
              CCTV, alarms, access, attendance, autogate, barrier gates,
              automation, and electrical. Workshop in Bandar Baru Nilai since 2014.
            </p>
          </div>
          <ScopePanel />
          <div className="controls">
            <a className="btn btn-primary" href={`tel:${phoneTel}`}>
              <IconPhone />
              Call the team
            </a>
            <a className="btn btn-line" href="#build">
              Build a quote
            </a>
            <a
              className="btn btn-line"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconChat />
              WhatsApp
            </a>
          </div>
          <p className="meta">
            <span>2.814138° N</span>
            <span>101.796191° E</span>
            <span>Bandar Baru Nilai</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats" aria-label="At a glance">
      <dl>
        <div>
          <dd>5.0</dd>
          <dt>Google rating</dt>
        </div>
        <div>
          <dd>1,070+</dd>
          <dt>Google reviews</dt>
        </div>
        <div>
          <dd>2014</dd>
          <dt>Established, Nilai</dt>
        </div>
      </dl>
    </section>
  );
}
