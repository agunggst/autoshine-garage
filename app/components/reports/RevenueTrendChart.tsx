'use client';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 15000 },
  { month: 'Feb', revenue: 18000 },
  { month: 'Mar', revenue: 17000 },
  { month: 'Apr', revenue: 22000 },
  { month: 'May', revenue: 20000 },
  { month: 'Jun', revenue: 25000 },
  { month: 'Jul', revenue: 24000 },
  { month: 'Aug', revenue: 22000 },
  { month: 'Sep', revenue: 26000 },
  { month: 'Oct', revenue: 30000 },
];

export default function RevenueTrendChart() {
  return (
    <div id="revenue-chart-section" className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">Revenue Trend</h3>
      </div>
      <div className="p-6 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1d3b89" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#1d3b89" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#4B5563' }} />
            <YAxis tickFormatter={(v) => `$${v.toLocaleString()}`} tick={{ fontSize: 12, fill: '#4B5563' }} />
            <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
            <Area type="monotone" dataKey="revenue" stroke="#1d3b89" fill="#1d3b89" strokeWidth={3} fillOpacity={0.1} />
            <Line type="monotone" dataKey="revenue" stroke="#1d3b89" strokeWidth={3} dot={{ r: 3 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
