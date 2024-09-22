
const AboutHero = () => {
  return (
    <div className="container max-w-full flex flex-col gap-12 justify-center mt-28">
      <div className="grid grid-cols-12 gap-10">
        <img
          className="col-span-12 md:col-span-4"
          src="https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/db3c6429-a26b-4863-c74f-9f8183ce9b00/w=2160"
        />
        <img
          className="col-span-12 md:col-span-4"
          src="https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/62104b2e-d1cc-4a6c-4129-6cede453c400/w=2160"
        />
        <img
          className="col-span-12 md:col-span-4"
          src="https://imagedelivery.net/eXm2rwRzRA14esFntmlbXw/ca86d85a-ecae-4674-00b1-6dd0a4deec00/w=2160"
        />
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-7xl font-playfair text-foreground">
            Fly High Travels.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p>
            A travel tech company operating in the leisure travel space. We
            curate & customize packages according to our customers interests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
