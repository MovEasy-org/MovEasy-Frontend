import React from "react";
import "./FormLayout.scss";

const FormLayout = ({ state, children, formColor, styles }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(state);
		// const form = e.target;
		// form.reset();
	};

	return (
		<form
			className={
				formColor
					? `form-white form-layout ${styles} `
					: `form-layout ${styles} `
			}
			onSubmit={onSubmit}
			state={state}
		>
			{children}
		</form>
	);
};

export default FormLayout;
