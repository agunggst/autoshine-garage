// components/ReviewCard.tsx
import { ReactNode } from 'react';

export type ReviewCardProps = {
  avatar: string;
  name: string;
  stars: ReactNode;
  message: string;
};

export function ReviewCard({ avatar, name, stars, message }: ReviewCardProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover" />
          <span className="font-semibold text-gray-900">{name}</span>
        </div>
        <div className="flex text-yellow-400 text-xs">{stars}</div>
      </div>
      <p className="text-sm font-semibold text-gray-600">"{message}"</p>
    </div>
  );
}