import React from "react";
import "./History.scss";
import HistoryCard from "./_components/HistoryCard/HistoryCard";
const History = ({ customerHistory }) => {
	return (
		<>
			<div className="history-container">
				<h1 className="history-head">History</h1>
				<div className="history-map-container">
					{customerHistory.map((history, index) => (
						<HistoryCard
							key={index}
							status={history.status}
							from={history.from}
							to={history.to}
							date={history.date}
							time={history.time}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default History;
