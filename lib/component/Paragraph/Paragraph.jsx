import React from "react";

const Paragraph = props => {
  return <p className={props.customClass}>{props.children}</p>;
};

export default Paragraph;
