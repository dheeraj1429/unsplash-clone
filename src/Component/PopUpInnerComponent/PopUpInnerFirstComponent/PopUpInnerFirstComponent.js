import React from "react";
import { Link } from "react-router-dom";

import "./PopUpInnerFirstComponent.css";

function PopUpInnerFirstComponent({ InnerData }) {
  return (
    <div className="PopUpInnerDiv">
      <div className="PopUpContentDiv">
        {InnerData !== undefined
          ? InnerData.map((el) =>
              el.heading ? (
                <h3 key={el.heading}>{el.heading}</h3>
              ) : (
                <Link to={el.title.replaceAll(" ", "_")}>
                  <p key={el.title}>{el.title}</p>
                </Link>
              )
            )
          : null}
      </div>
    </div>
  );
}

export default PopUpInnerFirstComponent;
