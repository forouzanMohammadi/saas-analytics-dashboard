import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "Analytics", icon: BarChart3 },
  { title: "Users", icon: Users },
  { title: "Pricing", icon: CreditCard },
  { title: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="flex w-65 shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* Logo / Brand */}
      <div className="flex h-18 items-center border-b border-slate-200 px-6">
        <h2 className="text-xl font-bold text-slate-800">SaaS Dashboard</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.title}>
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900">
                  <Icon size={18} className="shrink-0" />
                  <span>{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}