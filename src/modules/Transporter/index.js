import React from "react";
import "./Feed.scss";
import TransporterCard from "./_components/TransporterCard/TransporterCard";

const Transporter = () => {
	const posts = [
		{
			goodsType: "Furniture",
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			budget: "5000",
			vehicle: "Truck",
			note: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
			userName: "Mihir Verma",
			time: "12:30 PM",
		},
		{
			goodsType: "Furniture",
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			budget: "5000",
			vehicle: "Truck",
			note: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
			userName: "Mihir Verma",
			time: "12:30 PM",
		},
		{
			goodsType: "Furniture",
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			budget: "5000",
			vehicle: "Truck",
			note: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
			userName: "Mihir Verma",
			time: "12:30 PM",
		},
		{
			goodsType: "Furniture",
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			budget: "5000",
			vehicle: "Truck",
			note: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
			userName: "Mihir Verma",
			time: "12:30 PM",
		},
		{
			goodsType: "Furniture",
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			budget: "5000",
			vehicle: "Truck",
			note: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
			userName: "Mihir Verma",
			time: "12:30 PM",
		},
		{
			goodsType: "Furniture",
			from: "384 scheme71 near c21 mall, Indore-452008",
			to: "384 scheme71 near c21 mall, Indore-452008",
			budget: "5000",
			vehicle: "Truck",
			note: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
			userName: "Mihir Verma",
			time: "12:30 PM",
		},
	];
	return (
		<>
			<div className="noti-wrapper wrapper">
				<div className="noti-div">
					{posts.map((Post, index) => (
						<TransporterCard
							key={index}
							goodsType={Post.goodsType}
							from={Post.from}
							to={Post.to}
							budget={Post.budget}
							vehicle={Post.vehicle}
							note={Post.note}
							userName={Post.userName}
							time={Post.time}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Transporter;
