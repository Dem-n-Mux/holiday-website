import React, { useEffect, useState } from 'react'
import { fetchAllThemeData } from '../../repository/ThemeRepo';
import ThemeListing from './components/ThemeListing';

const ThemesPanel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const themeData = await fetchAllThemeData();
      setData({ themeData });
    }

    fetchData();
  }, [])

  if(!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='space-y-8 w-full'>
      <h1 className='font-playfair text-4xl'>Themes Panel</h1>
      <ThemeListing data={data?.themeData} />
    </div>
  )
}

export default ThemesPanel