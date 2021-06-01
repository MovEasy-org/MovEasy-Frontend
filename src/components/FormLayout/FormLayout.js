import React from "react";
import "./FormLayout.scss";

const FormLayout = ({ state, children }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(state);
	};

	return (
		<form className="form-layout" onSubmit={onSubmit} state={state}>
			{children}
		</form>
	);
};

export default FormLayout;
