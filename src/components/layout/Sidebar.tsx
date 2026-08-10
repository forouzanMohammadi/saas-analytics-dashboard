import { NavLink } from "react-router-dom";
import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Settings,
  Users,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useAuthStore, type Role } from "@/store/authStore";

interface NavItem {
  title: string;
  to: string;
  icon: typeof LayoutDashboard;
  roles?: Role[]; // omit = visible to everyone
}

const menuItems: NavItem[] = [
  { title: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { title: "Analytics", to: "/analytics", icon: BarChart3, roles: ["admin"] },
  { title: "Users", to: "/users", icon: Users, roles: ["admin"] },
  { title: "Pricing", to: "/pricing", icon: CreditCard },
  { title: "Settings", to: "/settings", icon: Settings, roles: ["admin"] },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const role = useAuthStore((s) => s.user?.role);
  const visibleItems = menuItems.filter((item) => !item.roles || (role && item.roles.includes(role)));

  const content = (
    <>
      <div className="flex h-16 items-center justify-between border-b border-(--border) px-5">
        <div className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 52 52" className="shrink-0">
            <rect width="52" height="52" rx="16" fill="var(--primary-bg)" />
            <path
              d="M10 32c4 0 4-14 9-14s5 14 9 14 4-16 10-16 4 10 4 10"
              fill="none"
              stroke="var(--primary-dark)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[15px] font-medium text-(--text)">Pulse</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="text-(--text-muted) hover:text-(--text-secondary) lg:hidden"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-0.5">
          {visibleItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-[9px] px-3 py-2 text-[13.5px] font-medium transition-colors",
                      isActive
                        ? "bg-(--primary-bg) text-(--primary-dark)"
                        : "text-(--text-secondary) hover:bg-(--search-bg) hover:text-(--text)"
                    )
                  }
                >
                  <Icon size={17} className="shrink-0" strokeWidth={1.8} />
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );

  return (
    <>
      {/* Desktop — always visible */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-(--border) bg-(--surface) lg:flex">
        {content}
      </aside>

      {/* Mobile — drawer with backdrop */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-hidden="true"
          />
          <aside className="relative flex h-full w-64 flex-col bg-(--surface) shadow-lg">
            {content}
          </aside>
        </div>
      ) : null}
    </>
  );
}
