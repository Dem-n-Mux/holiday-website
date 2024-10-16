import React from "react";
import { useLocation } from "react-router-dom";
import { useMainContext } from "../../contexts/MainContext";
import HeroIntro from "./components/HeroIntro";
import ReviewCarousel from "../../components/global/ReviewCarousel";
import PackageListing from "./components/PackageListing";
import DestinationContact from "../../components/global/DestinationContact";

const DestinationPage = () => {
  const data = useMainContext();
  const location = useLocation();
  const destinationData = location.state;

  return (
    <div className="space-y-16">
      <HeroIntro data={data?.destinationData?.destinationData} />
      <PackageListing data={data?.destinationData?.packageData} id={"abc"} />
      <DestinationContact />
      <ReviewCarousel data={data?.reviews} />
    </div>
  );
};

export default DestinationPage;
