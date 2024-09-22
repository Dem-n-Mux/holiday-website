import React from "react";

const WhyTravel = () => {
  return (
    <div className="container max-w-full flex flex-col gap-4">
      <h1 className="font-playfair text-lg text-foreground">
        WHY IS IT VITAL TO TRAVEL
      </h1>
      <div className="flex flex-row justify-between gap-6 w-full max-w-full items-center">
        <div className="grid grid-cols-2 gap-y-28 gap-x-10">
          <h1 className="col-span-2 text-5xl font-playfair text-black">
            Travel is not just a fun and exciting way to spend your time; it's
            also a vital component of personal growth & development.
          </h1>
          <div className="col-span-1 space-y-2">
            <h1 className="text-2xl ">Cultural immersion</h1>
            <p>
              Travel exposes you to new cultures, customs, and ways of life
              which broadens your perspective and helps you appreciate the
              diversity of human experiences.
            </p>
          </div>
          <div className="col-span-1 space-y-2">
            <h1 className="text-2xl">Increases innovation</h1>
            <p>
              Traveling often requires you to think on your feet and come up
              with creative solutions to unexpected challenges. This can improve
              your problem-solving skills and boost your creativity.
            </p>
          </div>
        </div>
        <div>
          <img className="max-w-sm" src="https://www.holidaytribe.com/assets/img/why-2.png" />
        </div>
      </div>
    </div>
  );
};

export default WhyTravel;
