import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { useMainContext } from "../../contexts/MainContext";
import ThemeHeader from "./ThemeHeader";
import DestinationHeader from "./DestinationHeader";

const Header = () => {
  const [showThemes, setShowThemes] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);
  const data = useMainContext();
  return (
    <div className="fixed top-0 left-0 z-[999]">
      <div className="bg-primary bg-opacity-60 w-[100vw] p-2">
        <div className="flex flex-row justify-between items-center mx-auto max-w-[82rem]">
          <img src={Logo} alt="logo" className="h-12" />
          <div className="flex flex-row gap-20 justify-center">
            <Link to={"/home"} className="font-extralight text-white text-md">
              Home
            </Link>
            <Link to={"/about "} className="font-extralight text-white text-md">
              About us
            </Link>
            <Link
              to={"/careers"}
              className="font-extralight text-white text-md"
            >
              Careers
            </Link>
            <Link className="font-extralight text-white text-md">Blogs</Link>
            <div
              onClick={() => {
                if (showDestinations) setShowDestinations(false);
                setShowThemes((prev) => !prev);
              }}
              className="flex gap-2 items-center"
            >
              <h1 className="font-extralight text-white text-md">Themes </h1>
              <FaAngleDown
                className={`transition-all ${showThemes ? "rotate-180" : ""}`}
                color="white"
              />
            </div>
            <div
              onClick={() => {
                if (showThemes) setShowThemes(false);
                setShowDestinations((prev) => !prev);
              }}
              className="flex gap-2 items-center"
            >
              <h1 className="font-extralight text-white text-md">
                Destinations{" "}
              </h1>
              <FaAngleDown
                className={`transition-all ${
                  showDestinations ? "rotate-180" : ""
                }`}
                color="white"
              />
            </div>
          </div>
          <FaUser size={20} color="white" />
        </div>
      </div>
      {showThemes && <ThemeHeader data={data?.themeData} />}
      {showDestinations && <DestinationHeader IntData={data?.internationalCards} DomData={data?.domesticCards}  />}
    </div>
  );
};

export default Header;
