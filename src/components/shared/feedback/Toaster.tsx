// src/components/shared/feedback/Toaster.tsx
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { useToastStore, type ToastVariant } from "@/store/toastStore"

const icons: Record<ToastVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
}

const iconColor: Record<ToastVariant, string> = {
  success: "text-(--success)",
  error: "text-(--danger)",
  info: "text-(--primary)",
  warning: "text-(--warning)",
}

export function Toaster() {
  const toasts = useToastStore((s) => s.toasts)
  const removeToast = useToastStore((s) => s.removeToast)

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-100 flex w-[320px] flex-col gap-2">
      {toasts.map((t) => {
        const Icon = icons[t.variant]
        return (
          <div
            key={t.id}
            className={cn(
              "flex items-start gap-2.5 rounded-xl border border-(--border) bg-(--surface) p-3.5 shadow-lg"
            )}
          >
            <Icon size={18} className={cn("mt-0.5 shrink-0", iconColor[t.variant])} />
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-(--text)">{t.title}</p>
              {t.description ? (
                <p className="mt-0.5 text-[12px] text-(--text-secondary)">{t.description}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => removeToast(t.id)}
              aria-label="Dismiss"
              className="text-(--text-muted) hover:text-(--text-secondary)"
            >
              <X size={14} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
