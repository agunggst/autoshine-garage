"use client"
import { useEffect } from 'react';
import { useHeaderStore } from '@/store/headerStore';
import { StatCard } from '../components/cards/StatCard';
import { FaChartBar, FaUserCheck, FaUserPlus, FaUsers } from 'react-icons/fa6';
import { FilterControl } from '../components/FilterControl';
import { CustomerTable } from './CustomerTable';

import { Customer } from '@/interfaces/interfaces';

const mockCustomers: Customer[] = [
  {
    id: 'c1',
    avatar: 'https://i.pravatar.cc/100?img=1',
    name: 'Sarah Johnson',
    registered: 'Jan 2024',
    email: 'sarah.j@email.com',
    phone: '(555) 123-4567',
    bookings: '8 bookings',
    lastService: 'Premium Wash',
    totalSpent: '$420',
    lastVisit: 'Jun 12, 2025',
    status: {
      label: 'VIP',
      colorClass: 'text-white',
      bgClass: 'bg-blue-700',
    },
  },
  {
    id: 'c2',
    avatar: 'https://i.pravatar.cc/100?img=2',
    name: 'Michael Chen',
    registered: 'Dec 2023',
    email: 'michael.chen@email.com',
    phone: '(555) 987-6543',
    bookings: '3 bookings',
    lastService: 'Deluxe Detail',
    totalSpent: '$275',
    lastVisit: 'May 28, 2025',
    status: {
      label: 'Regular',
      colorClass: 'text-gray-700',
      bgClass: 'bg-gray-100',
    },
  },
  {
    id: 'c3',
    avatar: 'https://i.pravatar.cc/100?img=3',
    name: 'Emily Davis',
    registered: 'Feb 2024',
    email: 'emily.davis@email.com',
    phone: '(555) 555-9876',
    bookings: '6 bookings',
    lastService: 'Basic Wash',
    totalSpent: '$180',
    lastVisit: 'Jun 2, 2025',
    status: {
      label: 'VIP',
      colorClass: 'text-white',
      bgClass: 'bg-green-600',
    },
  },
  {
    id: 'c4',
    avatar: 'https://i.pravatar.cc/100?img=1',
    name: 'Sarah Johnson',
    registered: 'Jan 2024',
    email: 'sarah.j@email.com',
    phone: '(555) 123-4567',
    bookings: '8 bookings',
    lastService: 'Premium Wash',
    totalSpent: '$420',
    lastVisit: 'Jun 12, 2025',
    status: {
      label: 'VIP',
      colorClass: 'text-white',
      bgClass: 'bg-blue-700',
    },
  },
  {
    id: 'c5',
    avatar: 'https://i.pravatar.cc/100?img=2',
    name: 'Michael Chen',
    registered: 'Dec 2023',
    email: 'michael.chen@email.com',
    phone: '(555) 987-6543',
    bookings: '3 bookings',
    lastService: 'Deluxe Detail',
    totalSpent: '$275',
    lastVisit: 'May 28, 2025',
    status: {
      label: 'Regular',
      colorClass: 'text-gray-700',
      bgClass: 'bg-gray-100',
    },
  },
];

export default function Services() {
  const { updateTitle, updateSubTitle } = useHeaderStore()
  useEffect(() => {
    updateTitle('Customer Management')
    updateSubTitle("Manage customers and view booking history")

    return () => {
      updateTitle('')
      updateSubTitle('')
    }
  }, [])
  return (
    <main className="space-y-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard label="Total Customers" value="847" icon={<FaUsers />} bgColor="bg-blue-900/10" iconColor="text-blue-900" />
        <StatCard label="New This Month" value="34" icon={<FaUserPlus />} bgColor="bg-green-100" iconColor="text-green-600" />
        <StatCard label="Active Customers" value="623" icon={<FaUserCheck />} bgColor="bg-cyan-100" iconColor="text-cyan-600" />
        <StatCard label="Avg. Bookings" value="3.2" icon={<FaChartBar />} bgColor="bg-yellow-100" iconColor="text-yellow-600" />
      </section>
      <FilterControl filterOptions={['All Customers', 'Active', 'VIP', 'New']} placeholderSearch='customers' sortOptions={['Sort by Name', 'Recent Activity', 'Total Bookings', 'Registration Date']}/>
      <CustomerTable
        title="Customer Directory"
        customers={mockCustomers}
        onView={(id) => console.log(`View customer ${id}`)}
        onEdit={(id) => console.log(`Edit customer ${id}`)}
        onMessage={(id) => console.log(`Message sent to customer ${id}`)}
      />
    </main>
  )
}
