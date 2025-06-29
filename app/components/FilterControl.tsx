'use client'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export type FilterControlProps = {
  filterOptions: string[]
  sortOptions: string[]
  placeholderSearch: string
}

export function FilterControl({ filterOptions, placeholderSearch, sortOptions }:FilterControlProps) {
  const [activeFilter, setActiveFilter] = useState(filterOptions[0])
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        {/* <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-900 text-white">All</button>
        <button className="px-4 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:bg-gray-100">Active</button>
        <button className="px-4 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:bg-gray-100">Archived</button> */}
        {filterOptions.map((status) => (
          <button
            key={status}
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
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder={`Search ${placeholderSearch}...`}
            className="w-full pl-10 pr-4 py-2 border font-semibold border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select className="px-4 py-2 border border-gray-300 font-semibold rounded-lg">
          {sortOptions.map((item) => {
            return (
              <option key={item}>{item}</option>
            )
          })}
        </select>
      </div>
    </div>
  );
}