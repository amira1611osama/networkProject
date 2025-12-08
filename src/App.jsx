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
import ScrollToTopBtn from "./components/ScrollToTopBtn";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Download />
      <Pricing />
      <OurTeam />
      <Download />
      <Contact />
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}
export default App;
