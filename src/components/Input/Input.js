import React from "react";
import "./Input.scss";

const Input = ({
	isTextarea,
	label,
	placeholder,
	inputStyle,
	type,
	value,
	name,
	state,
	setState,
	newref,
}) => {
	// Handle Change Function
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setState({ ...state, [name]: value });
	};

	// Conditional classnames
	let fieldStyle = "";
	let labelStyle = "";

	if (inputStyle) {
		labelStyle = "light--label";
		fieldStyle = "fill--input";
	} else {
		labelStyle = "dark--label";
		fieldStyle = "outline--input";
	}

	return (
		<div className="input--group">
			<div className="label--group">
				<label className={labelStyle}>{label}</label>
				<div className="label--line"></div>
			</div>

			{isTextarea ? (
				<textarea
					ref={newref}
					rows="5"
					name={name}
					value={value}
					className={`input text-area ${fieldStyle}`}
					placeholder={placeholder}
					onChange={handleChange}
				/>
			) : (
				<input
					ref={newref}
					name={name}
					type={type}
					value={value}
					className={`input  ${fieldStyle}`}
					placeholder={placeholder}
					onChange={handleChange}
				/>
			)}
		</div>
	);
};

export default Input;
