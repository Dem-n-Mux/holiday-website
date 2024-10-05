import {useState, useEffect} from 'react'
import DestinationsCard from './components/DestinationsCard'
import ThemesCard from './components/ThemesCard'
import ReviewsCard from './components/ReviewsCard'
import { fetchDestinationsCount } from '../../repository/DestinationRepo'

const AdminPanel = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const destCount = await fetchDestinationsCount();
      setData({destCount});
    }

    fetchData();
  },[]);

  if(!data) {
    return <h1>Loading...</h1>
  };

  return (
    <div className='w-full'>
      <div className='flex flex-row justify-between'>
        <DestinationsCard data={data?.destCount} />
        <ThemesCard />
        <ReviewsCard /> 
      </div>
    </div>
  )
}

export default AdminPanel