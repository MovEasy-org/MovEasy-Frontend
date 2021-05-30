import React, { useState } from "react";
import "./CheckBox.scss";


const CheckBox = ({ label }) => {

  const [checked, setChecked] =useState(true);

  const valueset = () => {
    if (!checked) {
      return label;
    } else {
      return "";
    }
  };

  console.log(checked);
  return (
    <>
      <div class="hiddenCB">
        <label>
          <input
            type="checkbox"
            defaultChecked={checked}
            value={valueset()}
            onChange={(e) =>setChecked(!checked)}
          />
          label
        </label>
      </div>
    </>
  );
};

export default CheckBox;
