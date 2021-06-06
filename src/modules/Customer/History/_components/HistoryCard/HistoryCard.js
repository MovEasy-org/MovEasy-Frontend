import React from "react";
import PostStatus from "../PostStatus/PostStatus";
import "./HistoryCard.scss";
const HistoryCard = ({ status, from, to, date, time }) => {
	return (
		<>
			<table className="history-card-container">
				<tr className="history-card-content status-align">
					<th valign="top" className="para-label">
						Status:
					</th>
					<td>
						{status ? (
							<PostStatus poststatus={status} />
						) : (
							<PostStatus poststatus={status} />
						)}
					</td>
				</tr>

				<tr className="history-card-content">
					<th valign="top" className="para-label">
						From:
					</th>
					<td className="history-content">{from}</td>
				</tr>

				<tr className="history-card-content">
					<th valign="top" className="para-label">
						To:
					</th>
					<td className="history-content">{to}</td>
				</tr>

				<tr className="history-card-content">
					<th valign="top" className="para-label">
						Date:
					</th>
					<td className="history-content">{date}</td>
				</tr>

				<tr className="history-card-content">
					<th valign="top" className="para-label">
						Time:
					</th>
					<td className="history-content">{time}</td>
				</tr>
			</table>
		</>
	);
};

export default HistoryCard;
