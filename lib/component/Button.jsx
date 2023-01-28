import React from "react";
import "./styles/_button.scss";
const Button = props => {
  return (
    <>
      <button className={props.className}>{props.name}</button>
    </>
  );
};
export default Button;
