import React, { useState } from "react";
import "./TransporterSignup.scss";
import FormLayout from "../../../../components/FormLayout/FormLayout";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import CheckBox from "./../../../../components/CheckBox/CheckBox";

const TransporterSignup = () => {
	const [user, setUser] = useState({
		name: "",
		// email: "",
		phone: "",
		// password: "",
		vehicles: [],
		vehicleNo: "",
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
							{/* <Input
								label="Email"
								placeholder="Your email"
								type="email"
								name="email"
								value={user.email}
								state={user}
								setState={setUser}
							/> */}
							<Input
								label="Phone"
								placeholder="Your phone"
								type="number"
								name="phone"
								value={user.phone}
								state={user}
								setState={setUser}
							/>
							{/* <Input
								label="Password"
								placeholder="Your password"
								type="password"
								name="password"
								value={user.password}
								state={user}
								setState={setUser}
							/> */}

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
