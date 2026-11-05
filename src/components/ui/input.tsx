import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-2xl border border-line bg-ink px-4 text-base text-ivory outline-none transition placeholder:text-mist/80 focus-visible:border-amber",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
