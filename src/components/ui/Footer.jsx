import { Button, Input } from 'antd'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className='w-full p-2'>
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
          <div className='col-span-3 space-y-4 flex flex-col'>
            <img src={Logo} alt="logo" className='w-44' />
            <p className='text-sm'>Your convenience is our priority. We <br/> provide our customers with best service for <br/> a perfect holiday experience!</p>
            <div className='flex flex-row justify-between w-full'>
              <FaInstagram size={35} className='text-foreground' />
              <FaWhatsapp size={35} className='text-foreground' />
              <FaFacebook size={35} className='text-foreground' />
              <FaYoutube size={35} className='text-foreground' />
              <FaLinkedin size={35} className='text-foreground' />
            </div>
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