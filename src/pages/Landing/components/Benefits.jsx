import React from "react";

const benefitData = [
  {
    img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/6d9fe53e-7065-45e1-6628-4949289c0200/w=2160",
    title: "Innovative",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc ut condimentum tincidunt, nunc nisl aliquam.",
  },
  {
    img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/9cf368a1-9177-4b0f-2cfc-82442da19e00/w=2160",
    title: "Personalised",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc ut condimentum tincidunt, nunc nisl aliquam.",
  },
  {
    img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/f6efac17-544a-4b44-4e1b-a323ed427200/w=2160",
    title: "Customer-Focused",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc ut condimentum tincidunt, nunc nisl aliquam.",
  },
  {
    img: "https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/0d94bd6c-03f8-44f3-03bd-cf50288c7500/w=2160",
    title: "Trustworthy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc ut condimentum tincidunt, nunc nisl aliquam.",
  },
];
const Benefits = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 container max-w-full h-fit">
      <h1 className="text-7xl leading-tight text-foreground font-playfair text-center">
        Check out really cool benefits of
        <br />
        travelling with us
      </h1>

      <div className="grid grid-cols-12 gap-8">
        {benefitData.map((item, index) => (
          <div
            className="col-span-12 sm:col-span-6 md:col-span-3 items-start flex flex-col gap-4"
            key={index}
          >
            <div className="w-full">
              <img src={item.img} width={220} className="mx-auto" />
            </div>
            <h1 className="text-2xl font-light text-foreground">
              {item.title}
            </h1>
            <h1 className="text-md text-foreground">{item.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
