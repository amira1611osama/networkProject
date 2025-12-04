import heroImage from "../assets/hero-img.svg";
import "../Styles/HeroSection.css";

function HeroSection() {
	return (
		<>
			<div className="hero-section">
				<div className="container hero-container d-flex align-items-center justify-content-between">
					<div className="content">
						<h1>
							<span>You're Using</span>
							Free Lite Versions of Template
						</h1>
						<p>
							Please, purchase full version of the template to get all sections,
							features and permission to remove footer credit
						</p>
						<button>Download Now</button>
					</div>
					<div className="hero-image">
						<img src={heroImage} alt="hero section image" />
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
