import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
	return (
		<nav className="nav-container">
			<div className="nav-head">
				<text className="cyan">Mov</text>Easy
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
					<a href="/">Contact</a>
				</div>
			</div>
			<div className="btn-log">
				<div className="nav-btn">
					<Link to="/">Login</Link>
				</div>
				<div className="nav- btn">
					<Button
						type="submit"
						ButtonSize="btn-medium"
						ButtonStyle="btn-primary"
						onClick=""
					>
						SignUp
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
