import "../Styles/Contact.css";
import { FaCommentDots, FaPhone, FaEnvelope, FaUser } from "react-icons/fa";
function Contact() {
	return (
		<section className="contact-form" id="contact">
			<div className="container contact-container">
				<form data-aos="fade-up">
					<div className="form-row">
						<div className="form-group">
							<label>Name</label>
							<div className="input-box">
								<input type="text" placeholder="Name" />
								<FaUser className="icon" />
							</div>
						</div>

						<div className="form-group">
							<label>Email</label>
							<div className="input-box">
								<input type="email" placeholder="Email" />
								<FaEnvelope className="icon" />
							</div>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label>Number</label>
							<div className="input-box">
								<input type="text" placeholder="Number" />
								<FaPhone />
							</div>
						</div>

						<div className="form-group">
							<label>Subject</label>
							<div className="input-box">
								<input type="text" placeholder="Subject" />
								<FaCommentDots />
							</div>
						</div>
					</div>

					<div className="form-group">
						<label>Message</label>
						<div className="input-box textarea-box">
							<textarea rows="5" placeholder="Message"></textarea>
							<i className="fa-regular fa-comment-dots icon" />
						</div>
					</div>

					<button type="submit" className="butn">
						Submit <i className="fa-solid fa-paper-plane" />
					</button>
				</form>
				<div className="get-in-touch">
					<h6 data-aos="fade-down">Get in touch</h6>
					<p data-aos="fade-down">
						Stop wasting time and money designing and managing a website that
						doesn’t get results. Happiness guaranteed!
					</p>
					<div className="data phone" data-aos="fade-down">
						<div className="icon">
							<i class="fa-solid fa-phone" />
						</div>
						<p>0045939863784</p>
					</div>
					<div className="data email" data-aos="fade-down">
						<div className="icon">
							<i class="fa-solid fa-envelope" />
						</div>
						<p>yourmail@gmail.com</p>
					</div>
					<div className="data address" data-aos="fade-up">
						<div className="icon">
							<i class="fa-solid fa-location-dot" />
						</div>
						<p>John's House, 13/5 Road, Sidny United State Of America</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
