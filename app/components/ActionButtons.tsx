import { useRouter } from "next/navigation";

export function ActionButtons() {
  const router = useRouter()

  const cancel = () => {
    router.push('/schedule')
  }
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-6">
      <button
      onClick={cancel}
        type="button"
        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
      >
        Cancel
      </button>
      <button
        type="button"
        className="flex-1 px-6 py-3 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
      >
        Save as Draft
      </button>
      <button
        type="submit"
        className="flex-1 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
      >
        Create Booking
      </button>
    </div>
  );
}