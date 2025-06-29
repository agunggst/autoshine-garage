'use client';
import { FaStar } from 'react-icons/fa';

export type RatingData = {
  star: number;
  count: number;
  percentage: number; // 0 - 100
};

type RatingDistributionProps = {
  ratings: RatingData[];
};

export default function RatingDistribution({ ratings }: RatingDistributionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Rating Distribution</h3>
      <div className="space-y-3">
        {ratings.map((item) => (
          <div key={item.star} className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 w-16">
              <span className="text-sm font-semibold">{item.star}</span>
              <FaStar className="text-yellow-400 text-xs" />
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 w-12 text-right font-semibold">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}