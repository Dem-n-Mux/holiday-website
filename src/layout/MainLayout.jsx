import { Outlet } from "react-router-dom"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"

const MainLayout = () => {
  return (
    <div className="w-full bg-white font-poppins">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout