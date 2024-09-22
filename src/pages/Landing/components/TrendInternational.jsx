import { Button } from "antd";
import React, { useEffect, useState } from "react";

const TrendInternational = ({ data = [] }) => {
  const [activeRegion, setActiveRegion] = useState("asia");
  const [places, setPlaces] = useState(data[0]?.places || []);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRegionChange = (item) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveRegion(item.region);
      setPlaces(item.places);
      setIsTransitioning(false); 
    }, 500); 
  };
  
  return (
    <div className="flex flex-col items-center justify-center gap-8 container max-w-full h-fit">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl text-foreground font-playfair">
          Top Trending Destinations
        </h1>
        <h1 className="text-[7rem] leading-none ml-20 font-playfair text-foreground">
          International
        </h1>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-row gap-4 justify-center ">
          {data?.map((item, index) => (
            <Button
              size="large"
              shape="round"
              key={index}
              className={
                activeRegion === item.region
                  ? "bg-active text-white text-lg"
                  : "text-lg"
              }
              onClick={() => handleRegionChange(item)}
            >
              {item.regionData.title}
            </Button>
          ))}
        </div>

        <DestinationSlide places={places} isTransitioning={isTransitioning} />
      </div>
    </div>
  );
};

const DestinationSlide = ({ places, isTransitioning }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center gap-40 w-full transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-1/4 flex flex-col items-center gap-4 mb-40">
        <img
          src={places[0]?.values.img}
          alt={places[0]?.values.title}
          className="rounded-full w-[240px] h-[240px]"
        />
        <h1 className="text-4xl text-foreground font-playfair">
          {places[0]?.values.title}
        </h1>
      </div>
      <div className="w-1/2 flex flex-col items-start gap-4">
        <img
          src={places[1]?.values.img}
          alt={places[1]?.values.title}
          className="rounded-t-full rounded-b-xl w-[500px] h-[500px] border-b-2 pb-2"
        />
        <h1 className="text-4xl text-foreground font-playfair">
          {places[1]?.values.title}
        </h1>
      </div>
      <div className="w-1/4 flex flex-col items-center gap-4 mt-40">
        <h1 className="text-4xl text-foreground font-playfair">
          {places[2]?.values.title}
        </h1>
        <img
          src={places[2]?.values.img}
          alt={places[2]?.values.title}
          className="rounded-full w-[240px] h-[240px]"
        />
      </div>
    </div>
  );
};

export default TrendInternational;
