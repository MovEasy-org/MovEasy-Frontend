import React from "react";
import "./Button.scss";

const Button = (
  { 
    type,
    ButtonStyle,
    ButtonSize,
    children,
    onClick,
    icon }) => {


  // BUTTON STYLES
  const STYLES = 
  [
    "btn-primary",
    "btn-primary-invert",
    "btn-cyan"
  ];


  // BUTTON SIZES
  const SIZE = 
  [
    "btn-small",
    "btn-large",
    "btn-medium"
  ];


  //   BUTTON STYLES GET VERIFIED AND FALLBACK BUTTON
  const checkButtonStyle = STYLES.includes(ButtonStyle)
    ? ButtonStyle
    : STYLES[0];

 //   BUTTON SIZE  GET VERIFIED AND FALLBACK BUTTON
  const checkButtonSize = SIZE.includes(ButtonSize) 
  ? ButtonSize 
  : SIZE[0];

  return (
    <>
      <button
        className={`btn-default ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={undefined}
      >
        {icon 
        ? <img src={icon} alt="icon" /> 
        : null} 
        {children}
      </button>
    </>
  );
};

export default Button;
