import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../../Redux/Action/action";

import "./SearchBarComponent.css";

function SearchBarComponent(props) {
  const [SearchDataInput, setSearchDataInput] = useState("");
  const dispatch = useDispatch();

  const ChangeInputValueHandler = (event) => {
    setSearchDataInput(event.target.value);
  };

  const SendSearchDataHandler = function () {
    dispatch(searchData(SearchDataInput));
    setSearchDataInput("");
  };

  return (
    <div className="SearchInputDiv">
      <div className={props.class ? `SearchDivInner ${props.class}` : "SearchDivInner"}>
        <div className="SearchIconDiv">
          <i class="fas fa-search" onClick={SendSearchDataHandler}></i>
        </div>
        <input type="search" placeholder="Search free high-resolution photos" value={SearchDataInput} onChange={ChangeInputValueHandler} />
        <div className="SearchSideDiv">
          <img src="data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20class%3D%22VdNCI%20nT46U%20VETef%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20aria-hidden%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M6.7%2025.3H12V28H6.7C5.2%2028%204%2026.8%204%2025.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2%204%204%205.2%204%206.7V12h2.7V6.7zM25.3%204H20v2.7h5.3V12H28V6.7C28%205.2%2026.8%204%2025.3%204zm0%2021.3H20V28h5.3c1.5%200%202.7-1.2%202.7-2.7V20h-2.7v5.3zm-4-9.3c0%202.9-2.4%205.3-5.3%205.3s-5.3-2.4-5.3-5.3%202.4-5.3%205.3-5.3%205.3%202.4%205.3%205.3zm-2.6%200c0-1.5-1.2-2.7-2.7-2.7s-2.7%201.2-2.7%202.7%201.2%202.7%202.7%202.7%202.7-1.2%202.7-2.7z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" />
        </div>
      </div>
    </div>
  );
}

export default SearchBarComponent;
