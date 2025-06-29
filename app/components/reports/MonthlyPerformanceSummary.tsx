// components/MonthlyPerformanceSummary.tsx

export type MonthlySummary = {
  id: string;
  month: string;
  revenue: string;
  bookings: number;
  newCustomers: number;
  growth: string;
};

type MonthlyPerformanceSummaryProps = {
  data: MonthlySummary[];
  title?: string;
};

export default function MonthlyPerformanceSummary({
  data,
  title = 'Monthly Performance Summary'
}: MonthlyPerformanceSummaryProps) {
  return (
    <div id="monthly-summary" className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Month</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Revenue</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Bookings</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">New Customers</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Growth</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-4 px-4 text-gray-900 font-semibold whitespace-nowrap">{item.month}</td>
                <td className="py-4 px-4 text-gray-900 font-semibold whitespace-nowrap">{item.revenue}</td>
                <td className="py-4 px-4 text-gray-900 font-semibold whitespace-nowrap">{item.bookings}</td>
                <td className="py-4 px-4 text-gray-900 font-semibold whitespace-nowrap">{item.newCustomers}</td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className="text-lime-500 font-semibold">{item.growth}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
