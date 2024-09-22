import React from 'react'
import { useParams } from 'react-router-dom';
import { useMainContext } from '../../contexts/MainContext';
import HeroIntro from './components/HeroIntro';
import ReviewCarousel from '../../components/global/ReviewCarousel';
import PackageListing from './components/PackageListing';
import DestinationContact from '../../components/global/DestinationContact';

const ThemePage = () => {
  const data = useMainContext();
  const {themeId} = useParams();
  return (
    <div className='space-y-16'>
      <HeroIntro data={data?.themeIdData} />
      <PackageListing data={data?.themePackages} id={themeId} />
      <DestinationContact />
      <ReviewCarousel data={data?.reviews} />
    </div>
  )
}

export default ThemePage;
