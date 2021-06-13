import { ReactComponent as One } from "./assets/one.svg";
import { ReactComponent as Two } from "./assets/two.svg";
import { ReactComponent as Three } from "./assets/three.svg";

export const JsonData = [
	{
		title: "Welcome to MovEasy!",
		content: (
			<p>
				A collaboration platform for customers and transporters.
				<br /> Let’s commence your journey With us.
				<br />
				Create your account.,
			</p>
		),
		Image: <One className="get-image" />,
	},
	{
		title: "Get Started",
		content: (
			<p>
				If you're a customer then post a job, Fill in all the details
				accordingly.
				<br />
				If you are a transporter then look forward to a posted job.",
			</p>
		),
		Image: <Two className="get-image" />,
	},
	{
		title: "Get Started",
		content: (
			<p>
				Customer: If your post is accepted by the transporter then start bidding
				over your post.
				<br />
				Transporter: Start bidding over the post consistent with your
				requirements.
			</p>
		),
		Image: <Three className="get-image" />,
	},
	{
		title: "Get Started",
		content: (
			<p>
				Once the bidding is completed.
				<br />
				Customer- Be ready along with your packed goods.
				<br />
				Transporter: you'll be able to move towards your customer's address.
			</p>
		),
		Image: <One className="get-image" />,
	},
];
