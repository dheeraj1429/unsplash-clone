import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../Redux/Action/action";

import "./ImageDivComponent.css";

function ImageDivComponent() {
  const dispatch = useDispatch();
  const res = async () => {
    await fetch(`https://api.unsplash.com/photos/?client_id=k-2phInFwSmbdSL_ptLu-5XTopHSkaFyGip_HtlD0EU`)
      .then((res) => res.json())
      .then((data) => dispatch(setData(data)));
  };
  useEffect(() => {
    res();
  }, []);

  return (
    <div className="ImageDivContainer">
      <div className="Container">
        <div className="ImgBox">
          <div>
            <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1635598786348-9f9cbcaa66dc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1635510890037-29d55fc3492e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1635343407315-3bcf1b1f5524?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDivComponent;
