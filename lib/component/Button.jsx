import React from "react";
import "./styles/_button.scss";

const Button = props => {
  return (
    <>
      <button
        className={`${props.color} ${props.size} ${props.shadow} ${
          props.rounded && "round"
        }`}
        onClick={props.onClick && props.onClick}
      >
        {props.name ? props.name : "Button"}
      </button>
    </>
  );
};
export default Button;
