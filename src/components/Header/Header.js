import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.scss";

const Header = () => {
	return (
		<nav className="nav-container">
			<div className="nav-head">
				<span className="cyan">Mov</span>Easy
			</div>
			<div className="link-items">
				<div className="link active-nav-btn">
					<a href="/">Home</a>
				</div>
				<div className="link">
					<a href="#about-container">About</a>
				</div>
				<div className="link">
					<a href="#feature-container">Services</a>
				</div>
				<div className="link">
					<a href="#why-wrapper">Testimonials</a>
				</div>
				<div className="link">
					<a href="#contact-us">Contact</a>
				</div>
			</div>
			<div className="btn-log">
				<div className="nav-btn">
					<Link to="/login">
						<Button ButtonSize="btn-medium" ButtonStyle="btn-link">
							Log in
						</Button>
					</Link>
				</div>
				<div className="nav-btn">
					<Link to="/signup">
						<Button ButtonSize="btn-medium" ButtonStyle="btn-primary">
							Sign up
						</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
