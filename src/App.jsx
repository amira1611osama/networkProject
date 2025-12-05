import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Pricing from "./components/Pricing";
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
			<Pricing />
		</>
	);
}
export default App;
