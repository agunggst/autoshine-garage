'use client';
import { SectionCard } from '@/app/components/schedule/SectionCard';
import { TextInput } from '@/app/components/TextInput';
import { SelectInput } from '@/app/components/SelectInput';
import { RadioCard } from '@/app/components/RadioCard';
import { CheckboxCard } from '@/app/components/CheckboxCard';
import { SummaryItem } from '@/app/components/SummaryItem';
import { ActionButtons } from '@/app/components/ActionButtons';
import { useEffect } from 'react';
import { useHeaderStore } from '@/store/headerStore';

export default function BookingFormPage() {
  const { updateTitle, updateSubTitle } = useHeaderStore()
  useEffect(() => {
    updateTitle('New Booking')
    updateSubTitle("Create a new appointment")

    return () => {
      updateTitle('')
      updateSubTitle('')
    }
  }, [])
  return (
    <main className="max-w-4xl mx-auto">
      <form className="space-y-6">
        <SectionCard
          title="Customer Information"
          action={<button type="button" className="text-sm text-blue-900 font-semibold hover:underline cursor-pointer">Search Existing Customer</button>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput label="First Name" placeholder="Enter first name" />
            <TextInput label="Last Name" placeholder="Enter last name" />
            <TextInput label="Phone Number" placeholder="+1 (555) 123-4567" type="tel" />
            <TextInput label="Email Address" placeholder="customer@email.com" type="email" />
          </div>
        </SectionCard>

        <SectionCard title="Vehicle Information">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SelectInput label="Make" options={["Select make", "Toyota", "Honda", "BMW", "Mercedes", "Audi", "Ford", "Chevrolet"]} />
            <TextInput label="Model" placeholder="Enter model" />
            <SelectInput label="Year" options={["Select year", "2024", "2023", "2022", "2021", "2020"]} />
            <TextInput label="Color" placeholder="Vehicle color" />
            <TextInput label="License Plate" placeholder="ABC-1234" />
            <SelectInput label="Vehicle Type" options={["Select type", "Sedan", "SUV", "Truck", "Coupe", "Hatchback"]} />
          </div>
        </SectionCard>

        <SectionCard title="Service Selection">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RadioCard
              id="basic-wash"
              name="service"
              label="Basic Wash"
              description="Exterior wash & dry"
              price="$25"
              duration="30 minutes"
            />
            <RadioCard
              id="premium-wash"
              name="service"
              label="Premium Wash"
              description="Wash, wax & interior clean"
              price="$45"
              duration="60 minutes"
              selected
            />
            <RadioCard
              id="deluxe-detail"
              name="service"
              label="Deluxe Detail"
              description="Full detail & protection"
              price="$85"
              duration="90 minutes"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Add-ons (Optional)</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxCard label="Tire Shine (+$10)" />
              <CheckboxCard label="Air Freshener (+$5)" />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Date & Time">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput label="Date" type="date" />
            <SelectInput
              label="Time Slot"
              options={[
                "Select time",
                "8:00 AM - 9:00 AM",
                "9:00 AM - 10:00 AM",
                "10:00 AM - 11:00 AM",
                "11:00 AM - 12:00 PM",
                "1:00 PM - 2:00 PM",
                "2:00 PM - 3:00 PM",
                "3:00 PM - 4:00 PM",
                "4:00 PM - 5:00 PM"
              ]}
            />
          </div>
        </SectionCard>

        <SectionCard title="Additional Information">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Special Notes</label>
              <textarea
                rows={3}
                placeholder="Any special instructions or notes..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectInput label="Payment Method" options={["Cash", "Credit Card", "Debit Card", "Online Payment"]} />
              <SelectInput label="Status" options={["Confirmed", "Pending"]} />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Booking Summary">
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <SummaryItem label="Premium Wash" value="$45.00" />
            <SummaryItem label="Tire Shine" value="$10.00" />
            <SummaryItem label="Total" value="$55.00" isTotal />
          </div>
        </SectionCard>

        <ActionButtons />
      </form>
    </main>
  );
}