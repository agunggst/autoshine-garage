type SummaryItemProps = {
  label: string;
  value: string;
  isTotal?: boolean;
};

export function SummaryItem({ label, value, isTotal }: SummaryItemProps) {
  return (
    <div className={`flex justify-between ${isTotal ? 'border-t border-gray-200 pt-3' : ''}`}>
      <span className={`${isTotal ? 'font-semibold text-gray-900' : 'text-gray-600 font-semibold'}`}>{label}</span>
      <span className={`${isTotal ? 'font-bold text-xl text-primary' : 'font-semibold'}`}>{value}</span>
    </div>
  );
}