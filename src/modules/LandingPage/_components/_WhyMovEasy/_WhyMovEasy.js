import React from "react";
import "./_WhyMovEasy.scss";
const _WhyMovEasy = ({ image, why }) => {
	return (
		<div className="why-container">
			<img src={image} alt="imagess" />
			<h5>{why}</h5>
		</div>
	);
};

export default _WhyMovEasy;
