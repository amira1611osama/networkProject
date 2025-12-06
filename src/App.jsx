import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Download from "./components/Download";
import Contact from "./components/Contact";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="download">
        <Download />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="ourteam">
        <OurTeam />
      </div>
      <div id="download">
        <Download />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
export default App;
