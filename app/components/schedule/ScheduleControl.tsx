import { FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';

export function ScheduleControl() {
  const getFormattedDate = (): string => {
    const date: Date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
        {/* Kontainer Flex utama */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0">
          
          {/* Grup Kiri: Tombol & Navigasi Tanggal */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button className="px-3 py-2 text-sm font-semibold bg-blue-900 text-white rounded-lg cursor-pointer">Today</button>
              <button className="px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">Week</button>
              <button className="px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">Month</button>
            </div>
            
            {/* Garis pemisah, hanya terlihat di layar sm ke atas */}
            <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer rounded-full hover:bg-gray-100"><FaChevronLeft /></button>
              <span className="text-base sm:text-lg font-bold text-gray-900 whitespace-nowrap">{getFormattedDate()}</span>
              <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer rounded-full hover:bg-gray-100"><FaChevronRight /></button>
            </div>
          </div>

          {/* Grup Kanan: Pencarian & Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search bookings..."
                className="pl-10 pr-4 py-2 border border-gray-300 font-semibold rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <select 
              className="px-4 py-2 border border-gray-300 font-semibold rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
            >
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

        </div>
      </div>
    </>
  );
}