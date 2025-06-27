'use client';
import { ScheduleControl } from '../components/schedule/ScheduleControl';
import { TimeSlot } from '../components/schedule/TimeSlot';
import { BookingCard } from '../components/schedule/BookingCard';
import { EmptySlotCard } from '../components/schedule/EmptySlotCard';

export default function SchedulePage() {
  return (
    <main>
      <ScheduleControl />
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap">Today's Schedule</h3>
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-lime-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 font-semibold whitespace-nowrap">Confirmed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 font-semibold whitespace-nowrap">Pending</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 font-semibold whitespace-nowrap">In Progress</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 gap-4">
          <TimeSlot time="8:00 AM - 9:00 AM" isBooked={true}>
            <BookingCard
              avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
              name="Sarah Johnson"
              service="Premium Wash"
              vehicle="Honda Civic"
              phone="+1 (555) 123-4567"
              status="Confirmed"
              statusColor="bg-lime-500"
              borderColor="border-l-4 border-lime-500"
              bgColor="bg-lime-500/10"
            />
          </TimeSlot>
          <TimeSlot time="9:00 AM - 10:00 AM">
            <EmptySlotCard message="Available" />
          </TimeSlot>
          <TimeSlot time="10:00 AM - 11:30 AM" isBooked={true}>
            <BookingCard
              avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
              name="Mike Chen"
              service="Deluxe Detail"
              vehicle="BMW X5"
              phone="+1 (555) 987-6543"
              status="Pending"
              statusColor="bg-yellow-500"
              borderColor="border-l-4 border-yellow-500"
              bgColor="bg-yellow-50"
            />
          </TimeSlot>
          <TimeSlot time="12:00 PM - 1:00 PM" canBook={false}>
            <EmptySlotCard message="Lunch Break" />
          </TimeSlot>
          <TimeSlot time="1:00 PM - 2:00 PM" isBooked={true}>
            <BookingCard
              avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
              name="Emma Wilson"
              service="Basic Wash"
              vehicle="Toyota Camry"
              phone="+1 (555) 456-7890"
              status="In Progress"
              statusColor="bg-blue-500"
              borderColor="border-l-4 border-blue-500"
              bgColor="bg-blue-50"
            />
          </TimeSlot>
          <TimeSlot time="2:00 PM - 3:00 PM" isBooked={true}>
            <BookingCard
              avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
              name="David Smith"
              service="Premium Wash"
              vehicle="Mercedes C-Class"
              phone="+1 (555) 789-0123"
              status="Confirmed"
              statusColor="bg-lime-500"
              borderColor="border-l-4 border-lime-500"
              bgColor="bg-lime-500/10"
            />
          </TimeSlot>
          <TimeSlot time="3:00 PM - 4:00 PM">
            <EmptySlotCard message="Available" />
          </TimeSlot>
          <TimeSlot time="4:00 PM - 5:30 PM" isBooked={true}>
            <BookingCard
              avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
              name="Lisa Brown"
              service="Deluxe Detail"
              vehicle="Audi A4"
              phone="+1 (555) 321-6547"
              status="Confirmed"
              statusColor="bg-lime-500"
              borderColor="border-l-4 border-lime-500"
              bgColor="bg-lime-500/10"
            />
          </TimeSlot>
        </div>
      </div>
    </main>
  );
}