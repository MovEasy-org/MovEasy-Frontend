import React from "react";
import "./_FeatureCard.scss";
const _FeatureCard = ({ image, heading, para }) => {
	return (
		<div className="feature-container" id="feature-container">
			<div className="feature-image">
				<img src={image} alt="images"></img>
			</div>
			<div className="feature-content">
				<h4 className="feature-head">{heading}</h4>
				<p className="feature-para">{para}</p>
			</div>
		</div>
	);
};

export default _FeatureCard;
