import React from "react";
import "../styles/popup.scss";

const Popup = props => {
  return (
    <>
      <div class='box'>
        <a href='#popup1'>
          {/* {props.name ? props.name : "click for Popup Message"}
           */}
          {props.children}
        </a>
      </div>
      <div id='popup1' class='overlay'>
        <div class='popup'>
          <h2>
            {props.heading ? props.heading : "Lorem ipsum dolor sit amet"}
          </h2>
          <a class='close' href='#'>
            &times;
          </a>
          <div class='content'>
            {props.message
              ? props.message
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate itaque consequatur assumenda mollitia!"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
