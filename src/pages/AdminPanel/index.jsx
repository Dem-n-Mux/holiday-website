import {useState, useEffect} from 'react'
import DestinationsCard from './components/DestinationsCard'
import ThemesCard from './components/ThemesCard'
import ReviewsCard from './components/ReviewsCard'
import { fetchDestinationsCount } from '../../repository/DestinationRepo'
import { fetchThemesCount } from '../../repository/ThemeRepo'
import { fetchReviewsCount } from '../../repository/ReviewRepo'
import SliderUpdate from './components/SliderUpdate'
import { fetchSliderData } from '../../repository/HomeRepo'

const AdminPanel = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const destCount = await fetchDestinationsCount();
      const themeCount = await fetchThemesCount();
      const reviewCount = await fetchReviewsCount();
      const sliderData = await fetchSliderData();
      setData({destCount, themeCount, reviewCount, sliderData});
    }

    fetchData();
  },[]);

  if(!data) {
    return <h1>Loading...</h1>
  };

  return (
    <div className='w-full space-y-8'>
      <div className='flex flex-row justify-between gap-8'>
        <DestinationsCard data={data?.destCount} />
        <ThemesCard data={data?.themeCount} />
        <ReviewsCard data={data?.reviewCount} /> 
      </div>
      <SliderUpdate data={data?.sliderData} />
    </div>
  )
}

export default AdminPanel