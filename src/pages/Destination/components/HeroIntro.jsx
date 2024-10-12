import { Button } from "antd";
import Marquee from "react-fast-marquee";

const HeroIntro = ({ data }) => {
  return (
    <div className="w-full">
      <div className="max-w-full relative">
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2 flex flex-col gap-4">
          <h1 className="text-white text-8xl font-playfair">{data?.title}</h1>
          <Button size="large" shape="round">
            Get Quotes
          </Button>
        </div>
        <video
          src={data?.vid}
          className="h-[450px] object-cover w-full"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="bg-primary p-4">
        <Marquee pauseOnHover={true} speed={50}>
          <div className="flex gap-4 ml-4">
            {data?.imgArr?.map((item, index) => (
              <img className="w-64 h-64 rounded-xl" key={index} src={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HeroIntro;
