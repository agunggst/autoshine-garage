import { ReactNode } from 'react';

export type MetricCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  percentage: string;
  description: string;
  iconBgClass: string;
  iconTextClass: string;
};

export function MetricCard({
  title,
  value,
  icon,
  percentage,
  description,
  iconBgClass,
  iconTextClass,
}: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`w-12 h-12 ${iconBgClass} rounded-lg flex items-center justify-center`}>
          <div className={`${iconTextClass} text-lg`}>{icon}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-lime-500 text-sm font-medium">{percentage}</span>
        <span className="text-gray-500 font-semibold text-sm ml-2">{description}</span>
      </div>
    </div>
  );
}