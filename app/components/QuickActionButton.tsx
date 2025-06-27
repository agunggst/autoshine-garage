import { ReactNode } from "react";

export type QuickActionButtonProps = {
  icon: ReactNode;
  label: string;
  colorClass: string;
};

export function QuickActionButton({ icon, label, colorClass }: QuickActionButtonProps) {
  return (
    <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
      <div className={`${colorClass} text-xl mb-2 flex justify-center`}>{icon}</div>
      <p className="text-sm font-semibold text-gray-900">{label}</p>
    </button>
  );
}