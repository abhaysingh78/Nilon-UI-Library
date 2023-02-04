import React from "react";

const Text = props => {
  return (
    <>
      {(props.variant == "2xl" && (
        <h1 className={props.customClass}>{props.children}</h1>
      )) ||
        (props.variant == "xl" && (
          <h2 className={props.customClass}>{props.children}</h2>
        )) ||
        (props.variant == "lg" && (
          <h3 className={props.customClass}>{props.children}</h3>
        )) ||
        (props.variant == "md" && (
          <h4 className={props.customClass}>{props.children}</h4>
        )) ||
        (props.variant == "sm" && (
          <h5 className={props.customClass}>{props.children}</h5>
        )) ||
        (props.variant == "xs" && (
          <h6 className={props.customClass}>{props.children}</h6>
        )) || <h3 className={props.customClass}>{props.children}</h3>}
    </>
  );
};

export default Text;
