import { useMemo, useState, type ReactNode } from "react";
import { sites, type ServiceId, type SiteId } from "./data.ts";
import { QuoteContext, type Draft } from "./quote-state.ts";

function presetFor(site: SiteId): ServiceId[] {
  const match = sites.find((item) => item.id === site);
  return match ? [...match.preset] : [];
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<Draft>({
    site: "home",
    services: presetFor("home"),
    symptom: "",
  });

  const value = useMemo(() => {
    return {
      ...draft,
      setSite: (site: SiteId) => {
        setDraft((current) => ({
          ...current,
          site,
          services: presetFor(site),
        }));
      },
      toggleService: (id: ServiceId) => {
        setDraft((current) => {
          const has = current.services.includes(id);
          const services = has
            ? current.services.filter((item) => item !== id)
            : [...current.services, id];
          const symptom = id === "cctv" && has ? "" : current.symptom;
          return { ...current, services, symptom };
        });
      },
      setSymptom: (id: string) => {
        setDraft((current) => {
          const symptom = current.symptom === id ? "" : id;
          const services =
            symptom && !current.services.includes("cctv")
              ? [...current.services, "cctv" as const]
              : current.services;
          return { ...current, symptom, services };
        });
      },
    };
  }, [draft]);

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}
