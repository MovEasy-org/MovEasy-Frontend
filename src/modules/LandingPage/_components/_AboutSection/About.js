import React from "react";
import AboutImage from "../../assets/about.svg";
import "./About.scss";
const About = () => {
	return (
		<div className="about-container wrapper" id="about-container">
			<div className="about-image">
				<img src={AboutImage} alt="" />
			</div>
			<div className="about-content">
				<h1 className="about-head">About Us</h1>
				<p className="about-para">
					MovEasy A platform for imparting excellent services in packing and
					moving segments. we've designed our services proficiently to satisfy
					the utmost customer satisfaction, we make it our High priority to
					deliver reliable, efficient & Hassle-free moving. We interface
					customers to the most effective and most expert transporters. We give
					the foremost credible and affordable rates employing a bidding system.
					From booking our services to the delivery of your goods, we are
					proactive, fast and easily good at our work.
				</p>
			</div>
		</div>
	);
};

export default About;
