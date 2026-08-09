import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@/lib/utils"

const RadioGroup = RadioGroupPrimitive

export interface RadioItemProps extends RadioPrimitive.Root.Props {}

function RadioItem({ className, ...props }: RadioItemProps) {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(
        "flex size-4.25 items-center justify-center rounded-full border-[1.5px] border-(--border) outline-none transition-colors",
        "data-checked:border-(--primary)",
        "focus-visible:ring-3 focus-visible:ring-(--primary)/25",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="size-2 rounded-full bg-(--primary)" />
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioItem }