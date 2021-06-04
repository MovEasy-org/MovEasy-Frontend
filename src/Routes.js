import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./modules/LandingPage/LandingPage";

const Routes = () => {
	// fetch user type from local host
	let user = "CUSTOMER1";

	return (
		<Switch>
			{user === "TRANSPORTER" ? (
				<>
					<Header isTransporter />
					<Route />
					<Footer isLoggedin />
				</>
			) : user === "CUSTOMER" ? (
				<>
					<Header isCustomer />
					<Route />
					<Footer isLoggedin />
				</>
			) : (
				<>
					<Header />
					<Route exact path="/" component={LandingPage} />
					<Redirect to="/" />
					<Footer />
				</>
			)}
		</Switch>
	);
};

export default Routes;
