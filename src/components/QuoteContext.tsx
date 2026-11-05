import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"

type Preset = {
  property?: string
  service?: string
}

type QuoteApi = {
  open: boolean
  property: string
  service: string
  openQuote: (preset?: Preset) => void
  closeQuote: () => void
}

const QuoteContext = createContext<QuoteApi | null>(null)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [property, setProperty] = useState("Residential")
  const [service, setService] = useState("CCTV systems")

  const openQuote = useCallback((preset?: Preset) => {
    if (preset?.property) setProperty(preset.property)
    if (preset?.service) setService(preset.service)
    setOpen(true)
  }, [])

  const closeQuote = useCallback(() => setOpen(false), [])

  const api = useMemo<QuoteApi>(
    () => ({ open, property, service, openQuote, closeQuote }),
    [open, property, service, openQuote, closeQuote],
  )

  return <QuoteContext.Provider value={api}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const value = useContext(QuoteContext)
  if (!value) throw new Error("useQuote must be used within QuoteProvider")
  return value
}
