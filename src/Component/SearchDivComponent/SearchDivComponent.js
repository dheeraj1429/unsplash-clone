import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeSearchData } from "../../Redux/Action/action";

import "./SearchDivComponent.css";

function SearchDivComponent() {
  const selector = useSelector((state) => state.user.SearchDataCollection);
  const dispatch = useDispatch();

  return (
    <div className="SearchDivBox">
      <div className="SearchDivBoxContent">
        <div className="Recent_Search">
          {selector.length > 0 ? (
            <div>
              <div className="Recent_Search_Cover_div_First">
                <h5>Recent Search</h5>
                <p onClick={() => dispatch(removeSearchData())}>Clear</p>
              </div>

              <div className="Recent_Search_Cover_div">
                {selector.map((el) => (
                  <div className="Recent_Search_div">
                    <p>{el.data}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="Trending_Search"></div>
        <div className="Trending_Topic"></div>
        <div className="Trending_colletion"></div>
      </div>
    </div>
  );
}

export default SearchDivComponent;
