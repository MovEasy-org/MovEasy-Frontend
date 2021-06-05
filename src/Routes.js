import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./modules/auth/Login/Login";
import Signup from "./modules/auth/Signup/Signup";
import PostAJob from "./modules/Customer";
import LandingPage from "./modules/LandingPage/LandingPage";

const Routes = () => {
	// fetch user type from local host
	let user = "CUSTOMERa";

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
					<Route exact path="/" component={PostAJob} />
					<Footer isLoggedin />
				</>
			) : (
				<>
					<Header />
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<Redirect to="/" />
					<Footer />
				</>
			)}
		</Switch>
	);
};

export default Routes;
