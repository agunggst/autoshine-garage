type TextInputProps = {
  label: string;
  placeholder?: string;
  type?: string;
};

export function TextInput({ label, placeholder, type = "text" }: TextInputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 border font-semibold border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
}