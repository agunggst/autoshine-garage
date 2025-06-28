import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export type TimeSlotProps = {
  time: string;
  children: ReactNode;
  isBooked?: boolean;
  canBook?:boolean;
};

export function TimeSlot({ time, children, isBooked = false, canBook = true }: TimeSlotProps) {
  const router = useRouter()

  const gotoAddEdit = () => {
    if (isBooked) {
      router.push('/schedule/edit/123')
    } else {
      router.push('/schedule/add')
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-500">{time}</span>
        { canBook && <button onClick={gotoAddEdit} className="text-xs text-blue-900 font-semibold hover:underline cursor-pointer">+ {isBooked ? 'edit' : 'add'} Booking</button> }
      </div>
      {children}
    </div>
  );
}