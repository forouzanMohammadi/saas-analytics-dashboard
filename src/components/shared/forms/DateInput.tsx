// src/components/shared/DateInput.tsx
import * as React from "react"
import { Calendar } from "lucide-react"

import { Input, type InputProps } from "@/components/shared/forms/Input"

export interface DateInputProps extends Omit<InputProps, "type" | "startIcon"> { }

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>((props, ref) => {
  return (
    <Input
      ref={ref}
      type="date"
      startIcon={<Calendar />}
      className="[&::-webkit-calendar-picker-indicator]:opacity-0"
      {...props}
    />
  )
})
DateInput.displayName = "DateInput"

export { DateInput }
