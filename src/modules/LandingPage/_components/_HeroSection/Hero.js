import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import CustomModal from "./../../../../components/CustomModal/CustomModal";
import "./Hero.scss";

const Hero = () => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

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
						onClick={openModal}
					>
						Get Started
					</Button>
				</div>
			</div>
			<CustomModal
				showModal={showModal}
				setShowModal={setShowModal}
				ModalContent={""}
			/>
		</div>
	);
};

export default Hero;
