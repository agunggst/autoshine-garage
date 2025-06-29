import { ReactNode } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

export type ServiceCardFullProps = {
  id: string;
  icon: ReactNode;
  iconBgClass: string;
  iconColorClass: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  bookings: string;
  description: string;
  status: string;
  onEdit?: () => void;
  onDuplicate?: () => void;
};

export function ServiceCard({
  id,
  icon,
  iconBgClass,
  iconColorClass,
  title,
  subtitle,
  duration,
  price,
  bookings,
  description,
  status,
  onEdit,
  onDuplicate
}: ServiceCardFullProps) {
  return (
    <div id={id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${iconBgClass} rounded-lg flex items-center justify-center`}>
              <div className={`${iconColorClass} text-xl`}>{icon}</div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              <p className="text-sm font-semibold text-gray-500">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-lime-500 text-white text-xs font-semibold rounded-full">{status}</span>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <FaEllipsisV />
            </button>
          </div>
        </div>

        <div className="space-y-3 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Duration:</span>
            <span className="font-semibold">{duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Price:</span>
            <span className="font-bold text-primary text-lg">{price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Bookings:</span>
            <span className="font-semibold">{bookings}</span>
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-600 font-semibold overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal md:line-clamp-2">{description}</p>

        <div className="flex space-x-2">
          <button
            className="flex-1 px-3 py-2 text-sm bg-blue-900 cursor-pointer font-semibold text-white rounded-lg hover:bg-blue-800"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="px-3 py-2 text-sm text-gray-600 border cursor-pointer font-semibold border-gray-300 rounded-lg hover:bg-gray-50"
            onClick={onDuplicate}
          >
            Duplicate
          </button>
        </div>
      </div>
    </div>
  );
}