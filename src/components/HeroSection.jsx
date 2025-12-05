import heroImage from "../assets/hero-img.svg";
import "../Styles/HeroSection.css";
function HeroSection() {
	return (
		<>
			<div className="hero-section">
				<div className="container hero-container d-flex align-items-center justify-content-between">
					<div className="content">
						<h1 data-aos="fade-right">
							<span>You're Using</span>
							Free Lite Versions of Template
						</h1>
						<p data-aos="fade-right">
							Please, purchase full version of the template to get all sections,
							features and permission to remove footer credit
						</p>
						<button type="button" class="butn" data-aos="fade-up">
							Download Now
						</button>
					</div>
					<div className="hero-image" data-aos="fade-right">
						<img src={heroImage} alt="hero section image"  data-aos="fade-down-left"/>
					</div>
				</div>
			</div>
		</>
	);
}
export default HeroSection;
