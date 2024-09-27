import React from "react";
import CareerHero from "./components/CareerHero";
import { useMainContext } from "../../contexts/MainContext";
import WhatWeDo from "../Aboutus/components/WhatWeDo";
import FoundingTeam from "../Aboutus/components/FoundingTeam";
import WhyJoinUs from "./components/WhyJoinUs";
import OurCulture from "./components/OurCulture";

const Careers = () => {
  const data = useMainContext();
  return (
    <div className="space-y-16">
      <CareerHero />
      <WhyJoinUs />
      <OurCulture />
      <FoundingTeam data={data?.team} />
      <WhatWeDo />
    </div>
  );
};

export default Careers;
