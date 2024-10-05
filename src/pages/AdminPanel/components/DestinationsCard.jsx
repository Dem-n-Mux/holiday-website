import React from "react";

const DestinationsCard = ({ data }) => {
  return (
    <div className="border p-4 rounded-xl bg-secondary w-1/3">
      <div className="flex flex-col gap-2">
        <p className="text-white">
          <span className="font-bold">International Regions : </span>
          {data?.internationalRegions}
        </p>
        <p className="text-white">
          <span className="font-bold">Domestic Regions : </span>
          {data?.domesticRegions}
        </p>
        <p className="text-white">
          <span className="font-bold">International Destinations : </span>
          {data?.internationalDestCount}
        </p>
        <p className="text-white">
          <span className="font-bold">Domestic Destinations : </span>
          {data?.domesticDestCount}
        </p>
      </div>
    </div>
  );
};

export default DestinationsCard;
