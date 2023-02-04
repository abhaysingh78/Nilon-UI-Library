import React from "react";

const Span = props => {
  return <span className={props.customClass}>{props.children}</span>;
};

export default Span;
