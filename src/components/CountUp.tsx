import { useEffect, useRef, useState } from "react"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function CountUp({
  to,
  from = 0,
  decimals = 0,
  suffix = "",
  grouping = true,
}: {
  to: number
  from?: number
  decimals?: number
  suffix?: string
  grouping?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const frame = useRef(0)
  const reduce = prefersReducedMotion()
  const [value, setValue] = useState(reduce ? to : from)

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()
        const start = performance.now()
        const duration = 1200
        const tick = (now: number) => {
          const progress = Math.min(1, Math.max(0, (now - start) / duration))
          const eased = 1 - (1 - progress) ** 3
          setValue(from + (to - from) * eased)
          if (progress < 1) frame.current = requestAnimationFrame(tick)
        }
        frame.current = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame.current)
      started.current = false
    }
  }, [from, reduce, to])

  const formatted = value.toLocaleString("en-MY", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: grouping,
  })

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  )
}
