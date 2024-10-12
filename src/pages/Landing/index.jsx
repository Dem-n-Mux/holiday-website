import React from 'react'
import { useMainContext } from '../../contexts/MainContext';
import Carousel from './components/Carousel';
import HolidayMood from './components/HolidayMood';
import TrendInternational from './components/TrendInternational';
import Benefits from './components/Benefits';
import TrendIndia from './components/TrendIndia';
import ReviewCarousel from '../../components/global/ReviewCarousel';
import FollowUs from '../../components/global/FollowUs';

const Landing = () => {
  const data = useMainContext();
  
  if (!data) return null;

  return (
    <div className='space-y-16'>
      <Carousel sliderData={data?.slider} />
      <HolidayMood data={data?.themeSlider} />
      <TrendInternational data={data?.intTrends} />
      <TrendIndia />
      <ReviewCarousel data={data?.reviews} />
      <Benefits />
      <FollowUs />
    </div>
  )
}

export default Landing;
