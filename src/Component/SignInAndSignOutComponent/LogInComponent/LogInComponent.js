import React from "react";

import CustomButtonComponent from "../../CustomButtonComponent/CustomButtonComponent";

import "./LogInComponent.css";

function LogInComponent() {
  return (
    <div className="LogInContainerDiv">
      <div>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="password" />

          <CustomButtonComponent InnerText={"Log In"} ButtonClass={"Log_In_Button"} />
        </form>
        <div className="OtherSingInOption">
          <p>Or</p>
          <CustomButtonComponent InnerText={"Sign in with Google"} ButtonClass={"Google_SignIn_Button"} />
        </div>
      </div>
    </div>
  );
}

export default LogInComponent;
