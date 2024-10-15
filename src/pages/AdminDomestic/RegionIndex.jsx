import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDomesticRegionPlaces } from '../../repository/DestinationRepo';
import PlacesTable from './components/PlacesTable';

const RegionIndex = () => {
  const [data, setData] = useState(null);
  const {regionId} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const placesData = await fetchDomesticRegionPlaces(regionId);
      setData({ placesData });
    }

    fetchData();
  },[]);

  if(!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='w-full space-y-8'>
      <h1 className='text-4xl font-playfair'>Places Edit Panel : {regionId}</h1>
      <PlacesTable data={data?.placesData} regionId={regionId} />
    </div>
  )
}

export default RegionIndex