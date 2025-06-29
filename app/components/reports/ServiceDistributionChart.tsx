'use client';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Basic Wash', value: 120 },
  { name: 'Premium Wash', value: 98 },
  { name: 'Deluxe Detail', value: 60 },
  { name: 'Express Wash', value: 87 },
];

const COLORS = ['#37bef8', '#1d3b89', '#f59d0e', '#81cc1a'];

export default function ServiceDistributionChart() {
  return (
    <div id="service-chart-section" className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Service Distribution</h3>
      </div>
      <div className="p-6 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              fill="#8884d8"
              innerRadius={50}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `${value} bookings`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}