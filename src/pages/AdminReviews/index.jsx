import React, { useEffect, useState } from 'react'
import { fetchReviewData } from '../../repository/ReviewRepo';
import ReviewListing from './components/ReviewListing';

const ReviewPanel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const reviewData = await fetchReviewData();
      setData({ reviewData });
    }

    fetchData();
  }, []);

  if(!data) {
    return <h1>Loading...</h1>
  };
  
  return (
    <div className='space-y-8 w-full'>
      <h1 className='font-playfair text-4xl'>Reviews Panel</h1>
      <ReviewListing data={data?.reviewData} />
    </div>
  )
}

export default ReviewPanel