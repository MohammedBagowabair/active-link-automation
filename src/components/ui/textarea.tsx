import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-28 w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-mist focus-visible:border-ink",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
