
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import BackendStatus from "@/components/BackendStatus";

import {
  FolderKanban,
  ListTodo,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <main className="flex-1 min-w-0 p-5 md:p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome to DevTrack AI — Manage your
            engineering projects efficiently.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Total Projects"
            value="0"
            icon={FolderKanban}
          />

          <StatCard
            title="Active Tasks"
            value="0"
            icon={ListTodo}
          />

          <StatCard
            title="Completed Tasks"
            value="0"
            icon={CheckCircle2}
          />

          <StatCard
            title="Team Members"
            value="0"
            icon={Users}
          />
        </section>

        <section className="mt-8">
          <BackendStatus />
        </section>

        <section className="mt-8 bg-white p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">
            Recent Projects
          </h2>

          <p className="text-slate-500 mt-3">
            No projects yet. Your projects will
            appear here once created.
          </p>
        </section>
      </main>
    </div>
  );
}
