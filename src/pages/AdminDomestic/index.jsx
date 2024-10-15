import React, { useEffect, useState } from "react";
import { fetchDomesticRegions } from "../../repository/DestinationRepo";
import RegionTable from "./components/RegionTable";

const AdminDomestic = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const domesticRegions = await fetchDomesticRegions();
      setData({ domesticRegions});
    };

    fetchData();
  }, []);

  if(!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full space-y-8">
      <h1 className="font-playfair text-4xl">Domestic Regions Panel</h1>
      <RegionTable data={data?.domesticRegions} />
    </div>
  );
};

export default AdminDomestic;
