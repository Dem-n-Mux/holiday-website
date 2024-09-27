import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";

const WhyJoinUs = () => {
  return (
    <div className="container border rounded-xl border-black py-16 ">
      <div className="flex flex-col gap-10 items-center px-8">
        <h1 className="font-playfair text-7xl text-foreground">Why join Us?</h1>
        <div className="grid grid-cols-6 gap-10 w-full">
          <div className="flex flex-col gap-6 items-center col-span-2">
            <img className="w-56" src="https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/76d867ff-d308-4a92-1d65-cd93b2dd4400/w=2160" />
            <div className="flex gap-2 items-center">
              <FaLocationDot color="black" size={30} />
              <p className="font-bold text-lg">Flexi Working</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoHeart color="black" size={30} />
              <p className="font-bold text-lg">Healthcare Benefits</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center col-span-2">
            <img className="w-56" src="https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/525b87a8-3b17-471f-ad3e-b9cb682c0700/w=2160" />
            <div className="flex gap-2 items-center">
              <FaLocationDot color="black" size={30} />
              <p className="font-bold text-lg">Great Incentives Policy</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoHeart color="black" size={30} />
              <p className="font-bold text-lg">ESOPs</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center col-span-2">
            <img className="w-56" src="https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/695afa74-5e08-4f7e-da5e-6e56b368d900/w=2160" />
            <div className="flex gap-2 items-center">
              <FaLocationDot color="black" size={30} />
              <p className="font-bold text-lg">Team Offsites</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoHeart color="black" size={30} />
              <p className="font-bold text-lg">Engaging organizational ethos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
