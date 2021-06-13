import React, { useState } from "react";
import { toaster } from "evergreen-ui";
import job from "../PostJob/assets/job.svg";
import FormLayout from "../../../components/FormLayout/FormLayout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import CheckBox from "../../../components/CheckBox/CheckBox";
import "./PostJob.scss";
import { databasefb } from "./../../../firebase";

const PostJob = () => {
	// ********* push to DB *********
	const addOrEdit = (obj) => {
		databasefb
			.child("posts")
			.push(obj, (err) => {
				if (err) console.log(err);
			})
			.then((docRef) => {
				console.log("User ID: ", docRef.key);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toaster.success("Your Job is successfully posted!", {
			description: "Transporters will bid on your post soon...",
		});
		addOrEdit(PostJob);
	};

	// ************************************************************
	const Postcheckbox = [
		"Tempo",
		"Truck",
		"Pickup",
		"Tractor",
		"Tow-truck",
		"Fire engine",
	];
	const [PostJob, setPostJob] = useState({
		from: "",
		to: "",
		date: "",
		time: "",
		type: "",
		budget: "",
		weight: "",
		note: "",
		vehicles: [],
		uid: localStorage.getItem("uid"),
		name: localStorage.getItem("name"),
		email: localStorage.getItem("email"),
	});

	return (
		<div className="postjob wrapper">
			<div>
				<img className="postjob-image" src={job} alt="" />
			</div>
			<div className="postjob-form-container">
				<FormLayout state={PostJob}>
					<h3 className="postjob-head">Post a Job</h3>

					<Input
						label="From"
						placeholder="Start point"
						type="text"
						inputStyle={true}
						name="from"
						value={PostJob.from}
						state={PostJob}
						setState={setPostJob}
						required
					/>
					<Input
						label="To"
						placeholder="End point"
						type="text"
						inputStyle={true}
						name="to"
						value={PostJob.to}
						state={PostJob}
						setState={setPostJob}
						required
					/>
					<div className="PostJob-label">
						<div className="postjob-date">
							<Input
								label="Date"
								placeholder="DD/MM/YYYY"
								type="Date"
								inputStyle={true}
								name="date"
								value={PostJob.date}
								state={PostJob}
								setState={setPostJob}
								required
							/>
						</div>
						<div className="postjob-time">
							<Input
								label="Time"
								placeholder="HH:MM"
								type="time"
								inputStyle={true}
								name="time"
								value={PostJob.time}
								state={PostJob}
								setState={setPostJob}
								required
							/>
						</div>
					</div>
					<Input
						label="Type of goods"
						placeholder="Ex: Furniture"
						type="text"
						inputStyle={true}
						name="type"
						value={PostJob.type}
						state={PostJob}
						setState={setPostJob}
						required
					/>

					<Input
						label="Budget"
						placeholder="Rs. 20,000/-"
						type="Number"
						inputStyle={true}
						name="budget"
						value={PostJob.budget}
						state={PostJob}
						setState={setPostJob}
						required
					/>

					<Input
						label="Weight"
						placeholder="450 kgs."
						type="text"
						inputStyle={true}
						name="weight"
						value={PostJob.weight}
						state={PostJob}
						setState={setPostJob}
					/>
					<div className="post-group">
						<label className="post-vehicle-label">Select Vehicles</label>
						<div className="post-line"></div>
					</div>

					<div className="postjobcheckbox">
						{Postcheckbox.map((label, index) => {
							return (
								<div className="checkbox-map" key={index}>
									<CheckBox
										category="user"
										label={label}
										arrayState={PostJob}
										setArrayState={setPostJob}
									/>
								</div>
							);
						})}
					</div>

					<Input
						label="Note"
						placeholder="Note for the transporter..."
						type="text"
						inputStyle={true}
						name="note"
						value={PostJob.note}
						state={PostJob}
						setState={setPostJob}
					/>
					<Button
						type="submit"
						ButtonSize="btn-large"
						ButtonStyle="btn-primary"
						onClick={(e) => handleSubmit(e)}
					>
						<span> &#8594;</span>
						Book a ride
					</Button>
				</FormLayout>
			</div>
		</div>
	);
};

export default PostJob;
