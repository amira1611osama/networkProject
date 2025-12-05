import aboutImage from "../assets/about-img.jpg";
import "../Styles/About.css";
function About() {
	return (
		<div className="about-section">
			<div className="container about-container d-flex align-items-center justify-content-between">
				<div className="about-image" data-aos="fade-right">
					<img src={aboutImage} alt="About Image" loading="lazy" />
				</div>
				<div className="content">
					<h2 data-aos="fade-down">
						<span>The future of designing</span> starts here
					</h2>
					<p data-aos="fade-left">
						Stop wasting time and money designing and managing a website that
						doesn’t get results. Happiness guaranteed, Stop wasting time and
						money designing and managing a website that doesn’t get results.
						Happiness guaranteed,
					</p>
					<div className="stats" data-aos="fade-left">
						<div className="happy-client">
							<span>123M</span>
							<p>Happy Client</p>
						</div>
						<span className="divider"></span>
						<div className="project-done">
							<span>1434K</span>
							<p>Project Done</p>
						</div>
						<span className="divider"></span>
						<div className="award-win">
							<span>134K</span>
							<p>Award Win</p>
						</div>
					</div>
					<button type="button" class="butn" data-aos="fade-up">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
}
export default About;
