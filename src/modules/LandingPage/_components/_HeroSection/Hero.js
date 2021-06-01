import React from "react";
import Button from "../../../../components/Button/Button";
import "./Hero.scss";

const Hero = () => {
	return (
		<div className="hero-container">
			<div className="hero-hp wrapper">
				<h1 className="Hero-heading">
					<span className="cyan">Mov</span>Easy
				</h1>
				<p className="hero-para">The Packers and Movers Company</p>
				<div className="hero-btn">
					<Button
						type="submit"
						ButtonStyle="btn-primary"
						ButtonSize="btn-medium"
						onClick={undefined}
					>
						Get Started
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
