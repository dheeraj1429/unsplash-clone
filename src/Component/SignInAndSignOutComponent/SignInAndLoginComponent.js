import React from "react";
import SingInComponent from "./SingInComponent/SingInComponent";
import "./SignInAndLoginComponent.css";
import LogInComponent from "./LogInComponent/LogInComponent";

function SignInAndLoginComponent() {
  return (
    <div className="SignInAndLoginDiv">
      <div className="Container">
        <SingInComponent />
        <LogInComponent />
      </div>
    </div>
  );
}

export default SignInAndLoginComponent;
