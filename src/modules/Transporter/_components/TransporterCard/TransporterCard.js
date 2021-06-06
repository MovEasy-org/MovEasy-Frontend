import React from "react";
import "./TransporterCard.scss";
import Button from "./../../../../components/Button/Button";
import { ReactComponent as Swap } from "./assets/swapIcon.svg";
import { ReactComponent as Truck } from "./assets/Truck.svg";

const TransporterCard = ({
	goodsType,
	from,
	to,
	budget,
	vehicle,
	note,
	userName,
	time,
}) => {
	return (
		<div className="history-card-container">
			<h4 className="trans-card-title">{goodsType}</h4>

			<table className="left-self">
				<tr className="history-card-content">
					<th valign="top" className="para-label">
						From:
					</th>
					<td className="history-content">{from}</td>
				</tr>
			</table>

			<div className="icon-container">
				<Swap />
			</div>

			<table className="left-self">
				<tr className="history-card-content">
					<th valign="top" className="para-label">
						To:
					</th>
					<td className="history-content">{to}</td>
				</tr>
			</table>

			<div className="vehicle-budget">
				<div className="vehicle">
					<h5>{vehicle}</h5>
					<Truck />
				</div>
				<div className="budget">
					<h5>₹ {budget}</h5>
				</div>
			</div>

			<div className="note left-self">{note}</div>

			<div className="user-placebid">
				<div className="user">
					<p className="user-name">{userName}</p>
					<p className="time">{time}</p>
				</div>
				<div className="placebid">
					<Button
						type="any"
						ButtonStyle="btn-primary-invert"
						ButtonSize="btn-medium"
					>
						Place Bid
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TransporterCard;
