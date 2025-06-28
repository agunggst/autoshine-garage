type SelectInputProps = {
  label: string;
  options: string[];
};

export function SelectInput({ label, options }: SelectInputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <select className="w-full px-4 py-3 border h-[50px] font-semibold border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent">
        {options.map((opt, idx) => (
          <option key={idx}>{opt}</option>
        ))}
      </select>
    </div>
  );
}