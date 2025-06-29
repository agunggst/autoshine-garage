'use client'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ReactNode } from 'react';

export type FilterControlProps = {
  filterOptions: ReactNode[]
  sortOptions: string[]
  placeholderSearch: string
}

export function FilterControl({ filterOptions, placeholderSearch, sortOptions }:FilterControlProps) {
  const [activeFilter, setActiveFilter] = useState(filterOptions[0])
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6
                    flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Bagian Filter Buttons */}
      <div className="flex flex-wrap gap-2"> {/* Tambahkan `flex-wrap` di sini */}
        {filterOptions.map((status, id) => (
          <button
            key={id} // Hati-hati dengan `id` sebagai key jika `status` bisa sama. Lebih baik gunakan `status` jika unik, atau `id` yang dihasilkan dari library seperti `uuid`.
            onClick={() => setActiveFilter(status)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer
              ${activeFilter === status
                ? 'bg-blue-900 text-white'
                : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Bagian Search & Sort */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
        {/* Search Input */}
        <div className="relative w-full sm:w-64 md:w-auto flex-grow"> {/* Sesuaikan width dan tambahkan flex-grow */}
          <input
            type="text"
            placeholder={`Search ${placeholderSearch}...`}
            className="w-full pl-10 pr-4 py-2 border font-semibold border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" // Tambahkan outline-none dan warna focus
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Sort Select */}
        <select className="px-4 py-2 border border-gray-300 font-semibold rounded-lg w-full sm:w-auto outline-none"> {/* Tambahkan w-full dan outline-none */}
          {sortOptions.map((item) => (
            <option key={item} value={item}>{item}</option> // Tambahkan value pada option
          ))}
        </select>
      </div>
    </div>
  );
}