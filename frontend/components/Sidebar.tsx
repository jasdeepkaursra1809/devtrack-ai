
"use client";

import {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  Users,
  Settings,
  Code2,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Projects", icon: FolderKanban },
  { name: "Tasks", icon: ListTodo },
  { name: "Team", icon: Users },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-6">
      <div className="flex items-center gap-2 mb-10">
        <Code2 className="text-blue-400" size={28} />
        <h1 className="text-xl font-bold">DevTrack AI</h1>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
