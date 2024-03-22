import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TreatmentsPage from "./pages/Treatments";
import Footer from "./Components/Footer";
import { AccessibilityWidget } from "react-accessibility";
import "./App.css";
import Crystals from "./pages/treatments/Crystals"
import SocialLinks from "./Components/SocialLinks";
import Babies from "./pages/treatments/Babies";
import Pregnanat from "./pages/treatments/Pregnant"
import Cups from "./pages/treatments/Cups"
import Bamboo from "./pages/treatments/Bamboo"
import Sweedish from "./pages/treatments/Sweedish"
import Thai from "./pages/treatments/Thai"
import Candles from "./pages/treatments/Candles"
import Reflexology from "./pages/treatments/Reflexology"
import Face from "./pages/treatments/Face"
import Sound from "./pages/treatments/Sound"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <div className="App">
      <SocialLinks />
      <AccessibilityWidget />

      <BrowserRouter>
      <ScrollToTop />

        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/babies" element={<Babies />} />
          <Route path="/thai" element={<Thai />} />
          <Route path="/sound" element={<Sound />} />
          <Route path="/pregnant" element={<Pregnanat />} />
          <Route path="/cups" element={<Cups />} />
          <Route path="/crystals" element={<Crystals />} />
          <Route path="/bamboo" element={<Bamboo />} />
          <Route path="/sweedish" element={<Sweedish />} />
          <Route path="/candles" element={<Candles />} />
          <Route path="/reflexology" element={<Reflexology />} />
          <Route path="/face" element={<Face />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
