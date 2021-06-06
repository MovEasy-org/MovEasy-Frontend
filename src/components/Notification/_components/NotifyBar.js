import React from "react";
import { Avatar } from "evergreen-ui";
import "./NotifyBar.scss";
import Button from "../../Button/Button";
const NotifyBar = ({
	name,
	typpeofgood,
	bid,
	transporternote,
	user = "455",
}) => {
	return (
		<>
			{user === "USER" ? (
				<div className="noti-bar-container">
					<div className="noti-left">
						<Avatar name={name} size={55} />
						<div className="noti-content">
							<p className="noti-para noti-para-1">
								{name} just placed a bid on your post {typpeofgood}
							</p>
							<p className="noti-para">
								Transporter Note:
								<span className="noti-light"> {transporternote}</span>
							</p>
						</div>
					</div>
					<div className="noti-right">
						<p className="noti-bid">Bid Amount: ₹{bid}</p>
						<Button
							type="submit"
							ButtonSize="btn-medium"
							ButtonStyle="btn-link"
						>
							Accept Bid
						</Button>
					</div>
				</div>
			) : (
				<div className="noti-bar-container">
					<div className="noti-left">
						<Avatar name={name} size={55} />
						<div className="noti-content">
							<p className="noti-para noti-para-1">
								{name} just accepted your bid of -
								<span className="noti-bid"> ₹{bid}</span>
							</p>
						</div>
					</div>
					<div className="noti-right noti-btn">
						<Button
							type="submit"
							ButtonSize="btn-medium"
							ButtonStyle="btn-link"
						>
							Accept Bid
						</Button>
					</div>
				</div>
			)}
		</>
	);
};

export default NotifyBar;
