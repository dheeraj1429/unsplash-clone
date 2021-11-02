import React from "react";

import "./CustomButtonComponent.css";

function CustomButtonComponent({ InnerText, ButtonClass }) {
  return (
    <button type="button" className={ButtonClass ? `Btn_Button ${ButtonClass}` : "Btn_Button"}>
      {InnerText}
    </button>
  );
}

export default CustomButtonComponent;
