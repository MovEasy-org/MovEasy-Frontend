import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./modules/auth/Login/Login";
import CustomerSignup from "./modules/auth/Signup/CustomerSignup/CustomerSignup";
import TransporterSignup from "./modules/auth/Signup/TransporterSignup/TransporterSignup";
import Signup from "./modules/auth/Signup/Signup";
import PostAJob from "./modules/Customer";
import LandingPage from "./modules/LandingPage/LandingPage";
import History from "./modules/Customer/History/History";
import Transporter from "./modules/Transporter";
import Notification from "./components/Notification/Notification";

const Routes = () => {
	// fetch user type from local host

	localStorage.setItem("userType", "normal");
	// localStorage.setItem("userType", "TRANSPORTER");
	// localStorage.setItem("userType", "CUSTOMER");

	let user = localStorage.getItem("userType");

	return (
		<Switch>
			{user === "TRANSPORTER" ? (
				<>
					<Header isTransporter />
					<Route exact path="/" component={Transporter} />
					<Route exact path="/history" component={History} />
					<Route exact path="/notifications" component={Notification} />
					<Footer isLoggedin />
				</>
			) : user === "CUSTOMER" ? (
				<>
					<Header isCustomer />
					<Route exact path="/" component={PostAJob} />
					<Route exact path="/history" component={History} />
					<Route exact path="/notifications" component={Notification} />
					<Footer isLoggedin />
				</>
			) : (
				<>
					<Header />
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/signup/customer" component={CustomerSignup} />
					<Route
						exact
						path="/signup/transporter"
						component={TransporterSignup}
					/>
					<Footer />
					<Redirect to="/" />
				</>
			)}
		</Switch>
	);
};

export default Routes;
