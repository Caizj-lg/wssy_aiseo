import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
}

export function StatCard({ label, value, icon: Icon, iconColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm mb-2">{label}</p>
          <p className="font-bold">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${iconColor}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
