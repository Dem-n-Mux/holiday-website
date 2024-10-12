import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchThemePackages } from "../../repository/ThemeRepo";
import PackageListing from "./components/PackageListing";

const PackagesPanel = () => {
  const { themeId } = useParams();
  const [data, setData] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const packageData = await fetchThemePackages(themeId);
      setData({ packageData });
    }

    fetchData();
  }, []);

  if(!data){
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full space-y-8">
      <h1 className="font-playfair text-4xl">Theme Packages - {themeId}</h1>
      <PackageListing data={data?.packageData} themeName={themeId} />
    </div>
  )
}

export default PackagesPanel