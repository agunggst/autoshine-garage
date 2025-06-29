'use client';
import { FaStar, FaReply, FaFlag } from 'react-icons/fa';

export type ReviewCardProps = {
  id: string;
  avatar: string;
  name: string;
  rating: number;
  service: string;
  date: string;
  content: string;
  response?: string;
  responseStatus?: 'Responded' | 'Pending';
  onReply?: () => void;
  onFlag?: () => void;
};

export function ReviewCard({
  id,
  avatar,
  name,
  rating,
  service,
  date,
  content,
  response,
  responseStatus = 'Pending',
  onReply,
  onFlag
}: ReviewCardProps) {
  return (
    <div key={id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 space-y-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base">{name}</h4>
            <div className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={`text-xs md:text-sm ${i < rating ? '' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className='font-semibold'>{service}</span>
              <span className='font-semibold'>•</span>
              <span className='font-semibold'>{date}</span>
            </div>
          </div>
        </div>
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full self-start md:self-center
            ${responseStatus === 'Responded' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}
        >
          {responseStatus}
        </span>
      </div>

      <p className="text-gray-700 text-sm font-semibold leading-relaxed">{content}</p>

      {response ? (
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary">
          <div className="flex items-center space-x-2 mb-2">
            <FaReply className="text-primary text-sm" />
            <span className="text-sm font-semibold text-gray-900">AutoShine Response</span>
          </div>
          <p className="text-gray-700 font-semibold text-sm leading-relaxed">{response}</p>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 gap-3">
          <button
            className="w-full sm:w-auto px-4 py-2 cursor-pointer bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm flex items-center justify-center"
            onClick={onReply}
          >
            <FaReply className="mr-2" /> Respond
          </button>
          <button
            className="w-full sm:w-auto px-4 py-2 cursor-pointer text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm flex items-center justify-center"
            onClick={onFlag}
          >
            <FaFlag className="mr-2" /> Flag
          </button>
        </div>
      )}
    </div>
  );
}