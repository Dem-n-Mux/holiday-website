import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import { LuStar } from "react-icons/lu";

const ReviewCarousel = ({ data }) => {
  return (
    <div className="container max-w-full relative">
      <div className="absolute left-0 top-12 transform space-y-2 z-[990]">
        <h1 className="text-6xl font-playfair text-foreground">Hear From</h1>
        <h1 className="text-7xl font-playfair text-foreground ml-4">Our Happiest</h1>
        <h1 className="text-6xl font-playfair text-foreground ml-8">travellers</h1>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ReviewSlide = ({ item }) => {
  return (
    <div className="flex flex-row justify-between items-end w-full">
      <div className="flex flex-col gap-6 items-start w-1/2 mb-12">
        <div className="flex flex-row items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <LuStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <h1 className="text-2xl font-light font-poppins text-foreground">
          {item.title}
        </h1>
        <h1 className="text-sm font-extralight w-3/4 font-poppins text-foreground">
          {item.desc}
        </h1>
        <h1 className="text-3xl font-light font-poppins text-foreground">
          {item.author.toUpperCase()}
        </h1>
      </div>
      <div className="max-w-md rounded-full overflow-hidden p-2 border-2">
        <img
          src={item.img}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default ReviewCarousel;
