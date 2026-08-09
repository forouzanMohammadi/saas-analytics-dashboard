import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

export interface SwitchProps extends SwitchPrimitive.Root.Props {}

function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative inline-flex h-5 w-9 items-center rounded-full bg-(--border) transition-colors outline-none",
        "data-checked:bg-(--primary)",
        "focus-visible:ring-3 focus-visible:ring-(--primary)/25",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "block size-4 translate-x-0.5 rounded-full bg-white shadow-sm transition-transform",
          "data-checked:translate-x-4.5"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }