
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {value}
          </h2>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <Icon className="text-blue-600" size={24} />
        </div>
      </div>
    </div>
  );
}
