import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AntThemeProvider from "./providers/ant-theme-provider";
import MainLayout from "./layout/MainLayout";
import Landing from "./pages/Landing";
import AboutUs from "./pages/Aboutus";
import ThemePage from "./pages/Theme";

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
              <Route path="/theme/:themeId" element={<ThemePage />} />
            </Route>
          </Routes>
        </AntThemeProvider>
      </Router>
    </>
  );
}

export default App;
