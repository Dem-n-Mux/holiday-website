import { Divider } from "antd";
import React from "react";

const OurCulture = () => {
  return (
    <div className="container flex flex-col md:flex-row w-full justify-between items-center gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-foreground font-playfair text-8xl">Our Culture</h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">& Growth Opportunities for You!</h1>
          <div className="w-full h-0 border border-black"></div>
          <p className="font-bold">Organisation Culture</p>
          <p>
            At Holiday Tribe, our culture is evolving as we navigate our startup
            journey. Our people are our most valuable assets, and together,
            we're challenging established travel norms every step of the way.
          </p>
          <p>
            Our team members, whom we affectionately refer to as "Tribers," are
            shaping a culture defined by risk-taking, boundary-pushing, and
            agile execution. At our core, we're all passionate about putting
            customers first and bringing holiday dreams to life.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Growth & Development</p>
          <p>
            We offer an ideal opportunity for candidates who are independent,
            self-starters, and eager to thrive in a startup environment. Join us
            for a fresh start and the chance to grow with us at Holiday Tribe.
          </p>
        </div>
      </div>
      <div className="w-full space-y-1">
        <img src="https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/dbf1090c-b606-41bf-b76f-0ff0a2263200/w=2160" className="max-w-md object-cover h-[400px] rounded-t-full" />
        <div className="flex flex-row gap-1">
          <img src="https://www.holidaytribe.com/assets/img/careerOne.jpg" className="h-[9.2rem]" />
          <img src="https://www.holidaytribe.com/assets/img/careerOne.jpg" className="h-[9.2rem]" />
        </div>
      </div>
    </div>
  );
};

export default OurCulture;
