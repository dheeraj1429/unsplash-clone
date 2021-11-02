import React from "react";
import BannerComponent from "../../Component/BannerComponent/BannerComponent";
import ImageDivComponent from "../../Component/ImageDivComponent/ImageDivComponent";
import ImgModelComponent from "../../Component/ImgModelComponent/ImgModelComponent";

import { useSelector } from "react-redux";

function HomePage() {
  const selector = useSelector((state) => state.user.OpenModelWindow);
  return (
    <>
      {selector == true ? <ImgModelComponent /> : null}
      <BannerComponent />
      <ImageDivComponent />
    </>
  );
}

export default HomePage;
