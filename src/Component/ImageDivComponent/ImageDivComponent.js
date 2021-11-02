import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDataOne, setDataTwo, setDataThree } from "../../Redux/Action/action";

import "./ImageDivComponent.css";

function ImageDivComponent() {
  const [ShowIcon, setShowIcon] = useState(false);
  const selector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const apiDataFirst = `https://pixabay.com/api/?key=22490979-1f9ed0f6cf9068fab5840a079&q=&image_type=photos=true`;
  const apiDataSecond = `https://pixabay.com/api/?key=22490979-1f9ed0f6cf9068fab5840a079&q=nature&image_type=photos=true`;
  const apiDataThird = `https://pixabay.com/api/?key=22490979-1f9ed0f6cf9068fab5840a079&q=flower&image_type=photos=true`;

  const resFunction = async (api, event) => {
    await fetch(api)
      .then((res) => res.json())
      .then((data) => dispatch(event(data)));
  };

  useEffect(() => {
    // res();
    resFunction(apiDataFirst, setDataOne);
    resFunction(apiDataSecond, setDataTwo);
    resFunction(apiDataThird, setDataThree);
  }, []);

  return (
    <div className="ImageDivContainer">
      <div className="Container">
        <div className="ImgBox">
          <div>{selector ? selector.imageCollectionDataFirst.map((el) => el.hits.map((el) => <img src={el.largeImageURL} />)) : null}</div>
          <div>{selector ? selector.imageCollectionDataSecond.map((el) => el.hits.map((el) => <img src={el.largeImageURL} />)) : null}</div>
          <div>{selector ? selector.imageCollectionDataThird.map((el) => el.hits.map((el) => <img src={el.largeImageURL} />)) : null}</div>
        </div>
      </div>
    </div>
  );
}

export default ImageDivComponent;
