import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../../firebase";
import "./Signup.scss";
import { ReactComponent as Userlogin } from "./../Login/assets/Userlogin.svg";
import FormLayout from "../../../components/FormLayout/FormLayout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	let history = useHistory();

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((authUser) => {
				localStorage.setItem("uid", authUser.user.uid);
				console.log(authUser.user.uid);
				history.push("/user-check");
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="login-page-container">
			<div className="login-container">
				<div className="login-upper">
					<h2 className="login-head">Sign up</h2>
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
									newref={emailRef}
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
									newref={passwordRef}
									label="Password"
									placeholder="Your password"
									inputStyle={false}
									type="password"
									name="password"
									value={user.password}
									state={user}
									setState={setUser}
								/>
								<div className="login-form-btn">
									<Button
										type="submit"
										ButtonSize="btn-large"
										ButtonStyle="btn-link"
										onClick={register}
									>
										Next
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
