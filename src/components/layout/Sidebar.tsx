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
    <aside className="hidden w-64 flex-col border-r bg-white lg:flex">
      <div className="border-b p-6">
        <h2 className="text-xl font-bold">SaaS Dashboard</h2>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.title}>
                <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-gray-700 transition hover:bg-gray-100">
                  <Icon size={20} />
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