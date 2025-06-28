type CheckboxCardProps = {
  label: string;
};

export function CheckboxCard({ label }: CheckboxCardProps) {
  return (
    <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
      <input type="checkbox" className="text-blue-900 focus:ring-blue-900" />
      <span className="flex-1 font-semibold">{label}</span>
    </label>
  );
}