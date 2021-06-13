import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";
import "./Login.scss";
import { ReactComponent as Userlogin } from "./assets/Userlogin.svg";
import FormLayout from "../../../components/FormLayout/FormLayout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { databasefb } from "./../../../firebase";

const Login = () => {
	let history = useHistory();

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const signin = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((authUser) => {
				localStorage.setItem("uid", authUser.user.uid);
				localStorage.setItem("email", authUser.user.email);
				// console.log(authUser);
				history.push("/");
			})
			.catch((error) => {
				alert(error.message);
			});

		databasefb.child("customers").on("value", (snapshot) => {
			let studentlist = [];
			snapshot.forEach((snap) => {
				studentlist.push(snap.val());
			});

			studentlist.forEach((student) => {
				if (student.uid === localStorage.getItem("uid")) {
					console.log("");
				} else {
					localStorage.setItem("email", student.email);
					localStorage.setItem("name", student.name);
					localStorage.setItem("userType", student.usercat);
					setTimeout(() => {
						window.location.reload();
					}, 2000);
				}
			});
		});
	};

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
										onClick={signin}
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
