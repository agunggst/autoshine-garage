import { FaEllipsisV } from 'react-icons/fa';

type BookingCardProps = {
  avatar: string;
  name: string;
  service: string;
  vehicle: string;
  phone: string;
  status: string;
  statusColor: string;
  borderColor: string;
  bgColor: string;
};

export function BookingCard({
  avatar,
  name,
  service,
  vehicle,
  phone,
  status,
  statusColor,
  borderColor,
  bgColor
}: BookingCardProps) {
  return (
    <div className={`${bgColor} ${borderColor} p-4 rounded-lg shadow-sm w-full`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full flex-shrink-0" // Ukuran lebih besar untuk avatar, flex-shrink-0 agar tidak menyusut
          />
          <div>
            <p className="font-bold text-gray-900 text-base md:text-lg">{name}</p>
            <p className="text-sm md:text-base font-semibold text-gray-500">
              {service} • {vehicle}
            </p>
            <p className="text-xs md:text-sm font-semibold text-gray-400">
              {phone}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 w-full md:w-auto justify-end md:justify-start">
          <span className={`px-2 py-1 ${statusColor} text-white text-xs font-medium rounded-full whitespace-nowrap`}>
            {status}
          </span>
          <button className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md">
            <FaEllipsisV />
          </button>
        </div>
      </div>
    </div>
  );
}