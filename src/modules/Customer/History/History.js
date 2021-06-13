import React from "react";
import "./History.scss";
import HistoryCard from "./_components/HistoryCard/HistoryCard";
const History = () => {
	const customerHistory = [
		{
			status: true,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
		{
			status: false,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
		{
			status: false,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
		{
			status: true,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
		{
			status: false,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
		{
			status: false,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
		{
			status: true,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
		{
			status: false,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
		{
			status: false,
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			date: "12/01/2021",
			time: "12:00 PM",
		},
	];
	return (
		<>
			<div className="history-container wrapper">
				<h2 className="history-head">History</h2>
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
