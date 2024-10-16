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
import {
  fetchInternationalCards,
  fetchDomesticCards,
  fetchDestinationData,
  fetchSearchBarDestinations,
} from "../repository/DestinationRepo";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { themeId, regionId, placeId } = useParams();

  useEffect(() => {
    const fetchData = async (path) => {
      setLoading(true);
      const themeData = await fetchThemeSlideData();
      const internationalCards = await fetchInternationalCards();
      const domesticCards = await fetchDomesticCards();
      if (path === "/" || path === "/home") {
        const slider = await fetchSliderData();
        const themeSlider = await fetchThemeSlideData();
        const intTrends = await fetchInternationalDests();
        const reviews = await fetchReviewData();
        const searchResults = await fetchSearchBarDestinations();
        setData({
          slider,
          themeSlider,
          intTrends,
          reviews,
          themeData,
          internationalCards,
          domesticCards,
          searchResults
        });
      }

      if (path === "/about") {
        const reviews = await fetchReviewData();
        const team = await fetchTeamData();
        setData({
          reviews,
          team,
          themeData,
          internationalCards,
          domesticCards,
        });
      }

      if (path.includes("/theme")) {
        console.log(themeId);
        const themeIdData = await fetchThemeData(themeId);
        const reviews = await fetchReviewData();
        const themePackages = await fetchThemePackages(themeId);
        setData({
          themeData,
          themeIdData,
          reviews,
          themePackages,
          internationalCards,
          domesticCards,
        });
      }

      if (path.includes("/international")) {
        const destinationData = await fetchDestinationData(false, regionId, placeId);
        const reviews = await fetchReviewData();
        setData({
          reviews,
          destinationData,
          themeData,
          internationalCards,
          domesticCards,
        });
      }

      if (path.includes("/domestic")) {
        const destinationData =  await fetchDestinationData(true, regionId, placeId);
        const reviews = await fetchReviewData();
        setData({
          reviews,
          destinationData,
          themeData,
          internationalCards,
          domesticCards,
        });
      }

      if (path === "/careers") {
        const team = await fetchTeamData();
        setData({ team, themeData, internationalCards, domesticCards });
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
