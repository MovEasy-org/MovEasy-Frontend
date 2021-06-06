import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Popover, Menu, Position } from "evergreen-ui";
import Button1 from "../Button/Button";
import "./Header.scss";

const LogOut = () => {
	localStorage.clear();
	window.location.reload();
};

const Header = ({ isTransporter, isCustomer }) => {
	if (isTransporter) return <NavbarTransporter />;
	else if (isCustomer) return <NavbarCustomer />;
	else return <NavbarLoggedOut />;
};

export default Header;

const NavbarLoggedOut = () => (
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
					<Button1 ButtonSize="btn-medium" ButtonStyle="btn-link">
						Log in
					</Button1>
				</Link>
			</div>
			<div className="nav-btn">
				<Link to="/signup">
					<Button1 ButtonSize="btn-medium" ButtonStyle="btn-primary">
						Sign up
					</Button1>
				</Link>
			</div>
		</div>
	</nav>
);

const NavbarCustomer = () => (
	<nav className="nav-container">
		<div className="nav-head">
			<span className="cyan">Mov</span>Easy
		</div>

		<div className="link-items">
			<div className="link active-nav-btn">
				<a href="/">Post a Job</a>
			</div>
			<div className="link">
				<a href="/history">History</a>
			</div>
			<div className="link">
				<a href="/notifications">Notifications</a>
			</div>
		</div>

		<div className="btn-log">
			<Link to="/">
				<Popover
					position={Position.BOTTOM_LEFT}
					content={
						<Menu className="pop">
							<Menu.Group>
								<Menu.Item>
									<div className="align-center-name">
										<b>{localStorage.getItem("name")}</b>
									</div>
								</Menu.Item>
								<Menu.Item>{localStorage.getItem("email")}</Menu.Item>
							</Menu.Group>
							<Menu.Divider />
							<Menu.Group>
								<Menu.Item intent="danger" onClick={LogOut}>
									Log out
								</Menu.Item>
							</Menu.Group>
						</Menu>
					}
				>
					<Avatar name={localStorage.getItem("name")} size={50} />
				</Popover>
			</Link>
		</div>
	</nav>
);

const NavbarTransporter = () => (
	<nav className="nav-container">
		<div className="nav-head">
			<span className="cyan">Mov</span>Easy
		</div>

		<div className="link-items">
			<div className="link active-nav-btn">
				<a href="/">Feed</a>
			</div>
			<div className="link">
				<a href="/history">History</a>
			</div>
			<div className="link">
				<a href="/notifications">Notifications</a>
			</div>
		</div>

		<div className="btn-log">
			<Link to="/">
				<Popover
					position={Position.BOTTOM_LEFT}
					content={
						<Menu className="pop">
							<Menu.Group>
								<Menu.Item>Share...</Menu.Item>
								<Menu.Item>Move...</Menu.Item>
							</Menu.Group>
							<Menu.Divider />
							<Menu.Group>
								<Menu.Item intent="danger">Log out</Menu.Item>
							</Menu.Group>
						</Menu>
					}
				>
					<Avatar name="Manvi Jain" size={50} />
				</Popover>
			</Link>
		</div>
	</nav>
);
