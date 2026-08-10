import { useState } from "react"
import { Outlet } from "react-router-dom"

import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import { Toaster } from "@/components/shared/feedback/Toaster"

export function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  return (
    <div className="flex min-h-screen bg-(--background)">
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          onMenuClick={() =>
            setMobileMenuOpen(true)
          }
        />

        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>

      <Toaster />
    </div>
  )
}