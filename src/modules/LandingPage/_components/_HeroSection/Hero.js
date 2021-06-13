import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import CustomModal from "./../../../../components/CustomModal/CustomModal";
import "./Hero.scss";
import "./GetStarted.scss";
import { JsonData } from "./GetsSartedData";

const Hero = () => {
	const [showModal, setShowModal] = useState(false);
	const [index, setIndex] = useState(0);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	const increment = () => {
		if (index < 3) {
			setIndex(index + 1);
		} else {
			setShowModal((prev) => !prev);
			setIndex(0);
		}
	};

	const dataForModal = (
		<div className="dialog-wrapper">
			<h2 className="get-started-head">{JsonData[index].title}</h2>
			<p className="get-started-content">{JsonData[index].content}</p>
			<div className="get-started-image">{JsonData[index].Image}</div>
			{index === 3 ? (
				<div className="modal-btns">
					<div className="btn-ns">
						<Button
							type="submit"
							ButtonSize="btn-medium"
							ButtonStyle="btn-link"
							onClick={() => increment()}
						>
							Finish
						</Button>
					</div>
				</div>
			) : (
				<div className="modal-btns">
					<div className="btn-ns">
						<Button
							type="submit"
							ButtonSize="btn-medium"
							ButtonStyle="btn-primary"
							onClick={() => {
								setShowModal();
								setIndex(0);
							}}
						>
							Skip
						</Button>
					</div>
					<div className="btn-ns">
						<Button
							type="submit"
							ButtonSize="btn-medium"
							ButtonStyle="btn-link"
							onClick={() => increment()}
						>
							Next
						</Button>
					</div>
				</div>
			)}
		</div>
	);

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
				ModalContent={dataForModal}
			/>
		</div>
	);
};

export default Hero;
