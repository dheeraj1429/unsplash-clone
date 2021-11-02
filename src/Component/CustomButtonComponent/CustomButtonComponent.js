import React from "react";

import "./CustomButtonComponent.css";

function CustomButtonComponent({ InnerText, ButtonClass, onClick }) {
  return (
    <button type="submit" className={ButtonClass ? `Btn_Button ${ButtonClass}` : "Btn_Button"} onClick={onClick ? onClick : null}>
      {InnerText}
    </button>
  );
}

export default CustomButtonComponent;
