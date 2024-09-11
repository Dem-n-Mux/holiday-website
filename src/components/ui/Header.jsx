import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='w-full bg-primary p-2'>
      <div className='mx-auto max-w-[82rem]'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='font-semibold text-2xl text-white'>Fly High Travels</h1>
          <div className='flex flex-row gap-20 justify-center'>
            <Link to={"/"} className='font-extralight text-white text-md'>Home</Link>
            <Link className='font-extralight text-white text-md'>About us</Link>
            <Link className='font-extralight text-white text-md'>Careers</Link>
            <Link className='font-extralight text-white text-md'>Blogs</Link>
            <Link className='font-extralight text-white text-md'>Themes </Link>
            <Link className='font-extralight text-white text-md'>Destinations</Link>
          </div>
          <FaUser size={20} color='white'/>
        </div>
      </div>
    </div>
  )
}

export default Header