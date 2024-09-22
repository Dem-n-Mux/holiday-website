import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const FoundingTeam = ({ data }) => {
  return (
    <div className="container w-full flex flex-col gap-16 items-center">
      <h1 className="text-7xl font-playfair text-primary">Founding Team</h1>
      <div className="w-full relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop={true}
          className="mySwiper"
        >
          {data?.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-72 h-72 rounded-full object-cover mb-4"
                />
                <h2 className="text-3xl font-playfair text-foreground">{member.name}</h2>
                <p className="text-xl font-playfair text-gray-600">{member.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2rounded-full p-2 z-10">
          <LuChevronLeft className="h-6 w-6 text-gray-600" />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 z-10">
          <LuChevronRight className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default FoundingTeam;