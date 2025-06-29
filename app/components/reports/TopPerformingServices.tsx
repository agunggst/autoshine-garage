import { ReactNode } from 'react';

export type Service = {
  id: string;
  name: string;
  bookings: number;
  earnings: string;
  icon: ReactNode;
  bgClass: string;
  iconClass: string;
};

type TopPerformingServicesProps = {
  services: Service[];
  title?: string;
};

export default function TopPerformingServices({ services, title = 'Top Performing Services' }: TopPerformingServicesProps) {
  return (
    <div id="top-services" className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="p-6 space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${service.bgClass} rounded-lg flex items-center justify-center`}>
                <div className={`${service.iconClass} text-lg`}>{service.icon}</div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{service.name}</p>
                <p className="text-sm font-semibold text-gray-500">{service.bookings} bookings</p>
              </div>
            </div>
            <span className="text-lime-500 font-semibold">{service.earnings}</span>
          </div>
        ))}
      </div>
    </div>
  );
}