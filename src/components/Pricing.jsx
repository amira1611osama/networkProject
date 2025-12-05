import plan1 from "../assets/pricing-1.svg";
import plan2 from "../assets/pricing-2.svg";
import plan3 from "../assets/pricing-3.svg";
import "../Styles/Pricing.css"

function Pricing() {
	return (
		<>
			<div className="pricing-section">
				<div className="container pricing-container">
					<div className="section-header" data-aos="fade-down">
						<h3>Pricing Plan</h3>
						<p>
							Stop wasting time and money designing and managing a website that
							doesn’t get results. Happiness guaranteed!
						</p>
					</div>
					<div className="plans">
						<div className="plan" data-aos="fade-right">
							<div className="image">
								<img src={plan1} alt="Web Design" loading="lazy" />
							</div>
							<h4>Basic Design</h4>
							<h5>Web Design</h5>
							<span className="price">$29.00</span>
							<ul className="features">
								<li>Carefully crafted components</li>
								<li>Amazing page examples</li>
								<li>Super friendly support team</li>
								<li>Awesome Support</li>
							</ul>
              <button class="butn">Get Started</button>
						</div>
						<div className="plan popular" data-aos="fade-down">
							<div className="image">
								<img src={plan2} alt="Web Design" loading="lazy" />
							</div>
							<h4>Standard Design</h4>
							<h5>Web Development</h5>
							<span className="price">$89.00</span>
							<ul className="features">
								<li>Carefully crafted components</li>
								<li>Amazing page examples</li>
								<li>Super friendly support team</li>
								<li>Awesome Support</li>
							</ul>
              <button class="butn">Get Started</button>
						</div>
						<div className="plan" data-aos="fade-left">
							<div className="image">
								<img src={plan3} alt="Web Design" loading="lazy" />
							</div>
							<h4>Pro Design</h4>
							<h5>Design & Develop</h5>
							<span className="price">$199.00</span>
							<ul className="features">
								<li>Carefully crafted components</li>
								<li>Amazing page examples</li>
								<li>Super friendly support team</li>
								<li>Awesome Support</li>
							</ul>
              <button class="butn">Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Pricing;
