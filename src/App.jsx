import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Home/Home";
import Layout from "./Layout";
import SolarZatkaProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/product" element={<SolarZatkaProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
