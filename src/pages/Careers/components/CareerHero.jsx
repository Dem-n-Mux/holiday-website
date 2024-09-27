import React from "react";

const CareerHero = () => {
  return (
    <div className="mt-32 space-y-16 w-full">
      <div className="container flex flex-col items-center gap-8">
        <h1 className="font-playfair text-7xl text-foreground">
          Join the Team!!
        </h1>
        <p className="w-3/5 text-center">
          Begin an enriching career journey with us, where your impact will
          shape the future of travel experiences. Join our team as we pioneer
          the fusion of technology and travel, crafting enduring memories that
          transcend borders and time.
        </p>
      </div>
      <div className="bg-primary w-full py-12">
        <div className="container flex flex-row justify-between items-center">
          <div>
            <h1 className="text-white font-playfair text-7xl">
              We are Hiring!
            </h1>
          </div>
          <p className="text-white text-lg text-center w-1/2">
            No matching job openings available :/ But, we are always eager to
            meet fresh talent! Please write to us at careers@flyhigh.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
