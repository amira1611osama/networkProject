import aboutImage from "../assets/about-img.jpg";
import "../Styles/About.css";

function About() {
	return (
		<>
			<div className="about-section">
				<div className="container about-container d-flex align-items-center justify-content-between">
					<div className="about-image">
						<img src={aboutImage} alt="About Image" loading="lazy" />
					</div>
					<div className="content">
						<h2>
							<span>The future of designing</span> starts here
						</h2>
						<p>
							Stop wasting time and money designing and managing a website that
							doesn’t get results. Happiness guaranteed, Stop wasting time and
							money designing and managing a website that doesn’t get results.
							Happiness guaranteed,
						</p>
						<div className="stats">
							<div className="happy-client">
								<span>123M</span>
								<p>Happy Client</p>
							</div>
							<hr />
							<div className="project-done">
								<span>1434K</span>
								<p>Project Done</p>
							</div>
							<hr />
							<div className="award-win">
								<span>134K</span>
								<p>Award Win</p>
							</div>
						</div>
						<button type="button" class="btn">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
