import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AntThemeProvider from "./providers/ant-theme-provider";

import Landing from "./pages/Landing";
import AboutUs from "./pages/Aboutus";
import ThemePage from "./pages/Theme";
import Careers from "./pages/Careers";
import DestinationPage from "./pages/Destination";
import AdminPanel from "./pages/AdminPanel";
import ReviewPanel from "./pages/AdminReviews";
import ThemesPanel from "./pages/AdminTheme";
import PackagesPanel from "./pages/AdminPackages";
import AdminTeam from "./pages/AdminTeams";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import AdminDomestic from "./pages/AdminDomestic";
import RegionIndex from "./pages/AdminDomestic/RegionIndex";
import PackageIndex from "./pages/AdminDomestic/PackageIndex";
import AdminInternational from "./pages/AdminInternational";
import IntRegionIndex from "./pages/AdminInternational/IntRegionIndex";
import IntPackageIndex from "./pages/AdminInternational/IntPackageIndex";

function App() {
  return (
    <>
      <Router>
        <AntThemeProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" index element={<Landing />} />
              <Route path="/home" element={<Landing />} />
              <Route path="/about" element={<AboutUs /> } />
              <Route path="/careers" element={<Careers />} />
              <Route path="/theme/:themeId" element={<ThemePage />} />
              <Route path="/domestic/:regionId/:placeId" element={<DestinationPage />} />
              <Route path="/international/:regionId/:placeId" element={<DestinationPage />} />
            </Route>

            <Route path="/admin" element={<AuthLayout />}>
              <Route index element={<AdminPanel />} />
              <Route path="reviews" element={<ReviewPanel />} />
              <Route path="themes" element={<ThemesPanel />} />
              <Route path="themes/:themeId" element={<PackagesPanel />} />
              <Route path="team" element={<AdminTeam />} />
              <Route path="domestic" element={<AdminDomestic />} />
              <Route path="international" element={<AdminInternational />} />
              <Route path="domestic/region/:regionId" element={<RegionIndex />} />
              <Route path="international/region/:regionId" element={<IntRegionIndex />} />
              <Route path="domestic/package/:regionId/:placeId/:docId" element={<PackageIndex />} />
              <Route path="international/package/:regionId/:placeId/:docId" element={<IntPackageIndex />} />
            </Route>
          </Routes>
        </AntThemeProvider>
      </Router>
    </>
  );
}

export default App;
