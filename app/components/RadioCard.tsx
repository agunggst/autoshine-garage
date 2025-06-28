type RadioCardProps = {
  id: string;
  name: string;
  label: string;
  description: string;
  price: string;
  duration: string;
  selected?: boolean;
};

export function RadioCard({ id, name, label, description, price, duration, selected }: RadioCardProps) {
  return (
    <div
      className={`border rounded-lg p-4 transition-colors cursor-pointer ${
        selected ? 'border-blue-900 bg-blue-50' : 'border-gray-200 hover:border-blue-900'
      }`}
    >
      <div className="flex items-center space-x-3">
        <input
          type="radio"
          name={name}
          id={id}
          defaultChecked={selected}
          className="text-primary focus:ring-primary"
        />
        <div className="flex-1">
          <label htmlFor={id} className="font-semibold text-gray-900 cursor-pointer">
            {label}
          </label>
          <p className="text-sm font-semibold text-gray-500">{description}</p>
          <p className="text-lg font-bold text-primary mt-1">{price}</p>
          <p className="text-xs font-semibold text-gray-400">{duration}</p>
        </div>
      </div>
    </div>
  );
}