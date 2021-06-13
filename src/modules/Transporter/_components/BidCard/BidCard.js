import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import FormLayout from "../../../../components/FormLayout/FormLayout";
import Input from "../../../../components/Input/Input";
import PostStatus from "../../../../components/PostStatus/PostStatus";
import "./BidCrad.scss";

const BidCard = ({
	// poststatus,
	goodtype = "Furniture",
	from = "indore",
	to = "dhar",
	date = "25/5/2021",
	time = "2:00 p.m",
	usernote = "this is a note",
	distance = "60Kms.",
	weight = "500kg",
	quotedprice = "6000",
}) => {
	const [bid, setBid] = useState({
		bidprice: "",
		transporternote: "",
	});
	return (
		<>
			<div className="bidcard-page-container">
				<div className="bid-container">
					<h2 className="bid-card-head">Place a Bid</h2>
					<div className="bid-upper">
						<h5 className="bid-label">{goodtype}</h5>
						<PostStatus poststatus={false} />
					</div>
					<div className="bid-table">
						<div className="bid-table-section">
							<table>
								<tr>
									<th className="bid-th">From:</th>
									<td className="bid-td">{from}</td>
								</tr>
								<tr>
									<th className="bid-th">Date:</th>
									<td className="bid-td">{date}</td>
								</tr>
								<tr>
									<th className="bid-th">Time:</th>
									<td className="bid-td">{time}</td>
								</tr>
								<tr>
									<th className="bid-th">Usernote:</th>
									<td className="bid-td">{usernote}</td>
								</tr>
							</table>
						</div>

						<div className="bid-table-section tb-one">
							<table>
								<tr>
									<th className="bid-th">To:</th>
									<td className="bid-td">{to}</td>
								</tr>
								<tr>
									<th className="bid-th">Distance:</th>
									<td className="bid-td">{distance}</td>
								</tr>
								<tr>
									<th className="bid-th">Weight:</th>
									<td className="bid-td">{weight}</td>
								</tr>
								<tr>
									<th className="bid-th">QuoteRange :</th>
									<td className="bid-td">₹{quotedprice}</td>
								</tr>
							</table>
						</div>
					</div>
					<div className="bid-inputs">
						<FormLayout state={bid} formColor={true} styles="form-bid">
							<div className="bid-inputs-outer">
								<div className="bid-inputs-inner">
									<Input
										label="Offer a quote"
										placeholder="Quote price"
										inputStyle={false}
										type="number"
										value={bid.bidprice}
										name="bidprice"
										state={bid}
										setState={setBid}
									/>
								</div>
								<div className="bid-inputs-inner">
									<Input
										label="Comment"
										placeholder="Leave a note"
										inputStyle={false}
										type="text"
										value={bid.transporternote}
										name="transporternote"
										state={bid}
										setState={setBid}
									/>
								</div>
							</div>
							<div className="bid-btn">
								<Button
									type="submit"
									ButtonStyle="btn-link"
									ButtonSize="btn-medium"
								>
									Place Bid
								</Button>
							</div>
						</FormLayout>
					</div>
				</div>
			</div>
		</>
	);
};

export default BidCard;
