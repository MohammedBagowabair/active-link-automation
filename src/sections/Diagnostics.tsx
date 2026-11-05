import { symptoms, symptomLabel, whatsappHref } from "../data.ts";
import { useQuote } from "../quote-state.ts";

export function Diagnostics() {
  const quote = useQuote();
  const current = symptoms.find((item) => item.id === quote.symptom);

  return (
    <section className="section" id="cctv" aria-labelledby="cctv-title">
      <div className="wrap">
        <h2 id="cctv-title">CCTV faults we repair</h2>
        <p className="sub">
          Tap the symptom you are seeing. The note only confirms it is in the
          repair list. It is not a diagnosis from here.
        </p>
        <div className="keys" role="group" aria-label="CCTV symptoms">
          {symptoms.map((item) => (
            <button
              key={item.id}
              type="button"
              className="key"
              aria-pressed={quote.symptom === item.id}
              onClick={() => quote.setSymptom(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="readout" aria-live="polite">
          {current ? (
            <>
              <h3>{current.label}</h3>
              <p>{current.note}</p>
              <div className="link-row">
                <a className="btn btn-primary" href="#contact">
                  Add to the quote
                </a>
                <a
                  className="btn btn-line"
                  href={whatsappHref(
                    `Hello Active Link, I need help with a CCTV system. Symptom: ${symptomLabel(current.id)}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp this symptom
                </a>
              </div>
            </>
          ) : (
            <p>Choose a symptom to see how it sits in the repair list.</p>
          )}
        </div>
      </div>
    </section>
  );
}
