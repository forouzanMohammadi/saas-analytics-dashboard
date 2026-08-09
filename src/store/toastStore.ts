import { create } from "zustand"

export type ToastVariant = "success" | "error" | "info" | "warning"

export interface ToastItem {
  id: string
  title: string
  description?: string
  variant: ToastVariant
}

interface ToastState {
  toasts: ToastItem[]
  addToast: (toast: Omit<ToastItem, "id">) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (item) => {
    const id = crypto.randomUUID()
    set((state) => ({ toasts: [...state.toasts, { ...item, id }] }))
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }))
    }, 4000)
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}))

// Call this from anywhere — components, event handlers, even outside React.
export const toast = {
  success: (title: string, description?: string) =>
    useToastStore.getState().addToast({ title, description, variant: "success" }),
  error: (title: string, description?: string) =>
    useToastStore.getState().addToast({ title, description, variant: "error" }),
  info: (title: string, description?: string) =>
    useToastStore.getState().addToast({ title, description, variant: "info" }),
  warning: (title: string, description?: string) =>
    useToastStore.getState().addToast({ title, description, variant: "warning" }),
}
