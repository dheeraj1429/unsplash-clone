import React from "react";

import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";

import "./BannerComponent.css";

function BannerComponent() {
  return (
    <div className="BannerComponent">
      <div className="BannerContent">
        <div className="Container_sm">
          <h1>Unsplash Clone</h1>
          <p>The internet’s source of freely-usable images. Powered by creators everywhere.</p>
          <SearchBarComponent class={"RoudedNone"} />
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
