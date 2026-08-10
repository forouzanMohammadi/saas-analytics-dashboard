import { useNavigate, useLocation } from "react-router-dom";
import { Bell, Menu, LogOut, Settings, User as UserIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import { toast } from "@/store/toastStore";

const pageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  analytics: "Analytics",
  users: "Users",
  pricing: "Pricing",
  settings: "Settings",
};

const notifications = [
  { id: "1", title: "Payment failed for Mina Park", time: "5 min ago", unread: true },
  { id: "2", title: "Sarah Nolan upgraded to Scale", time: "1 hour ago", unread: true },
  { id: "3", title: "Weekly report is ready", time: "Yesterday", unread: false },
];

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const segment = location.pathname.split("/").filter(Boolean)[0] ?? "dashboard";
  const title = pageTitles[segment] ?? "Dashboard";
  const unreadCount = notifications.filter((n) => n.unread).length;
  const initials = (user?.name ?? "?")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  function handleLogout() {
    logout();
    toast.info("Signed out");
    navigate("/login", { replace: true });
  }

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-(--border) bg-(--surface) px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="text-(--text-secondary) hover:text-(--text) lg:hidden"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-[17px] font-semibold text-(--text)">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Notifications"
            className="relative flex size-9 items-center justify-center rounded-[9px] text-(--text-secondary) outline-none hover:bg-(--search-bg) hover:text-(--text)"
          >
            <Bell size={18} />
            {unreadCount > 0 ? (
              <span className="absolute top-1.5 right-1.5 flex size-3.5 items-center justify-center rounded-full bg-(--danger) text-[9px] font-semibold text-white">
                {unreadCount}
              </span>
            ) : null}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8} className="w-72 border border-(--border) bg-(--surface) p-0">
            <div className="flex items-center justify-between px-3.5 py-2.5 text-[12.5px] font-semibold text-(--text)">
              Notifications
            </div>
            <DropdownMenuSeparator className="bg-(--border)" />
            {notifications.map((n) => (
              <DropdownMenuItem
                key={n.id}
                className="flex items-start gap-2.5 rounded-none px-3.5 py-2.5"
              >
                <span
                  className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                    n.unread ? "bg-(--primary)" : "bg-transparent"
                  }`}
                />
                <div>
                  <p className="text-[12px] font-medium text-(--text)">{n.title}</p>
                  <p className="mt-0.5 text-[10.5px] text-(--text-muted)">{n.time}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-[9px] py-1 pl-1 pr-2 outline-none hover:bg-(--search-bg)">
            <div className="flex size-8 items-center justify-center rounded-full bg-(--avatar-bg) text-[11px] font-medium text-(--primary-dark)">
              {initials}
            </div>
            <span className="hidden text-[13px] font-medium text-(--text) sm:inline">
              {user?.name ?? "Account"}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8} className="w-52 border border-(--border) bg-(--surface)">
            <div className="px-2 py-1.5">
              <p className="text-[12.5px] font-medium text-(--text)">{user?.name}</p>
              <p className="text-[10.5px] text-(--text-muted)">{user?.email}</p>
            </div>
            <DropdownMenuSeparator className="bg-(--border)" />
            <DropdownMenuItem 
            onClick={() => navigate("/profile")}
            className="gap-2 text-[12.5px] text-(--text)">
              <UserIcon size={15} />
              Profile
            </DropdownMenuItem>
            {user?.role === "admin" ? (
              <DropdownMenuItem
                onClick={() => navigate("/settings")}
                className="gap-2 text-[12.5px] text-(--text)"
              >
                <Settings size={15} />
                Settings
              </DropdownMenuItem>
            ) : null}
            <DropdownMenuSeparator className="bg-(--border)" />
            <DropdownMenuItem
              variant="destructive"
              onClick={handleLogout}
              className="gap-2 text-[12.5px]"
            >
              <LogOut size={15} />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
