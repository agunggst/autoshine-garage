'use client';
import { StatCard } from '@/app/components/cards/StatCard';
import { FilterControl } from '@/app/components/FilterControl';
import { ServiceCard } from '@/app/components/services/ServiceCard';
import { FaCheckCircle, FaDollarSign, FaStar, FaWater, FaSprayCan } from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import { BsLightningChargeFill } from "react-icons/bs"
import { useEffect } from 'react';
import { useHeaderStore } from '@/store/headerStore';
import { AddServiceCard } from '../components/services/AddServiceCard';
import { useRouter } from 'next/navigation';

export default function ServiceDashboardPage() {
  const router = useRouter()
  const { updateTitle, updateSubTitle } = useHeaderStore()
    useEffect(() => {
      updateTitle('Service Management')
      updateSubTitle("Manage service packages and pricing")
  
      return () => {
        updateTitle('')
        updateSubTitle('')
      }
    }, [])

  const services = [
    {
      id: 'basic',
      icon: <FaWater />,
      iconBgClass: 'bg-blue-100',
      iconColorClass: 'text-blue-600',
      title: 'Basic Wash',
      subtitle: 'Exterior clean',
      duration: '30 mins',
      price: '$25',
      bookings: '120',
      description: 'Experience a fast and efficient exterior wash, ideal for daily vehicle cleanliness.',
      status: 'Active',
    },
    {
      id: 'premium',
      icon: <FaSprayCan />,
      iconBgClass: 'bg-purple-100',
      iconColorClass: 'text-purple-600',
      title: 'Premium Wash',
      subtitle: 'Interior + Exterior',
      duration: '60 mins',
      price: '$55',
      bookings: '98',
      description: 'Complete vehicle transformation: premium wash, protective wax, detailed interior, tire shine.',
      status: 'Active',
    },
    {
      id: 'detail',
      icon: <FaStar />,
      iconBgClass: 'bg-yellow-100',
      iconColorClass: 'text-yellow-700',
      title: 'Deluxe Detail',
      subtitle: 'Full service',
      duration: '90 mins',
      price: '$85',
      bookings: '60',
      description: 'Complete detail, clay bar, ceramic coating, engine bay',
      status: 'Active',
    },
    {
      id: 'express',
      icon: <BsLightningChargeFill />,
      iconBgClass: 'bg-green-100',
      iconColorClass: 'text-green-700',
      title: 'Express Wash',
      subtitle: 'Full service',
      duration: '20 mins',
      price: '$15',
      bookings: '87',
      description: 'Get a rapid exterior rinse and dry, ensuring your car looks neat in no time',
      status: 'Active',
    }
  ];
  return (
    <main className="space-y-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard label="Total Services" value="12" icon={<FaGears />} bgColor="bg-blue-900/10" iconColor="text-blue-900" />
        <StatCard label="Active Services" value="9" icon={<FaCheckCircle />} bgColor="bg-green-100" iconColor="text-green-600" />
        <StatCard label="Avg. Price" value="$48.75" icon={<FaDollarSign />} bgColor="bg-cyan-100" iconColor="text-cyan-600" />
        <StatCard label="Most Popular" value="Premium Wash" icon={<FaStar />} bgColor="bg-purple-100" iconColor="text-purple-600" />
      </section>

      <FilterControl filterOptions={['All', 'Active', 'Archived']} placeholderSearch='service' sortOptions={['Sort by', 'Name (A-Z)', 'Price (Low-High)', 'Popular']} />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => (
          <ServiceCard
            key={svc.id}
            id={svc.id}
            icon={svc.icon}
            iconBgClass={svc.iconBgClass}
            iconColorClass={svc.iconColorClass}
            title={svc.title}
            subtitle={svc.subtitle}
            duration={svc.duration}
            price={svc.price}
            bookings={svc.bookings}
            description={svc.description}
            status={svc.status}
            onEdit={() => console.log('edit')}
            onDuplicate={() => console.log('dupes')}
          />
        ))}
        <AddServiceCard onClick={() => router.push('/services')} />
      </section>
    </main>
  );
}