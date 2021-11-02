import React, { useState } from "react";

import CustomButtonComponent from "../../CustomButtonComponent/CustomButtonComponent";
import { auth, signInWithGoogle } from "../../Firebase.Utile/Firebase.util";

import { useHistory } from "react-router-dom";

import "./LogInComponent.css";

function LogInComponent() {
  const history = useHistory();

  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = UserData;

  const ChangeEventValueHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUserData({ ...UserData, [name]: value });
  };

  const LogInButtonHandler = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="LogInContainerDiv">
      <div>
        <form>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={UserData.email} onChange={ChangeEventValueHandler} />
          <label>Password</label>
          <input type="password" name="password" placeholder="password" value={UserData.password} onChange={ChangeEventValueHandler} />

          <CustomButtonComponent InnerText={"Log In"} ButtonClass={"Log_In_Button"} onClick={LogInButtonHandler} />
        </form>
        <div className="OtherSingInOption">
          <p>Or</p>
          <CustomButtonComponent InnerText={"Sign in with Google"} ButtonClass={"Google_SignIn_Button"} onClick={signInWithGoogle} />
        </div>
      </div>
    </div>
  );
}

export default LogInComponent;
