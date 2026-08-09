import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-18 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Left - Page Title */}
      <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700">
          <Bell size={20} />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
            JD
          </div>
          <span className="text-sm font-medium text-slate-700">John Doe</span>
        </div>
      </div>
    </header>
  );
}