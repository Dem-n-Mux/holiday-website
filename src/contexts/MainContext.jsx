import { useContext, createContext, useState, useEffect } from "react";
import { fetchSliderData } from "../repository/HomeRepo";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async (path) => {
      if(path === "/") {
        const slider = await fetchSliderData();
        setData({slider});
      }
    }

    fetchData(window.location.pathname);
  },[window.location.pathname]);

  return (
    <MainContext.Provider value={data}>{children}</MainContext.Provider>
  );
};

export default MainContextProvider;