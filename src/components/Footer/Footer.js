import React from "react";
import "./Footer.scss";
import { ReactComponent as FooterVector } from "./assets/gentle-men.svg";

export const FooterDefault = () => {
	return (
		<footer className="footer-background">
			<div className="footer-wrapper wrapper">
				<div className="info">
					<h1 className="info-logo">
						<span className="info-logo-style">Mov</span>Easy
					</h1>
					<p className="info-text">
						It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
					</p>
				</div>

				<div className="links">
					<h4 className="links-heading">Useful Links</h4>
					<ul className="links-list">
						<li className="links-list-item">About</li>
						<li className="links-list-item">Services</li>
						<li className="links-list-item">Contact Us</li>
						<li className="links-list-item">FAQ's</li>
						<li className="links-list-item">Testimonials</li>
					</ul>
				</div>

				<div className="illustration">
					<FooterVector className="men" />
				</div>
			</div>

			<div className="footer-bottom wrapper">
				<h6>
					© All rights reserved 2021 | Made With 💙 By{" "}
					<span className="footer-bottom-owner">MSMY</span>
				</h6>
			</div>
		</footer>
	);
};

export const Footer = () => {
	return (
		<footer className="wrapper">
			<h6 className="footer-strip">
				© All rights reserved 2021 | Made With 💙 By{" "}
				<span className="footer-strip-owner">MSMY</span>
			</h6>
		</footer>
	);
};
