'use client';

import { FaCalendarCheck, FaDollarSign, FaUsers, FaStar, FaPlus, FaUserPlus, FaChartBar, FaWater, FaSprayCan } from 'react-icons/fa';
import { MdDiamond } from "react-icons/md"
import { MetricCard } from '../components/cards/MetricCard';
import { BookingCard } from '../components/cards/BookingCard';
import { ReviewCard } from '../components/cards/ReviewCard';
import { ServiceCard } from '../components/cards/ServiceCard';
import { QuickActionButton } from '../components/QuickActionButton';
import { FaGear } from 'react-icons/fa6';
import { useEffect } from 'react';
import { useHeaderStore } from '@/store/headerStore';

export default function DashboardPage() {
  const { updateTitle, updateSubTitle } = useHeaderStore()
  useEffect(() => {
    updateTitle('Dashboard Overview')
    updateSubTitle("welcome back! Here's what's happening today")

    return () => {
      updateTitle('')
      updateSubTitle('')
    }
  }, [])

  return (
    <main className="space-y-10">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Today's Bookings" value="24" icon={<FaCalendarCheck />} percentage="+12%" description="from yesterday" iconBgClass="bg-blue-900/10" iconTextClass="text-blue-900" />
        <MetricCard title="Total Earnings" value="$3,420" icon={<FaDollarSign />} percentage="+8%" description="from last week" iconBgClass="bg-lime-500/10" iconTextClass="text-lime-500" />
        <MetricCard title="Active Customers" value="156" icon={<FaUsers />} percentage="+15%" description="this month" iconBgClass="bg-cyan-500/10" iconTextClass="text-cyan-500" />
        <MetricCard title="Avg Rating" value="4.8" icon={<FaStar />} percentage="+0.2" description="from last month" iconBgClass="bg-yellow-100" iconTextClass="text-yellow-500" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
          <BookingCard avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" name="Sarah Johnson" service="Premium Wash" time="2:00 PM" status="Confirmed" statusColor="bg-lime-500" />
          <BookingCard avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" name="Mike Chen" service="Basic Wash" time="3:30 PM" status="Pending" statusColor="bg-yellow-500" />
          <BookingCard avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" name="Emma Wilson" service="Deluxe Detail" time="4:00 PM" status="In Progress" statusColor="bg-blue-500" />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Reviews</h3>
          <ReviewCard avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" name="David Smith" stars={<Stars count={5} />} message="Excellent service! My car looks brand new." />
          <ReviewCard avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" name="Lisa Brown" stars={<Stars count={4.5} />} message="Great attention to detail. Will definitely come back!" />
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Service Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard icon={<FaWater />} iconBgClass="bg-blue-800/10" title="Basic Wash" subtitle="45 bookings this week" iconTextClass="text-blue-800" progressColor="bg-blue-800" progress={75} />
          <ServiceCard icon={<FaSprayCan />} iconBgClass="bg-violet-600/10" title="Premium Wash" subtitle="32 bookings this week" iconTextClass="text-violet-600" progressColor="bg-violet-600" progress={60} />
          <ServiceCard icon={<MdDiamond />} iconBgClass="bg-lime-500/10" title="Deluxe Detail" subtitle="18 bookings this week" iconTextClass="text-lime-500" progressColor="bg-lime-500" progress={40} />
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionButton icon={<FaPlus />} label="New Booking" colorClass="text-blue-900" />
          <QuickActionButton icon={<FaUserPlus />} label="Add Customer" colorClass="text-cyan-500" />
          <QuickActionButton icon={<FaGear />} label="Add Service" colorClass="text-lime-500" />
          <QuickActionButton icon={<FaChartBar />} label="View Reports" colorClass="text-purple-500" />
        </div>
      </section>
    </main>
  );
}

function Stars({ count }: { count: number }) {
  const fullStars = Math.floor(count);
  const hasHalf = count % 1 !== 0;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
      {hasHalf && <FaStar className="opacity-50" />}
    </>
  );
}