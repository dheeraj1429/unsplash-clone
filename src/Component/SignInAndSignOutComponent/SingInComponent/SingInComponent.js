import React from "react";

import CustomButtonComponent from "../../CustomButtonComponent/CustomButtonComponent";

import "./SingInComponent.css";

function SingInComponent() {
  return (
    <div className="SignInDiv">
      <div className="SignInContainer">
        <form>
          <label>Name</label>
          <input type="text" placeholder="Full name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="password" />

          <CustomButtonComponent InnerText={"Sign In"} ButtonClass={"Sign_In_Botton"} />
        </form>
      </div>
    </div>
  );
}

export default SingInComponent;
