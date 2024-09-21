import { useContext, createContext, useState, useEffect } from "react";
import { fetchInternationalDests, fetchSliderData, fetchThemeSlideData } from "../repository/HomeRepo";
import { fetchReviewData } from "../repository/ReviewRepo";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (path) => {
      setLoading(true);
      if (path === "/") {
        const slider = await fetchSliderData();
        const themeSlider = await fetchThemeSlideData();
        const intTrends = await fetchInternationalDests();
        const reviews = await fetchReviewData();
        setData({ slider, themeSlider, intTrends, reviews });
      }
      setLoading(false);
    };

    fetchData(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <MainContext.Provider value={data}>
      {loading ? <div>Loading</div> : children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
