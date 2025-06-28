import { ReactNode } from 'react';

type SectionCardProps = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export function SectionCard({ title, children, action }: SectionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        {action && <div>{action}</div>}
      </div>
      {children}
    </div>
  );
}