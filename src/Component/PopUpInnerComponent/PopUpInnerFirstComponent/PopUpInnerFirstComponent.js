import React from "react";

import "./PopUpInnerFirstComponent.css";

function PopUpInnerFirstComponent({ InnerData }) {
  return (
    <div className="PopUpInnerDiv">
      <div className="PopUpContentDiv">
        {InnerData !== undefined ? InnerData.map((el) => (el.heading ? <h3>{el.heading}</h3> : <p>{el.title}</p>)) : null}
      </div>
    </div>
  );
}

export default PopUpInnerFirstComponent;
