import { useEffect, useRef, useState } from "react"
import { CountUp } from "@/components/CountUp"
import { useQuote } from "@/components/QuoteContext"
import { asset } from "@/lib/site"

function reduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function Hero() {
  const { openQuote } = useQuote()
  const frame = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0.62, y: 0.42 })

  function place(clientX: number, clientY: number) {
    const el = frame.current
    if (!el || reduced()) return
    const rect = el.getBoundingClientRect()
    const x = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    const y = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height))
    setPos({ x, y })
  }

  useEffect(() => {
    const onTilt = (event: DeviceOrientationEvent) => {
      if (reduced()) return
      const x = Math.min(1, Math.max(0, 0.5 + (event.gamma ?? 0) / 50))
      const y = Math.min(1, Math.max(0, 0.45 + ((event.beta ?? 40) - 40) / 70))
      setPos({ x, y })
    }
    window.addEventListener("deviceorientation", onTilt)
    return () => window.removeEventListener("deviceorientation", onTilt)
  }, [])

  const shift = reduced() ? "none" : `translate(${(0.5 - pos.x) * 8}%, ${(0.5 - pos.y) * 8}%) scale(1.08)`

  return (
    <section className="mx-auto grid max-w-5xl gap-8 px-5 pt-8 pb-4 md:grid-cols-2 md:items-end md:px-8 md:pt-16 md:pb-10" aria-labelledby="hero-title">
      <div>
        <p className="text-xs font-medium tracking-wide text-mist">Nilai · Established 2014</p>
        <h1 id="hero-title" className="hero-title mt-4">
          Security.
          <br />
          Automation.
          <br />
          Electrical.
        </h1>
        <p className="mt-4 max-w-sm text-base text-mist">One team. Complete solutions.</p>
        <button
          type="button"
          className="press mt-6 hidden h-12 rounded-full bg-ink px-6 text-sm font-semibold text-white md:inline-flex"
          onClick={() => openQuote()}
          onPointerMove={(event) => {
            if (reduced()) return
            const rect = event.currentTarget.getBoundingClientRect()
            const x = event.clientX - (rect.left + rect.width / 2)
            const y = event.clientY - (rect.top + rect.height / 2)
            event.currentTarget.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`
          }}
          onPointerLeave={(event) => {
            event.currentTarget.style.transform = ""
          }}
        >
          Start a quote
        </button>
        <p className="mt-8 text-sm text-mist">
          <span className="font-semibold text-ink">
            <CountUp to={5} decimals={1} />
          </span>{" "}
          Google
          <span className="mx-2 text-line">/</span>
          <span className="font-semibold text-ink">
            <CountUp to={1070} suffix="+" />
          </span>{" "}
          reviews
          <span className="mx-2 text-line">/</span>
          Since{" "}
          <span className="font-semibold text-ink">
            <CountUp to={2014} from={2000} grouping={false} />
          </span>
        </p>
      </div>

      <div
        ref={frame}
        className="viewfinder"
        onPointerMove={(event) => place(event.clientX, event.clientY)}
        onPointerDown={(event) => place(event.clientX, event.clientY)}
        role="img"
        aria-label="CCTV viewfinder. Move a finger or cursor to aim the crosshair."
      >
        <img src={asset("images/hero.jpg")} alt="" style={{ transform: shift }} />
        <div className="reticle" style={{ left: `${pos.x * 100}%`, top: `${pos.y * 100}%` }} />
        <p className="rec">
          <span className="rec-dot" />
          REC
        </p>
      </div>
    </section>
  )
}
