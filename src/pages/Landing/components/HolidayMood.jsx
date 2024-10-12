import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const HolidayMood = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 container max-w-full h-fit">
      <h1 className="text-6xl text-foreground font-playfair">
        What's your holiday mood?
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="w-full" 
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={`/theme/${item.slug}`} className="flex flex-col items-center justify-center p-4 w-full">
              <div className="w-64 h-64 rounded-full overflow-hidden p-2 border-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-normal mt-4">{item.title}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HolidayMood;
