// src/components/shared/Tooltip.tsx
import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

export interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  title?: string
  side?: "top" | "right" | "bottom" | "left"
  className?: string
}

function Tooltip({ children, content, title, side = "top", className }: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger render={<span className="inline-flex" />}>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner side={side} sideOffset={8}>
          <TooltipPrimitive.Popup
            className={cn(
              "z-50 max-w-[200px] rounded-lg bg-[var(--primary-tooltip)] px-3 py-2 text-white shadow-md",
              className
            )}
          >
            {title ? (
              <>
                <p className="text-[12.5px] font-semibold">{title}</p>
                <p className="text-[11.5px] text-white/70">{content}</p>
              </>
            ) : (
              <p className="text-[11.5px] whitespace-nowrap">{content}</p>
            )}
            <TooltipPrimitive.Arrow className="fill-[var(--primary-tooltip)]" />
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

export { Tooltip, TooltipProvider }
