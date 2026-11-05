import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-ink text-white hover:bg-amber-2",
        outline: "border border-line bg-white text-ink hover:bg-paper",
        ghost: "bg-transparent text-ink hover:bg-black/5",
        ink: "bg-ink text-white hover:bg-amber-2",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-base",
        sm: "h-9 px-3.5 text-xs",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  type,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const classNames = cn(buttonVariants({ variant, size }), className)
  if (asChild) {
    return <Slot data-slot="button" className={classNames} {...props} />
  }
  return <button data-slot="button" className={classNames} type={type ?? "button"} {...props} />
}

export { Button }
