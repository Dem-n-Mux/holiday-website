import React from 'react'
import { useMainContext } from '../../contexts/MainContext';

const Landing = () => {
  const data = useMainContext();
  console.log(data);
  return (
    <div>Landing</div>
  )
}

export default Landing;