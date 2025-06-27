import { ReactNode } from "react";

export type QuickActionButtonProps = {
  icon: ReactNode;
  label: string;
  colorClass: string;
};

export function QuickActionButton({ icon, label, colorClass }: QuickActionButtonProps) {
  return (
    <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
      <div className={`${colorClass} text-xl mb-2`}>{icon}</div>
      <p className="text-sm font-medium text-gray-900">{label}</p>
    </button>
  );
}