import React from "react";
import { Link } from "react-router-dom";
import customer from "./../assets/Customer.png";
import transporter from "./../assets/Transporter.png";
import "./userCheck.scss";

const userCheck = () => {
	return (
		<div className="login-page-container">
			<div className="login-container">
				<div className="login-upper">
					<h2 className="login-head">Create Profile</h2>
					<p className="login-para">Choose Your Category</p>
				</div>
				<div className="login-inner">
					<Link to="/signup/customer">
						<div className="customer">
							<img src={customer} alt="I'm a customer" />
							<div className="info">
								<h4>
									I'm a <span>Customer</span>
								</h4>
								<p>
									You'll be apt to post a job, bid over it, and get ready with
									the packed goods to move.
								</p>
							</div>
						</div>
					</Link>

					<Link to="/signup/transporter">
						<div className="transporter">
							<img src={transporter} alt="I'm a transporter" />
							<div className="info">
								<h4>
									I'm a <span>Transporter</span>
								</h4>
								<p>
									Wait for the post, and get ready along with your vehicle to
									assist your customer.
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default userCheck;
