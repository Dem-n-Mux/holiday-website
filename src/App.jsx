import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AntThemeProvider from "./providers/ant-theme-provider";

import Landing from "./pages/Landing";
import AboutUs from "./pages/Aboutus";
import ThemePage from "./pages/Theme";
import Careers from "./pages/Careers";
import DestinationPage from "./pages/Destination";
import AdminPanel from "./pages/AdminPanel";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

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

            <Route element={<AuthLayout />}>
              <Route path="/admin" element={<AdminPanel />} />
            </Route>
          </Routes>
        </AntThemeProvider>
      </Router>
    </>
  );
}

export default App;
