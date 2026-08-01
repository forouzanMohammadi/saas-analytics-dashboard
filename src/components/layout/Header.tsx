import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      {/* Left */}
      <h1 className="text-xl font-semibold text-gray-800">
        Dashboard
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 font-semibold text-gray-700">
            JD
          </div>

          <span className="font-medium text-gray-700">
            John Doe
          </span>
        </div>
      </div>
    </header>
  );
}