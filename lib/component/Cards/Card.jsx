import React from "react";
import "../styles/card.scss";

const Card = props => {
  return (
    <>
      <div class='blog-card'>
        <div class='meta'>
          <div
            class='photo'
            style={{
              backgroundImage: `url(${props.imageUrl})`,
            }}
          ></div>
        </div>
        <div class='description'>{props.children}</div>
      </div>
    </>
  );
};

export default Card;
