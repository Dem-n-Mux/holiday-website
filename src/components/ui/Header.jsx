import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-primary bg-opacity-60 p-2 z-[999]'>
      <div className='mx-auto max-w-[82rem]'>
        <div className='flex flex-row justify-between items-center'>
          <img src={Logo} alt="logo" className='h-12' />
          <div className='flex flex-row gap-20 justify-center'>
            <Link to={"/home"} className='font-extralight text-white text-md'>Home</Link>
            <Link to={"/about "} className='font-extralight text-white text-md'>About us</Link>
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
