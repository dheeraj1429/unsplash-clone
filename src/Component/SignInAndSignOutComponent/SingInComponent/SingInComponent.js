import React from "react";

import CustomButtonComponent from "../../CustomButtonComponent/CustomButtonComponent";

import "./SingInComponent.css";

function SingInComponent() {
  return (
    <div className="SignInDiv">
      <div className="SignInContainer">
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="password" />

          <CustomButtonComponent />
        </form>
      </div>
    </div>
  );
}

export default SingInComponent;
