import React, { useState } from "react";
import "./CheckBox.scss";


const CheckBox = ({ label,handleChnage, arrayState, setArrayState }) => {

  const [checked, setChecked] =useState(true);
  const valueset = () => {
    if (checked) {
      return label
    } else {
      return ""
    }
  };

  console.log(checked);
  let classes= checked ? 'active-check':'inactive-check';
  return (
    <>
      <div className={classes}>
        <label className="checkbox-label">
          <input
            name={label}
            type="checkbox"
            defaultChecked={checked}
            value={valueset()}
            onChange={(e) =>setChecked(!checked)}
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
