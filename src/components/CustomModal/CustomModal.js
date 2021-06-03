import React from "react";
import { useSpring, animated } from "react-spring";
import { ReactComponent as Close } from "./assets/close.svg";
import "./CustomModal.scss";

const CustomModal = ({ showModal, setShowModal, ModalContent }) => {
	const animation = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

	return (
		<>
			{showModal ? (
				<div className="background">
					<animated.div style={animation}>
						<div className="modal-wrapper" showModal={showModal}>
							<div className="modal-content">{ModalContent}</div>
							<div
								className="close-modal-button"
								onClick={() => setShowModal((prev) => !prev)}
							>
								<Close />
							</div>
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default CustomModal;
