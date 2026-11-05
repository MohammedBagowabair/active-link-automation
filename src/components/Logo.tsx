import { cn } from "@/lib/utils"

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <svg viewBox="0 0 36 36" aria-hidden="true" className="size-10 shrink-0">
        <rect width="36" height="36" rx="10" fill="#141414" />
        <path
          d="M10 22.5 18 8.5l8 14"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M13.2 19.5h9.6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="leading-tight">
        <span className="block text-[0.95rem] font-semibold tracking-tight text-ink">
          Active Link
        </span>
        {compact ? null : (
          <span className="block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-mist">
            Automation & Electrical
          </span>
        )}
      </span>
    </span>
  )
}
