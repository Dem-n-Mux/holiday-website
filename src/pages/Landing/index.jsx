import React from 'react'
import { useMainContext } from '../../contexts/MainContext';
import Carousel from './components/Carousel';
import HolidayMood from './components/HolidayMood';
import TrendInternational from './components/TrendInternational';
import Benefits from './components/Benefits';

const Landing = () => {
  const data = useMainContext();
  
  if (!data) return null;

  return (
    <div className='space-y-16'>
      <Carousel sliderData={data?.slider} />
      <HolidayMood data={data?.themeSlider} />
      <TrendInternational data={data?.intTrends} />
      <Benefits />
    </div>
  )
}

export default Landing;
