import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog(
  props: React.ComponentProps<typeof DialogPrimitive.Root>
) {
  return <DialogPrimitive.Root {...props} />
}

function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return <DialogPrimitive.Trigger {...props} />
}

function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  return <DialogPrimitive.Close {...props} />
}

function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return <DialogPrimitive.Portal {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Backdrop>) {
  return (
    <DialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-[rgba(30,27,46,0.22)] backdrop-blur-[2px]",
        "transition-opacity duration-200",
        "data-starting-style:opacity-0",
        "data-ending-style:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup>) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Viewport
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          overflow-y-auto
          p-4
        "
      >
        <DialogPrimitive.Popup
          className={cn(
            "relative w-full max-w-130",
            "rounded-2xl",
            "border border-(--border)",
            "bg-(--surface)",
            "text-(--text)",
            "shadow-[0_24px_80px_rgba(30,27,46,0.16)]",
            "outline-none",
            "transition-[transform,opacity] duration-200",
            "data-starting-style:scale-[0.97]",
            "data-starting-style:opacity-0",
            "data-ending-style:scale-[0.97]",
            "data-ending-style:opacity-0",
            className
          )}
          {...props}
        >
          {children}

          <DialogPrimitive.Close
            aria-label="Close"
            className="
              absolute right-4 top-4
              flex size-8 items-center justify-center
              rounded-lg
              text-(--text-secondary)
              transition-colors
              hover:bg-(--search-bg)
              hover:text-(--text)
              focus-visible:outline-none
              focus-visible:ring-3
              focus-visible:ring-(--primary)/20
            "
          >
            <X className="size-4" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Viewport>
    </DialogPortal>
  )
}

function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col text-left",
        className
      )}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn(
        "text-lg font-semibold tracking-tight text-(--text)",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn(
        "text-sm text-(--text-secondary)",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}