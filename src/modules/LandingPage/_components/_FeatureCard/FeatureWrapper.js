import React from "react";
import FeatureCard from "./_FeatureCard";
import "./FeatureWrapper.scss";
const index = () => {
	return (
		<>
			<div className="feature-wrapper">
				<div>
					<h1 className="main-head">Need Something To Be Done</h1>
				</div>
				<div className="feature-card-inner-wrapper">
					<FeatureCard
						image={
							"https://st2.depositphotos.com/1189140/8612/i/600/depositphotos_86129754-stock-photo-move-lots-of-cardboard-boxes.jpg"
						}
						heading="Office Relocation"
						para="MovEasy provides the efficient office relocation that you need."
					/>
					<FeatureCard
						image={
							"https://st2.depositphotos.com/1189140/8612/i/600/depositphotos_86129754-stock-photo-move-lots-of-cardboard-boxes.jpg"
						}
						heading="Residential Shifting"
						para="MovEasy renders specialized services for house shifting."
					/>
					<FeatureCard
						image={
							"https://st2.depositphotos.com/1189140/8612/i/600/depositphotos_86129754-stock-photo-move-lots-of-cardboard-boxes.jpg"
						}
						heading="Shop Shifting"
						para="MovEasy endorse such shop owners to move their items."
					/>
				</div>
			</div>
		</>
	);
};

export default index;
