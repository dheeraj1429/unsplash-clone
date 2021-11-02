import React, { useState, useEffect } from "react";

import PopUpInnerFirstComponent from "../PopUpInnerComponent/PopUpInnerFirstComponent/PopUpInnerFirstComponent";

import { auth } from "../Firebase.Utile/Firebase.util";
import { useHistory } from "react-router";

import "./PopUpComponent.css";

function PopUpcomponent({ ContentData, ClassData, SideBarContentPopUp, userName }) {
  const history = useHistory();

  if (userName !== null) {
    history.push("/");
  }

  const [CollectionData, setCollectionData] = useState({
    MegaNavCollection: {},
    UserCollectionContent: {},
  });

  useEffect(() => {
    if (ContentData !== null) {
      const { firstContent, secondContent, threeContent } = ContentData.navInnerContent;
      setCollectionData({ MegaNavCollection: { firstContent, secondContent, threeContent }, UserCollectionContent: [ContentData.navBarUserContent] });
    }
  }, []);

  if (CollectionData.MegaNavCollection && SideBarContentPopUp == "MenuMegaBar") {
    return (
      <div className={ClassData ? `MenuInner ${ClassData}` : "MenuInner"}>
        <div className="ArrowLine"></div>

        <div className="PopUpInnerContent">
          <PopUpInnerFirstComponent InnerData={CollectionData.MegaNavCollection.firstContent} />
          <PopUpInnerFirstComponent InnerData={CollectionData.MegaNavCollection.secondContent} />
          <PopUpInnerFirstComponent InnerData={CollectionData.MegaNavCollection.threeContent} />
        </div>
      </div>
    );
  }

  if (CollectionData.UserCollectionContent && SideBarContentPopUp == "UserDetails") {
    return (
      <div className={ClassData ? `MenuInner ${ClassData}` : "MenuInner"}>
        <div className="ArrowLine"></div>

        <div className="PopUpInnerContent">
          {userName ? (
            <div className="User_Content_data">
              <p>{userName.email}</p>
              <p
                onClick={() => auth.signOut()}
                style={{
                  cursor: "pointer",
                }}
              >
                Log Out
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default PopUpcomponent;
