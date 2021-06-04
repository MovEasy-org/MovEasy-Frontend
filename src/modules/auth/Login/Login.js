import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { ReactComponent as Userlogin } from "./assets/Userlogin.svg";
import FormLayout from "../../../components/FormLayout/FormLayout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	return (
		<div className="login-page-container">
			<div className="login-container">
				<div className="login-upper">
					<h2 className="login-head">Login</h2>
					<p className="login-para">
						Moveasy Is A New Professional Network For Flexible Work.
					</p>
				</div>
				<div className="login-inner">
					<div className="fi-container">
						<div className="login-image-container">
							<Userlogin />
						</div>
						<div className="login-form-container">
							<FormLayout formColor={true} state={user}>
								<Input
									label="Email"
									placeholder="Your email"
									inputStyle={false}
									type="email"
									name="email"
									value={user.email}
									state={user}
									setState={setUser}
								/>
								<Input
									label="Password"
									placeholder="Your password"
									inputStyle={false}
									type="password"
									name="password"
									value={user.password}
									state={user}
									setState={setUser}
								/>
								<div className="forgot-pass">
									<Link to="/forgotpass" className="forgot-link">
										forgot password?
									</Link>
								</div>
								<div className="login-form-btn">
									<Button
										type="submit"
										ButtonSize="btn-large"
										ButtonStyle="btn-link"
									>
										Login
									</Button>
								</div>
							</FormLayout>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;