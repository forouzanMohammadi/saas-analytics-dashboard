// src/components/shared/Checkbox.tsx
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CheckboxProps extends CheckboxPrimitive.Root.Props {}

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "flex size-4.25 items-center justify-center rounded-[5px] border-[1.5px] border-(--border) outline-none transition-colors",
        "data-checked:border-transparent data-checked:bg-(--primary)",
        "focus-visible:ring-3 focus-visible:ring-(--primary)/25",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex text-white">
        <Check size={12} strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }