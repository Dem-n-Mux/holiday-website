import React from 'react'
import AboutHero from './components/AboutHero'
import WhoWeAre from './components/WhoWeAre'
import { useMainContext } from '../../contexts/MainContext'
import ReviewCarousel from '../../components/global/ReviewCarousel'
import WhyTravel from './components/WhyTravel'
import WhatWeDo from './components/WhatWeDo'
import FoundingTeam from './components/FoundingTeam'

const AboutUs = () => {
  const data = useMainContext();
  return (
    <div className='space-y-16'>
      <AboutHero />
      <WhoWeAre />
      <WhyTravel />
      <WhatWeDo />
      <FoundingTeam data={data?.team} />
      <ReviewCarousel data={data?.reviews} />
    </div>
  )
}

export default AboutUs