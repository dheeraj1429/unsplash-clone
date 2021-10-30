import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./TopSecondNavbarComponent.css";

function TopSecondNavbarComponent() {
  const selector = useSelector((state) => state.user.navData);

  // const SecondNavBarDivClass = document.querySelectorAll(".SecondNavBarDivClass");

  const ActiveClassHandler = function (event) {
    // removeClassFromDiv();
    // event.target.classList.add("active");
  };

  // const removeClassFromDiv = function () {
  //   SecondNavBarDivClass.forEach((item) => {
  //     item.classList.remove("active");
  //   });
  // };

  return (
    <div className="SecondNavbarDiv">
      <ul>
        {selector.map((el) => (
          <Link to={el.title.replaceAll(" ", "_")}>
            <li key={el.title} onClick={ActiveClassHandler} className="SecondNavBarDivClass">
              {el.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default TopSecondNavbarComponent;
