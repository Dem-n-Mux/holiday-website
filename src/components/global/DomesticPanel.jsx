import React from "react";
import { Link } from "react-router-dom";

const DomesticPanel = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 h-screen overflow-y-auto">
      {data.map((region, index) => (
        <div key={index} className="space-y-2">
          <h1 className="text-xl font-bold">{region.title}</h1>
          <div className="flex flex-row gap-6 flex-wrap">
            {region.places.map((place, index) => (
              <Link
                to={`/domestic/${region.id}/${place.title.toLowerCase()}`}
                state={place}
                key={index}
                className="flex flex-col items-center gap-1"
              >
                <img
                  src={place.img}
                  className="w-40 h-40 rounded-full p-2 border"
                />
                <h4 className="font-playfair text-lg font-light">
                  {place.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DomesticPanel;
