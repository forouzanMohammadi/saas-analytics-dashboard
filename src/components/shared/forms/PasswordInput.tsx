import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { Input, type InputProps } from "@/components/shared/forms/Input"

export interface PasswordInputProps extends Omit<InputProps, "type" | "endIcon"> { }

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Input
      ref={ref}
      type={visible ? "text" : "password"}
      endIcon={
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setVisible((v) => !v)}
          className="pointer-events-auto flex text-(--text-muted) hover:text-(--text-secondary)"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff /> : <Eye />}
        </button>
      }
      {...props}
    />
  )
})
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
