export type BookingStatus = 'Confirmed' | 'Pending' | 'In Progress';

export type BookingCardProps = {
  avatar: string;
  name: string;
  service: string;
  time: string;
  status: BookingStatus;
  statusColor: string;
};

export function BookingCard({ avatar, name, service, time, status, statusColor }: BookingCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{service} - {time}</p>
        </div>
      </div>
      <span className={`px-3 py-1 ${statusColor} text-white text-xs font-medium rounded-full`}>
        {status}
      </span>
    </div>
  );
}