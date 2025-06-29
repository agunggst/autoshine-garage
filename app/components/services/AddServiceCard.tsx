import { FaPlus } from "react-icons/fa6";

export function AddServiceCard({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center h-full min-h-[300px] border border-dashed border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors p-6 w-full cursor-pointer"
    >
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
        <FaPlus className="text-xl" />
      </div>
      <p className="text-sm font-medium text-gray-700">Add New Service</p>
    </button>
  );
}