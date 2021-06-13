import React from "react";
import WhyMoveEasy from "./_WhyMovEasy";
import "./WhyWrapper.scss";
import whyImage from "../../assets/why1.svg";
const WhyWrapper = () => {
	return (
		<div className="why-wrapper" id="why-wrapper">
			<h1 className="">Why MoveEasy</h1>
			<div className="why-card">
				<WhyMoveEasy image={whyImage} why="Biding System" />
				<WhyMoveEasy image={whyImage} why="Safe & Secure" />
				<WhyMoveEasy image={whyImage} why="No Middlemen" />
				<WhyMoveEasy image={whyImage} why="Best Rates" />
			</div>
		</div>
	);
};

export default WhyWrapper;
