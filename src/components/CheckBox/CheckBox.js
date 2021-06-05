import React, { useState } from "react";
import "./CheckBox.scss";

const CheckBox = ({ label, setArrayState, category }) => {
	const [checked, setChecked] = useState(true);

	const handleChange = (e) => {
		setChecked(!checked);
		if (checked) {
			setArrayState((prevState) => ({
				...prevState,
				vehicles: [...prevState.vehicles, label],
			}));
		} else {
			setArrayState((prevState) => ({
				...prevState,
				vehicles: prevState.vehicles.filter(
					(element) => element !== e.target.name
				),
			}));
		}
	};

	return (
		<>
			<div
				className={
					category === "user"
						? checked
							? "active-check"
							: "inactive-check"
						: checked
						? "trans-inactive-check"
						: "trans-active-check"
				}
			>
				<label className="checkbox-label">
					<input
						name={label}
						type="checkbox"
						value={label}
						onChange={(e) => handleChange(e)}
					/>
					{label}
				</label>
			</div>
		</>
	);
};

export default CheckBox;
