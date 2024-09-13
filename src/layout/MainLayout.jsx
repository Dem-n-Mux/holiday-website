import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import MainContextProvider from "../contexts/MainContext";

const MainLayout = () => {
  return (
    <div className="w-full bg-white font-poppins">
      <MainContextProvider>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
      </MainContextProvider>
    </div>
  );
};

export default MainLayout;
