import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Button, Select } from "antd";

const Carousel = ({ sliderData, searchOptions }) => {
  const navigate = useNavigate();

  const onSearchSelect = (e) => {
    navigate(e);
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
      >
        {sliderData?.map((item, index) => (
          <SwiperSlide key={index}>
            <DestinationSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 right-20 z-[500]">
        <Select
          size="large"
          showSearch
          options={searchOptions}
          onChange={onSearchSelect}
          placeholder="Where to?"
          className="w-[400px] bg-primary opacity-60 rounded-full border-none"
        />
      </div>
    </div>
  );
};

const DestinationSlide = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="h-[85vh] w-full">
        <img src={item.img} alt={item.destName} />
      </div>
      <div className="space-y-10 top-1/3 left-36 absolute">
        <h3 className="text-8xl font-playfair text-white">{item.destName}</h3>
        <Button
          onClick={() => navigate(item.linkTo)}
          size="large"
          type="primary"
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
