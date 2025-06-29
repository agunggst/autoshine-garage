import Image from 'next/image';
import { useMemo, useState } from 'react';

export type Customer = {
  id: string;
  avatar: string;
  name: string;
  registered: string;
  email: string;
  phone: string;
  bookings: string;
  lastService: string;
  totalSpent: string;
  lastVisit: string;
  status: {
    label: string;
    colorClass: string;
    bgClass: string;
  };
};

type CustomerTableProps = {
  title?: string;
  customers: Customer[];
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onMessage?: (id: string) => void;
};

export function CustomerTable({ title = 'Customer Directory', customers, onView, onEdit, onMessage }: CustomerTableProps) {
  const [search, setSearch] = useState('')
  const filteredCustomers = useMemo(() => {
    return customers.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [customers, search])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage) + 4 // + 4 only for mockup purposes

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Bookings</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Spent</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Visit</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((cust) => (
              <tr key={cust.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={cust.avatar} alt={cust.name} className="w-10 h-10 rounded-full" />
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-gray-900">{cust.name}</div>
                      <div className="text-sm font-semibold text-gray-500">Registered: {cust.registered}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{cust.email}</div>
                  <div className="text-sm font-semibold text-gray-500">{cust.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{cust.bookings}</div>
                  <div className="text-sm font-semibold text-gray-500">Last: {cust.lastService}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{cust.totalSpent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">{cust.lastVisit}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${cust.status.bgClass} ${cust.status.colorClass}`}>
                    {cust.status.label}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button onClick={() => onView?.(cust.id)} className="font-semibold text-blue-900 hover:text-blue-800 cursor-pointer">View</button>
                  <button onClick={() => onEdit?.(cust.id)} className="font-semibold text-gray-600 hover:text-gray-800 cursor-pointer">Edit</button>
                  <button onClick={() => onMessage?.(cust.id)} className="font-semibold text-cyan-500 hover:text-blue-600 cursor-pointer">Message</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="px-6 py-3 border-t border-gray-200 flex justify-end items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md text-sm font-semibold ${
                currentPage === page ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}