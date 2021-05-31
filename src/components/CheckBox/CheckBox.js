import React, { useState } from "react";
import "./CheckBox.scss";

const CheckBox = ({
  label,
  handleChnage,
  arrayState,
  setArrayState,
  category,
}) => {
  const [checked, setChecked] = useState(true);
  const valueset = () => {
    if (checked) {
      return label;
    } else {
      return "";
    }
  };

  console.log(checked);

  return (
    <>
      <div
        className={
          category === "user"
            ? (checked
              ? "active-check"
              : "inactive-check")
            : (checked
            ? "trans-active-check"
            : "trans-inactive-check")
        }
      >
        <label className="checkbox-label">
          <input
            name={label}
            type="checkbox"
            defaultChecked={checked}
            value={valueset()}
            onChange={(e) => setChecked(!checked)}
            handleChnage={handleChnage}
            arrayState={arrayState}
            setArrayState={setArrayState}
          />
          label
        </label>
      </div>
    </>
  );
};

export default CheckBox;
