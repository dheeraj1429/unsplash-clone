import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import PopUpcomponent from "../PopUpComponent/PopUpComponent";
import { useSelector } from "react-redux";

import "./TopNavbarComponent.css";

function TopNavbarComponent() {
  const [ShowDiv, setShowDiv] = useState(false);
  const [ShowDivOne, setShowDivOne] = useState(false);

  const [TopNavbar, setTopNavbar] = useState([
    { title: "Brand", id: 1 },
    { title: "Unsplash Awards", id: 2 },
    { title: "New Photos", id: 3 },
  ]);

  const selector = useSelector((state) => state.user);

  return (
    <div className="TopNavbarComponent">
      <div className="LogoDiv">
        <Link to="/">
          <img src="data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20class%3D%22hic6U%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20aria-labelledby%3D%22unsplash-home%22%20aria-hidden%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Ctitle%20id%3D%22unsplash-home%22%3EUnsplash%20Home%3C%2Ftitle%3E%3Cpath%20d%3D%22M10%209V0h12v9H10zm12%205h10v18H0V14h10v9h12v-9z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" />
        </Link>
      </div>
      <SearchBarComponent />
      <div className="TopNavbarContent">
        <div className="NavLinkDiv">
          {TopNavbar.map((el) => (
            <Link to={el.title.replaceAll(" ", "_")}>
              <p key={el.id}>{el.title}</p>
            </Link>
          ))}
          <div className="UserProfileDiv">
            <div
              className="userDiv"
              onClick={() => {
                if (ShowDivOne == false) {
                  setShowDivOne(true);
                  setShowDiv(false);
                } else {
                  setShowDivOne(false);
                }
              }}
            ></div>
            <PopUpcomponent SideBarContentPopUp={"UserDetails"} ContentData={selector} ClassData={ShowDivOne == true ? "hideMenu" : ""} />
          </div>

          <img src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20aria-hidden%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M19.1263%2028.2c-6.1826%202.1388-11.82761%201.2031-13.03726-2.4062-.40321-1.3368-.26881-2.6735.53762-4.144.40322-.6684.40322-1.7378.13441-2.5398l-.94084-3.0746c-.80643-2.1388-.53762-4.4113.26881-6.28281C6.62666%208.28215%207.5675%207.21273%208.91155%206.277l-.26881-.80206c-.40322-.80206.1344-1.87148.94083-2.13883l1.61283-.53471c.9409-.40103%201.8817.13368%202.1505%201.06942l.2688.80206c1.7473-.13368%203.3601.26735%204.8386%201.20309%201.6129%201.06941%202.8225%202.53985%203.4945%204.54503l1.0753%203.3419c.2688.6684.9408%201.6041%201.7472%201.8715%201.4785.5347%202.5537%201.4704%202.9569%202.8072%201.3441%203.3419-2.4193%207.6195-8.6019%209.7584zm6.0482-8.9564c-.5376-1.4704-4.3009-2.2725-9.4083-.5347s-7.52668%204.8124-6.98906%206.2828c.53762%201.4705%204.30096%202.2725%209.40836.5347s7.5267-4.8123%206.989-6.2828zm-10.0803%205.4808c-1.3441%200-2.4193-.6684-3.2257-1.6041-.1345-.1337-.1345-.4011%200-.5348.9408-.802%202.2848-1.6041%204.4353-2.4061.8064-.2674%201.6129-.5347%202.4193-.6684.2688%200%20.4032.1337.4032.2673v.6684c0%201.6041-.9408%203.0746-2.2849%203.743.1344%200-.9408.5347-1.7472.5347z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" />

          <div className="MenuDiv">
            <i
              class="fas fa-bars"
              onClick={() => {
                if (ShowDiv == false) {
                  setShowDiv(true);
                  setShowDivOne(false);
                } else {
                  setShowDiv(false);
                }
              }}
            ></i>

            <PopUpcomponent SideBarContentPopUp={"MenuMegaBar"} ContentData={selector} ClassData={ShowDiv == true ? "hideMenu" : ""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbarComponent;
