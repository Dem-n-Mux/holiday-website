import { Button } from "antd";
import { useState, useEffect } from "react";

const data = [
  {
    mainTitle: "North",
    places: [
      {
        title: "Ladakh",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/9cf08c5b-0574-4c57-f1a2-51d0835c0f00/w=2160",
      },
      {
        title: "Kashmir",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/d4f78a14-d0df-4411-a8ba-bac8fa378500/w=2160",
      },
      {
        title: "Himachal Pradesh",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/40a71643-8543-49ba-34e7-36cbce5dd000/w=2160",
      },
    ],
  },
  {
    mainTitle: "East",
    places : [
      {
        title: "Guwahati",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/522fa274-736f-4496-d8ef-4ab6c04e7600/w=2160"
      },
      {
        title: "Andaman",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/1d13e206-3922-4b9f-992c-97304404f700/w=2160"
      },
      {
        title: "Darjeeling",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/74306ac5-08fc-44d1-2c7a-4b8bbbbde100/w=2160"
      }
    ]
  },
  {
    mainTitle: "West",
    places: [
      {
        title: "Goa",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/2cc2980c-815c-4065-6e25-606e497fd800/w=2160"
      },
      {
        title: "Gujarat",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/33acfac1-ce0b-4adc-f05f-9cfeb9a61000/w=2160"
      },
      {
        title: "Maharashtra",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/e8c668cf-fc55-432f-9c67-bd4d6e137d00/w=2160"
      }
    ]
  },
  {
    mainTitle: "South",
    places: [
      {
        title: "Kerala",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/4ee4972e-e425-4722-0b98-cf34c43aca00/w=2160"
      },
      {
        title: "Tamil Nadu",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/cd89a882-b943-4f96-7123-0773de6cb700/w=2160"
      },
      {
        title: "Lakshadweep",
        img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/891707fa-b7d3-4717-9538-58c71c285a00/w=2160"
      }
    ]
  }
];

const TrendIndia = () => {
  const [activeRegion, setActiveRegion] = useState("North");
  const [places, setPlaces] = useState(data[0].places);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRegionChange = (item) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveRegion(item.mainTitle);
      setPlaces(item.places);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="flex flex-row items-center justify-between gap-8 container max-w-full h-fit">
      <div className="flex flex-col gap-4">
        <img
          src={
            places[0].img
          }
          className="rounded-t-full rounded-b-xl max-w-lg border-b-2 pb-2"
        /> 
        <h3 className="text-2xl font-playfair text-foreground">{places[0].title}</h3>
      </div>
      <div className="flex flex-col justify-between gap-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl text-foreground font-playfair">
            Top Trending Destinations
          </h1>
          <h1 className="text-[7rem] leading-none ml-20 font-playfair text-foreground">
            India
          </h1>
        </div>

        <div className="flex flex-col gap-16 items-end justify-center">
          <div className="flex flex-row gap-4 justify-center">
            {data?.map((item, index) => (
              <Button
                size="middle"
                shape="round"
                key={index}
                className={
                  activeRegion === item.mainTitle
                    ? "bg-active text-white text-sm"
                    : "text-sm"
                }
                onClick={() => handleRegionChange(item)}
              >
                {item.mainTitle}
              </Button>
            ))}
          </div>

          <DestinationSlide places={places.slice(1)} isTransitioning={isTransitioning} />
        </div>
      </div>
    </div>
  );
};

const DestinationSlide = ({ places, isTransitioning }) => {
  return (
    <div className={`flex flex-row justify-between w-full transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      {places.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 items-start">
          <img src={item.img} className="w-[330px]" />
          <h2 className="text-2xl font-playfair text-foreground">{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default TrendIndia;
