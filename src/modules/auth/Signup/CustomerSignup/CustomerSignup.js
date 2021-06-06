import React, { useState } from "react";
import "./CustomerSignup.scss";
import { ReactComponent as UserSignup } from "./../assets/CustomerSignup.svg";
import FormLayout from "../../../../components/FormLayout/FormLayout";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { useHistory } from "react-router-dom";
import { databasefb } from "./../../../../firebase";

const CustomerSignup = () => {
	let history = useHistory();
	// ********* push to DB *********
	const addOrEdit = (obj) => {
		databasefb
			.child("customers")
			.push(obj, (err) => {
				if (err) console.log(err);
			})
			.then((docRef) => {
				console.log("User ID: ", docRef.key);
				localStorage.setItem("uid", docRef.key);
				localStorage.setItem("userType", "CUSTOMER");
				localStorage.setItem("name", user.name);
				history.push("/");
				window.location.reload();
			});
	};

	const createUser = (e) => {
		e.preventDefault();
		addOrEdit(user);
	};

	const [user, setUser] = useState({
		name: "",
		phone: "",
		usercat: "CUSTOMER",
		uid: localStorage.getItem("uid"),
		email: localStorage.getItem("email"),
	});

	return (
		<div className="signup-page-container">
			<div className="signup-container">
				<div className="signup-upper">
					<h2 className="signup-head">Add Details</h2>
					<p className="signup-para">
						Moveasy Is A New Professional Network For Flexible Work.
					</p>
				</div>
				<div className="signup-inner">
					<div className="fi-signup-container">
						<div className="signup-image-container">
							<UserSignup />
						</div>
						<div className="signup-form-container">
							<FormLayout formColor={true} state={user}>
								<Input
									label="Name"
									placeholder="Your name"
									type="text"
									name="name"
									value={user.name}
									state={user}
									setState={setUser}
								/>
								<Input
									label="Phone"
									placeholder="Your phone"
									type="number"
									name="phone"
									value={user.phone}
									state={user}
									setState={setUser}
								/>
								<div className="signup-form-btn">
									<Button
										type="submit"
										ButtonSize="btn-large"
										ButtonStyle="btn-link"
										onClick={(e) => createUser(e)}
									>
										Sign up
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

export default CustomerSignup;
