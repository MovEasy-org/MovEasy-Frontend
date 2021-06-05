import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "./modules/LandingPage/LandingPage";
import PostJob from './modules/Customer/PostJob/PostJob'

const Routes = () => {
	// fetch user type from local host
	let user = "mihir";

	return (
		<Switch>
			{user === "TRANSPORTER" ? (
				<>
					<Route />
				</>
			) : user === "CUSTOMER" ? (
				<>
					<Route />
				</>
			) : (
				<>
					<Route exact path="/" component={PostJob} />
					<Redirect to="/" />
				</>
			)}
		</Switch>
	);
};

export default Routes;
