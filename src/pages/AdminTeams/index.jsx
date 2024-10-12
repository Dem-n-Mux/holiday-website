import React, { useEffect, useState } from 'react'
import { fetchTeamData } from '../../repository/TeamRepo';
import TeamListing from './components/TeamListing';

const AdminTeam = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const teamData = await fetchTeamData();
      setData({ teamData });
    }
    
    fetchData();
  }, []);

  if(!data) { 
    return <h1>Loading...</h1>;
  }

  return (
    <div className='w-full space-y-8'>
      <h1 className='font-playfair text-4xl'>Team Panel</h1>
      <TeamListing data={data?.teamData} />
    </div>
  )
}

export default AdminTeam