import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "./modules/LandingPage/LandingPage";

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
					<Route path="/" component={LandingPage} />
					<Redirect to="/" />
				</>
			)}
		</Switch>
	);
};

export default Routes;
