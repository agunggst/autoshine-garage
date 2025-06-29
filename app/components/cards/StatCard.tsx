import { ReactNode } from 'react';

export type StatCardProps = {
  label: string;
  value: ReactNode;
  icon: ReactNode;
  bgColor: string;
  iconColor: string;
};

export function StatCard({ label, value, icon, bgColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-500">{label}</p>
          <p className="text-xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
          <div className={`${iconColor} text-xl`}>{icon}</div>
        </div>
      </div>
    </div>
  );
}