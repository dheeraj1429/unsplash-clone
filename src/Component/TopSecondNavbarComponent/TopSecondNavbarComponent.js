import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./TopSecondNavbarComponent.css";

function TopSecondNavbarComponent() {
  const selector = useSelector((state) => state.user.navData);

  return (
    <div className="SecondNavbarDiv">
      <ul>
        {selector.map((el) => (
          <Link to={el.title.replaceAll(" ", "_")}>
            <li key={el.title} className="SecondNavBarDivClass">
              {el.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default TopSecondNavbarComponent;
