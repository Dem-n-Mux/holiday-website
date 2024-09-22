import { useContext, createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchInternationalDests,
  fetchSliderData,
  fetchThemeSlideData,
} from "../repository/HomeRepo";
import { fetchReviewData } from "../repository/ReviewRepo";
import { fetchTeamData } from "../repository/TeamRepo";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async (path) => {
      setLoading(true);
      if (path === "/" || path === "/home") {
        const slider = await fetchSliderData();
        const themeSlider = await fetchThemeSlideData();
        const intTrends = await fetchInternationalDests();
        const reviews = await fetchReviewData();
        setData({ slider, themeSlider, intTrends, reviews });
      }

      if (path === "/about") {
        const reviews = await fetchReviewData();
        const team = await fetchTeamData();
        setData({ reviews, team });
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
