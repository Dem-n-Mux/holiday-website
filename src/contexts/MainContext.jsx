import { useContext, createContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchInternationalDests,
  fetchSliderData,
  fetchThemeSlideData,
} from "../repository/HomeRepo";
import { fetchReviewData } from "../repository/ReviewRepo";
import { fetchTeamData } from "../repository/TeamRepo";
import { fetchThemeData, fetchThemePackages } from "../repository/ThemeRepo";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const {themeId} = useParams();

  useEffect(() => {
    const fetchData = async (path) => {
      setLoading(true);
      const themeData = await fetchThemeSlideData();
      if (path === "/" || path === "/home") {
        const slider = await fetchSliderData();
        const themeSlider = await fetchThemeSlideData();
        const intTrends = await fetchInternationalDests();
        const reviews = await fetchReviewData();
        setData({ slider, themeSlider, intTrends, reviews, themeData });
      }

      if (path === "/about") {
        const reviews = await fetchReviewData();
        const team = await fetchTeamData();
        setData({ reviews, team, themeData });
      }

      if(path.includes("/theme")) {
        console.log(themeId);
        const themeIdData = await fetchThemeData(themeId);
        const reviews = await fetchReviewData();
        const themePackages = await fetchThemePackages(themeId);
        setData({ themeData, themeIdData, reviews, themePackages });
      }

      if(path === "/careers") {
        const team = await fetchTeamData();
        setData({ team, themeData });
      }

      setLoading(false);
    };
    fetchData(location.pathname);
  }, [location.pathname]);

  return (
    <MainContext.Provider value={data}>
      {loading ? <div>Loading</div> : children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
