import React from "react";
import "./_WhyMovEasy.scss"
const _WhyMovEasy = ({image,why}) => {
	return (
		<div className="why-container">
		<img src={image} alt="imagess" />
		<h4>{why}</h4>
		</div>
	);
};

export default _WhyMovEasy;
