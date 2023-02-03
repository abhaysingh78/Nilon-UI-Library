import React, { useEffect, useState } from "react";
import "../styles/_button.scss";

const Button = props => {
  const [shadow, setShadow] = useState("shadowPrimary");
  useEffect(() => {
    switch (props.color) {
      case "error":
        setShadow("shadowError");
        break;
      case "secondary":
        setShadow("shadowSecondary");
        break;
      case "success":
        setShadow("shadowSuccess");
        break;
      case "warning":
        setShadow("shadowWarning");
        break;
      default:
        setShadow("shadowPrimary");
        break;
    }
  }, [shadow]);

  return (
    <>
      <button
        className={`${props.color} ${props.size} ${props.shadow && shadow} ${
          props.rounded && "round"
        } ${props.bold && "bold"} ${props.light && "light"}`}
        onClick={props.onClick && props.onClick}
      >
        {props.name ? props.name : "Button"}
      </button>
    </>
  );
};
export default Button;
