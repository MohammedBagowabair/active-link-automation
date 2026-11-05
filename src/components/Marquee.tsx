import { marqueeItems } from "@/lib/site"

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track py-4">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center px-4 text-sm font-medium uppercase tracking-[0.18em] text-mist">
            <span className="mr-4 text-amber">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
