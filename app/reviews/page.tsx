"use client"
import { useEffect } from 'react';
import { useHeaderStore } from '@/store/headerStore';
import { StatCard } from '../components/cards/StatCard';
import { FaCalendar, FaComments, FaReply, FaStar } from 'react-icons/fa';
import RatingDistribution, { RatingData } from '../components/reviews/RatingDistribution';
import { FilterControl } from '../components/FilterControl';
import { ReviewCard, ReviewCardProps } from '../components/reviews/ReviewCard';

const data: RatingData[] = [
  { star: 5, count: 973, percentage: 78 },
  { star: 4, count: 187, percentage: 15 },
  { star: 3, count: 52, percentage: 4 },
  { star: 2, count: 23, percentage: 2 },
  { star: 1, count: 12, percentage: 1 },
];

const reviewData: ReviewCardProps[] = [
  {
    id: 'r1',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
    name: 'Sarah Johnson',
    rating: 5,
    service: 'Premium Wash',
    date: 'Dec 15, 2024',
    content: 'Absolutely fantastic service! The team was professional, thorough, and my car looks brand new. The premium wash package exceeded my expectations. Will definitely be coming back!',
    response: "Thank you so much for your wonderful review, Sarah! We're thrilled that you loved our premium wash service. Looking forward to serving you again!",
    responseStatus: 'Responded',
  },
  {
    id: 'r2',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    name: 'John Doe',
    rating: 3.5,
    service: 'Basic Wash',
    date: 'Jan 5, 2025',
    content: 'Good service overall. The basic wash was decent but I expected a bit more attention to detail. The staff was friendly though and the price was fair.',
    responseStatus: 'Pending',
  },
  {
    id: 'r3',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
    name: 'Emma Davis',
    rating: 5,
    service: 'Deluxe Detail',
    date: 'Dec 15, 2024',
    content: 'Outstanding work! The deluxe detail package transformed my car completely. Every surface was spotless and the interior smells amazing. Worth every penny!',
    response: "Emma, we're so happy you're thrilled with our deluxe detail service! Your satisfaction is our top priority. Thank you for choosing AutoShine!",
    responseStatus: 'Responded',
  },
];

export default function Reviews() {
  const { updateTitle, updateSubTitle } = useHeaderStore()
  useEffect(() => {
    updateTitle('Reviews & Ratings')
    updateSubTitle("Monitor customer feedback and respond to reviews")

    return () => {
      updateTitle('')
      updateSubTitle('')
    }
  }, [])

  return (
    <main className="space-y-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard label="Average Rating" value={
          <>
            <span className='flex items-center space-x-1'>
              <span>4.8</span>
              <span className="flex text-yellow-400 text-[16px] ml-1 pb-0.5">
                <Stars count={4.8} />
              </span>
            </span>
          </>
          } icon={<FaStar />} bgColor="bg-yellow-500/10" iconColor="text-yellow-500" />
        <StatCard label="Total Reviews" value="1247" icon={<FaComments />} bgColor="bg-blue-900/10" iconColor="text-blue-900" />
        <StatCard label="This Month" value="89" icon={<FaCalendar />} bgColor="bg-lime-100" iconColor="text-lime-600" />
        <StatCard label="Pending Response" value="12" icon={<FaReply />} bgColor="bg-red-100" iconColor="text-red-600" />
      </section>
      <RatingDistribution ratings={data} />
      <FilterControl 
        filterOptions={[
            'All Reviews', 
            '5 Stars', 
            '4 Stars', 
            <><span className='text-red-500'>Low Ratings</span></>, 
            <><span className='text-yellow-500'>Pending</span></>
          ]
        } 
        placeholderSearch='reviews' 
        sortOptions={['Sort by Date', 'Sort by Rating']}
      />
      <div className="space-y-6">
        {reviewData.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </main>
  )
}

function Stars({ count }: { count: number }) {
  const fullStars = Math.floor(count);
  const hasHalf = count % 1 !== 0;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
      {hasHalf && <FaStar className="opacity-50" />}
    </>
  );
}