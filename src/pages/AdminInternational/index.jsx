import React, { useEffect, useState } from "react";
import { fetchInternationalRegions } from "../../repository/DestinationRepo";
import RegionTable from "./components/RegionTable";

const AdminInternational = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const internationalData = await fetchInternationalRegions();
      setData({ internationalData });
    };

    fetchData();
  }, []);

  if(!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full space-y-8">
      <h1 className="font-playfair text-4xl">International Regions Panel</h1>
      <RegionTable data={data?.internationalData} />
    </div>
  );
};

export default AdminInternational;
