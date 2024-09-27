import { Button, Input } from 'antd'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full p-2 mt-16'>
      <div className='mx-auto max-w-[82rem] border-t border-b px-4 py-8 space-y-12 border-primary'>
        <div className='grid grid-cols-10 gap-4'>
          <div className='col-span-10 md:col-span-5 space-y-8'>
            <h1 className='font-playfair text-7xl text-foreground font-light'>Contact Us</h1>
            <p className='font-playfair text-foreground text-3xl'>Looking for a travel buddy? We have a<br/> community to get you one.</p>
          </div>
          <div className='col-span-10 md:col-span-5 h-full flex flex-col gap-4 justify-between'>
            <Input placeholder='Enter your name'/>
            <Input placeholder='Enter your email'/>
            <Input placeholder='Enter your message'/>
            <Button>Submit</Button>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-6'> 
          <div className='col-span-12 md:col-span-6 space-y-4 flex flex-col'>
            <img src={Logo} alt="logo" className='w-44' />
            <p className='text-sm'>Your convenience is our priority. We <br/> provide our customers with best service for <br/> a perfect holiday experience!</p>
            <div className='flex flex-row gap-6 w-full'>
              <FaInstagram size={35} className='text-foreground' />
              <FaWhatsapp size={35} className='text-foreground' />
              <FaFacebook size={35} className='text-foreground' />
              <FaYoutube size={35} className='text-foreground' />
              <FaLinkedin size={35} className='text-foreground' />
            </div>
          </div>
          <div className='col-span-6 md:col-span-2 flex flex-col gap-6'>
            <Link to="/theme/family">Family</Link>
            <Link to="/theme/romantic">Romantic</Link>
            <Link to="/theme/wildlife">Wildlife</Link>
            <Link to="/theme/cruise">Cruise</Link>
            <Link to="/theme/beach">Beach</Link>
          </div>
          <div className='col-span-6 md:col-span-2 flex flex-col gap-6'>
            <Link to="/home">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
          <div className='col-span-6 md:col-span-2 flex flex-col gap-6'>
            <Link to="/terms-conditions">Terms and Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookies-policy">Cookies Policy</Link>
            <Link to="mailto:contact@flyhigh.com">contact@flyhigh.com</Link>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-3xl my-8 text-center'>
        <p className='text-sm'>Holiday Web formerly known as OOO Forever HOLIDAY TRIBE PRIVATE LIMITED. All rights reserved © 2024</p>
        <p className='text-sm'>329, 2nd Floor, Corporate Office, Phase IV, Udyog Vihar, Sector 19, Gurugram, Haryana 122016</p>
      </div>
    </div>
  )
}

export default Footer