import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box">
        <div className="box">
        <button className="btn-close" onClick={props.handleClose}>x</button>
            {props.content}
      </div>
    </div>
  );
};
export default Popup;
