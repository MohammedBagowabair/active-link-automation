import { createContext, useContext } from "react";
import type { ServiceId, SiteId } from "./data.ts";

export type Draft = {
  site: SiteId;
  services: ServiceId[];
  symptom: string;
};

export type QuoteValue = Draft & {
  setSite: (site: SiteId) => void;
  toggleService: (id: ServiceId) => void;
  setSymptom: (id: string) => void;
};

export const QuoteContext = createContext<QuoteValue | null>(null);

export function useQuote() {
  const value = useContext(QuoteContext);
  if (!value) throw new Error("useQuote must be used within QuoteProvider");
  return value;
}
