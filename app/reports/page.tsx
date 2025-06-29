"use client"
import { useEffect } from 'react';
import { useHeaderStore } from '@/store/headerStore';
import { MetricCard } from '../components/cards/MetricCard';
import { FaCalendarCheck, FaChartLine, FaDollarSign, FaUserPlus } from 'react-icons/fa6';
import TopPerformingServices, { Service }from '../components/reports/TopPerformingServices';
import CustomerInsightsProgress, { Insight } from '../components/reports/CustomerInsightsProgress';
import MonthlyPerformanceSummary, { MonthlySummary } from '../components/reports/MonthlyPerformanceSummary';
import { FaGem, FaCar, FaSprayCan } from 'react-icons/fa';

const topServices: Service[] = [
  {
    id: '1',
    name: 'Premium Wash',
    bookings: 142,
    earnings: '$8,520',
    icon: <FaSprayCan />,
    bgClass: 'bg-blue-500/10',
    iconClass: 'text-blue-500',
  },
  {
    id: '2',
    name: 'Basic Wash',
    bookings: 89,
    earnings: '$3,560',
    icon: <FaCar />,
    bgClass: 'bg-cyan-500/10',
    iconClass: 'text-cyan-500',
  },
  {
    id: '3',
    name: 'Deluxe Detail',
    bookings: 67,
    earnings: '$10,050',
    icon: <FaGem />,
    bgClass: 'bg-lime-500/10',
    iconClass: 'text-lime-500',
  },
];

const insights: Insight[] = [
  { id: '1', label: 'Repeat Customers', value: '68%', percentage: 68, barColor: 'bg-blue-900' },
  { id: '2', label: 'Customer Satisfaction', value: '4.8/5', percentage: 96, barColor: 'bg-lime-500' },
  { id: '3', label: 'Booking Completion Rate', value: '92%', percentage: 92, barColor: 'bg-cyan-500' },
];

const monthlyData: MonthlySummary[] = [
  {
    id: 'oct',
    month: 'October 2024',
    revenue: '$28,450',
    bookings: 342,
    newCustomers: 89,
    growth: '+18.2%',
  },
  {
    id: 'sep',
    month: 'September 2024',
    revenue: '$24,120',
    bookings: 304,
    newCustomers: 71,
    growth: '+12.5%',
  },
  {
    id: 'aug',
    month: 'August 2024',
    revenue: '$21,450',
    bookings: 270,
    newCustomers: 63,
    growth: '+8.3%',
  },
];

export default function Reports () {
  const { updateTitle, updateSubTitle } = useHeaderStore()
  useEffect(() => {
    updateTitle('Reports & Analytics')
    updateSubTitle("Track your business performance and insights")

    return () => {
      updateTitle('')
      updateSubTitle('')
    }
  }, [])

  return (
    <main className="space-y-10">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard title="Total Revenue" value="$28,450" icon={<FaDollarSign />} percentage="+18.2%" description="vs last month" iconBgClass="bg-lime-500/10" iconTextClass="text-lime-500" />
        <MetricCard title="Total Bookings" value="342" icon={<FaCalendarCheck />} percentage="+12.5%" description="vs last month" iconBgClass="bg-blue-900/10" iconTextClass="text-blue-900" />
        <MetricCard title="New Customers" value="89" icon={<FaUserPlus />} percentage="+25.3%" description="vs last month" iconBgClass="bg-cyan-500/10" iconTextClass="text-cyan-500" />
        <MetricCard title="Avg Order Value" value="$83.20" icon={<FaChartLine />} percentage="+25.3%" description="vs last month" iconBgClass="bg-purple-500/10" iconTextClass="text-purple-500" />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <TopPerformingServices title="Most Booked Services" services={topServices} />
        <CustomerInsightsProgress insights={insights} />
      </section>
      <MonthlyPerformanceSummary data={monthlyData} />
    </main>
  )
}