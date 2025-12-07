import heroImage from "../assets/hero-img.svg";
import "../Styles/HeroSection.css";
function HeroSection() {
	return (
		<>
			<section className="hero-section" id="hero">
				<div className="container hero-container d-flex align-items-center justify-content-between">
					<div className="content">
						<h1 data-aos="fade-down">
							<span>You're Using</span>
							Free Lite Versions of Template
						</h1>
						<p data-aos="fade-up">
							Please, purchase full version of the template to get all sections,
							features and permission to remove footer credit
						</p>
						<button type="button" class="butn" data-aos="fade-up">
							Download Now
						</button>
					</div>
					<div className="hero-image" data-aos="fade-down">
						<img src={heroImage} alt="hero section image"  data-aos="fade-down"/>
					</div>
				</div>
			</section>
		</>
	);
}
export default HeroSection;
