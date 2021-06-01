import React, { useState } from "react";
import FormLayout from "../../../../components/FormLayout/FormLayout";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { ReactComponent as ContactImage } from "./_assets/ContactImage.svg";
import { ReactComponent as Send } from "./_assets/Send.svg";
import "./ContactUs.scss";

const ContactUs = () => {
	const [contact, setContact] = useState({
		username: "",
		email: "",
		subject: "",
		message: "",
	});

	return (
		<>
			<div className="contact-container" id="contact-us">
				<h1 className="contact-head">Contact Us</h1>
				<div className="contact-wrapper wrapper">
					<div className="contact-image">
						<ContactImage className="contact-svg" />
					</div>
					<div className="contact-form-container">
						<FormLayout state={contact}>
							<Input
								label="Name"
								placeholder="Your Name"
								type="text"
								inputStyle={true}
								name="username"
								value={contact.username}
								state={contact}
								setState={setContact}
							/>
							<Input
								label="Email"
								placeholder="Your Email"
								type="Email"
								inputStyle={true}
								name="email"
								value={contact.email}
								state={contact}
								setState={setContact}
							/>
							<Input
								label="Subject"
								placeholder="Your Subject"
								type="text"
								inputStyle={true}
								name="subject"
								value={contact.subject}
								state={contact}
								setState={setContact}
							/>
							<Input
								isTextarea
								label="Message"
								placeholder="Your Message"
								inputStyle={true}
								name="message"
								value={contact.messgae}
								state={contact}
								setState={setContact}
							/>
							<Button
								type="submit"
								ButtonSize="btn-large"
								ButtonStyle="btn-primary"
								icon={<Send />}
								onClick={undefined}
							>
								Send Message
							</Button>
						</FormLayout>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
