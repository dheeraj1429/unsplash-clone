import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import PopUpInnerFirstComponent from "../PopUpInnerComponent/PopUpInnerFirstComponent/PopUpInnerFirstComponent";

import "./PopUpComponent.css";

function PopUpcomponent(props) {
  const [CollectionData, setCollectionData] = useState({
    collection: {},
  });

  useEffect(() => {
    if (props.ContentData !== null) {
      const { firstContent, secondContent, threeContent } = props.ContentData;
      setCollectionData({ collection: { firstContent, secondContent, threeContent } });
    }
  }, []);

  return (
    <div className={props.ClassData ? `MenuInner ${props.ClassData}` : "MenuInner"}>
      <div className="ArrowLine"></div>
      {props.ContentData !== null ? (
        <div className="PopUpInnerContent">
          <PopUpInnerFirstComponent InnerData={CollectionData.collection.firstContent} />
          <PopUpInnerFirstComponent InnerData={CollectionData.collection.secondContent} />
          <PopUpInnerFirstComponent InnerData={CollectionData.collection.threeContent} />
        </div>
      ) : null}
    </div>
  );
}

export default PopUpcomponent;
