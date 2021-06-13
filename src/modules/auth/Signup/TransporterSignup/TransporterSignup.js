import React, { useState } from "react";
import "./TransporterSignup.scss";
import FormLayout from "../../../../components/FormLayout/FormLayout";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import CheckBox from "./../../../../components/CheckBox/CheckBox";
import { useHistory } from "react-router-dom";
import { databasefb } from "./../../../../firebase";

const TransporterSignup = () => {
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
				localStorage.setItem("userType", "TRANSPORTER");
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
		vehicles: [],
		vehicleNo: "",
		usercat: "TRANSPORTER",
		uid: localStorage.getItem("uid"),
		email: localStorage.getItem("email"),
	});
	const Postcheckbox = [
		"Tempo",
		"Truck",
		"Pickup",
		"Tractor",
		"Tow-truck",
		"Fire engine",
	];

	return (
		<div className="signupt-page-container">
			<div className="signupt-container">
				<div className="signupt-upper">
					<h2 className="signupt-head">Add Details</h2>
					<p className="signupt-para">
						Moveasy Is A New Professional Network For Flexible Work.
					</p>
				</div>
				<div className="signupt-inner">
					<div className="fi-signupt-container">
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

							<div className="post-group">
								<label className="post-label">Select Vehicles</label>
								<div className="post-line"></div>
							</div>

							<div className="postjobcheckbox">
								{Postcheckbox.map((label, index) => {
									return (
										<div className="checkbox-map" key={index}>
											<CheckBox
												category="y"
												label={label}
												arrayState={user}
												setArrayState={setUser}
											/>
										</div>
									);
								})}
							</div>

							<Input
								label="Vehicle no."
								placeholder="Your vehicle no."
								type="text"
								name="vehicleNo"
								value={user.vehicleNo}
								state={user}
								setState={setUser}
							/>
							<div className="signupt-form-btn">
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
	);
};

export default TransporterSignup;
