import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TreatmentsPage from './pages/Treatments';
import Footer from './Components/Footer';
import { AccessibilityWidget } from "react-accessibility";
import './App.css'
import SocialLinks from './Components/SocialLinks';

function App() {

  return (
    <div className="App">
      <SocialLinks/>
            <AccessibilityWidget />

      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/treatments" element={<TreatmentsPage/>} />

        <Route path="/contact" element={<ContactPage />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );

}

export default App;