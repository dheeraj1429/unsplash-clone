import React, { useState } from "react";
import SingInComponent from "./SingInComponent/SingInComponent";
import LogInComponent from "./LogInComponent/LogInComponent";

import "./SignInAndLoginComponent.css";

function SignInAndLoginComponent() {
  const [ShowLogInAndSignInComponent, setShowLogInAndSignInComponent] = useState({
    ShowSignInComponent: true,
    ShowLogInComponent: false,
  });

  const SignInHandler = function () {
    setShowLogInAndSignInComponent({ ShowLogInComponent: false });
    setShowLogInAndSignInComponent({ ShowSignInComponent: true });
  };

  const LogInHandler = function () {
    setShowLogInAndSignInComponent({ ShowLogInComponent: true });
  };

  return (
    <div className="SignInAndLoginDiv">
      <div className="Container">
        <div className="LoginIcon__Icon">
          <img src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" />
          <p>Welcome back.</p>
          <div className="Sign_In_And_Login_Options">
            <p onClick={SignInHandler}>Sign In /</p>
            <p onClick={LogInHandler}>Log In</p>
          </div>
        </div>
        <div className="FlexDiv">
          {ShowLogInAndSignInComponent.ShowSignInComponent == true ? <SingInComponent /> : null}
          {ShowLogInAndSignInComponent.ShowLogInComponent == true ? <LogInComponent /> : null}
        </div>
      </div>
    </div>
  );
}

export default SignInAndLoginComponent;
