import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Topbar from "./Topbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
