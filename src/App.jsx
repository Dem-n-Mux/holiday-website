import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Landing from "./pages/Landing";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" index element={<Landing />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
