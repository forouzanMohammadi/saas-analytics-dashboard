import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

const TOOLTIP_OPEN_DELAY = 200

type TooltipProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>

function TooltipProvider({
  delay = TOOLTIP_OPEN_DELAY,
  ...props
}: TooltipProviderProps) {
  return <TooltipPrimitive.Provider delay={delay} {...props} />
}

export interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  title?: string
  side?: "top" | "right" | "bottom" | "left"
  className?: string
  delay?: number
}

function Tooltip({
  children,
  content,
  title,
  side = "top",
  className,
  delay = TOOLTIP_OPEN_DELAY,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger delay={delay} render={<span className="inline-flex" />}>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner side={side} sideOffset={8}>
          <TooltipPrimitive.Popup
            className={cn(
              "z-50 max-w-50 rounded-lg bg-(--primary-tooltip) px-3 py-2 text-white shadow-md",
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
            <TooltipPrimitive.Arrow className="fill-(--primary-tooltip)" />
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

export { Tooltip, TooltipProvider, TOOLTIP_OPEN_DELAY }
