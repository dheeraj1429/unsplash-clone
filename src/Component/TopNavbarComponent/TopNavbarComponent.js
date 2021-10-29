import React from "react";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";

import "./TopNavbarComponent.css";

function TopNavbarComponent() {
  return (
    <div className="TopNavbarComponent">
      <div className="LogoDiv">
        <img src="data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20class%3D%22hic6U%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20aria-labelledby%3D%22unsplash-home%22%20aria-hidden%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Ctitle%20id%3D%22unsplash-home%22%3EUnsplash%20Home%3C%2Ftitle%3E%3Cpath%20d%3D%22M10%209V0h12v9H10zm12%205h10v18H0V14h10v9h12v-9z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" />
      </div>
      <SearchBarComponent />
      <div className="TopNavbarContent"></div>
    </div>
  );
}

export default TopNavbarComponent;
