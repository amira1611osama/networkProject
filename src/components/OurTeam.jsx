import React from "react";
import "../Styles/OurTeam.css";
import Team1 from "../assets/team-1.png";
import Team2 from "../assets/team-2.png";
import Team3 from "../assets/team-3.png";
import Team4 from "../assets/team-4.png";

import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaGithubAlt,
} from "react-icons/fa";

function OurTeam() {
	const teamMembers = [
		{ name: "Gray Simon", role: "Frontend Developer", img: Team1 },
		{ name: "John Doe", role: "Creative Designer", img: Team2 },
		{ name: "David Endow", role: "Product Designer", img: Team3 },
		{ name: "Jonathon Smith", role: "Creative Designer", img: Team4 },
	];

	const socialIcons = [
		{ icon: <FaFacebookF />, link: "#" },
		{ icon: <FaInstagram />, link: "#" },
		{ icon: <FaLinkedinIn />, link: "#" },
		{ icon: <FaGithubAlt />, link: "#" },
	];

	return (
		<section className="OurTeam-section py-5">
			<div className="container">
				<header className="title-ourTeam pb-4">
					<h3 data-aos="fade-right">Our Team</h3>
					<p data-aos="fade-left">
						Stop wasting time and money designing and managing a website that
						doesn’t get results. Happiness guaranteed!
					</p>
				</header>

				<div className="cards">
					{teamMembers.map((member, idx) => (
						<div
							className="card p-4"
							data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
							key={idx}>
							<div className="image-ourTeam">
								<img
									src={member.img}
									className="card-img-top rounded"
									alt={member.name}
								/>
							</div>
							<div className="card-body text-center">
								<h5 className="card-title fw-bold">{member.name}</h5>
								<p className="card-text">{member.role}</p>
								<div className="icons-ourTeam d-flex justify-content-center gap-2">
									{socialIcons.map((item, i) => (
										<div className="circle-icon" key={i}>
											<a href={item.link}>{item.icon}</a>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default OurTeam;
