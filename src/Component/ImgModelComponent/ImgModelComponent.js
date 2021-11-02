import React from "react";
import { OpenModelTab } from "../../Redux/Action/action";
import { useSelector, useDispatch } from "react-redux";

import "./ImgModelComponent.css";

function ImgModelComponent() {
  const selector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="ImgModelDiv">
      <i class="fas fa-times" onClick={() => dispatch(OpenModelTab(false))}></i>
      {selector.SelectedImages !== null
        ? selector.SelectedImages.map((el) => (
            <div key={el.id}>
              <div className="ModelInner">
                <img src={el.largeImageURL} />
              </div>
              <div className="Img__Details">
                <div>
                  <h3>Views</h3>
                  <p>{el.views}</p>
                </div>
                <div>
                  <h3>Download</h3>
                  <p>{el.downloads}</p>
                </div>
                <div>
                  <h3>Featured in</h3>
                  <p>Editorial</p>
                </div>
              </div>

              <div className="User_Details">
                <p>
                  <i class="fa fa-map-marker-alt"></i>
                  {el.tags}
                </p>
                <p>
                  <i class="fas fa-briefcase"></i>Published 3d ago
                </p>
                <p>
                  <i class="fas fa-camera"></i>
                  {el.user}
                </p>
                <p>
                  <i class="fas fa-paper-plane"></i>Free to use under the Unsplash License
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default ImgModelComponent;
