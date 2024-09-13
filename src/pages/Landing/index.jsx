import React from 'react'
import { useMainContext } from '../../contexts/MainContext';
import Carousel from './components/Carousel';

const Landing = () => {
  const data = useMainContext();
  
  return (
    <div>
      <Carousel sliderData={data?.slider} />
    </div>
  )
}

export default Landing;