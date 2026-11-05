import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full resize-y rounded-2xl border border-line bg-ink px-4 py-3 text-base text-ivory outline-none transition placeholder:text-mist/80 focus-visible:border-amber",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
