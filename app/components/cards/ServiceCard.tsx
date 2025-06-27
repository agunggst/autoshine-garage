import { ReactNode } from 'react';

export type ServiceCardProps = {
  icon: ReactNode;
  iconBgClass: string;
  title: string;
  subtitle: string;
  progressColor: string;
  iconTextClass: string;
  progress: number; // 0 - 100
};

export function ServiceCard({ icon, iconBgClass, title, subtitle, progressColor, progress, iconTextClass }: ServiceCardProps) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 ${iconBgClass} rounded-full flex items-center justify-center mx-auto mb-3`}>
        <div className={`${iconTextClass} text-xl`}>{icon}</div>
      </div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500 font-semibold mb-2">{subtitle}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${progressColor} h-2 rounded-full`} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}