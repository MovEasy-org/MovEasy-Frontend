import React from "react";
import "./FormLayout.scss";

const FormLayout = ({ state, children, formColor }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(state);
	};

	return (
		<form
			className={formColor ? "form-white form-layout" : "form-layout"}
			onSubmit={onSubmit}
			state={state}
		>
			{children}
		</form>
	);
};

export default FormLayout;
