import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { BsAirplane, BsCarFront, BsHouse, BsPerson } from "react-icons/bs";
import { Button } from "antd";

const PackageListing = ({ data, id }) => {
  console.log(data);
  return (
    <div className="container w-full flex flex-col gap-24 items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-foreground opacity-50 text-7xl font-playfair">
          Our Top
        </h1>
        <h1 className="text-foreground text-8xl font-playfair">
          Recommendations
        </h1>
      </div>
      <div className="w-full border rounded-2xl p-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3.2}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="w-full"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <PackageCard item={item} id={id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const PackageCard = ({ item, id }) => {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-playfair font-light">{item.title}</h1>
      </div>
      <p className="text-sm h-8">{item.place}</p>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col gap-2 items-center">
          <BsAirplane size={20} color="blue"/>
          <p className="text-xs">{item.flights} flights</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <BsHouse   size={20} color="blue"/>
          <p className="text-xs">{item.hotels} hotels</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <BsCarFront size={20} color="blue"/>
          <p className="text-xs">{item.transfers} transfers</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <BsPerson size={20} color="blue"/>
          <p className="text-xs">{item.activities} activities</p>
        </div>
      </div>
      <img src={item.img} className="w-fit" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-xs text-secondary">Starting Price</p>
          <p className="text-2xl font-playfair">{item.price}</p>
          <p className="text-xs text-secondary">Per Person</p>
        </div>
        <Button type="primary" shape="rounded" size="medium">Explore</Button>
      </div>
    </div>
  );
};

export default PackageListing;
