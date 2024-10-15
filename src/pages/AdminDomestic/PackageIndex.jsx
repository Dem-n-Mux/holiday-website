import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDomesticPlacePackage } from '../../repository/DestinationRepo';
import PackageTable from './components/PackageTable';

const PackageIndex = () => {
  const {regionId, placeId, docId} = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const packageData = await fetchDomesticPlacePackage(regionId, placeId, docId);
      setData({ packageData });
    }

    fetchData();
  },[]);

  if(!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='w-full space-y-8'>
      <h1 className='text-4xl font-playfair'>Destination Package : {placeId}</h1>
      <PackageTable data={data?.packageData} regionId={regionId} placeId={placeId} docId={docId} />
    </div>
  )
}

export default PackageIndex