import React, { useState } from "react";

import CustomButtonComponent from "../../CustomButtonComponent/CustomButtonComponent";

import { auth } from "../../Firebase.Utile/Firebase.util";
import { useHistory } from "react-router";

import "./SingInComponent.css";

function SingInComponent() {
  const history = useHistory();

  const [UserValue, setUserValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = UserValue;

  const ChangeUserVaule = (event) => {
    let name, value;

    name = event.target.name;
    value = event.target.value;

    setUserValue({ ...UserValue, [name]: value });
  };

  const SignInUserHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          console.log(user);
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="SignInDiv">
      <div className="SignInContainer">
        <form>
          {/* <label>Name</label>
          <input type="text" name="name" placeholder="Full name" value={UserValue.displayName} onChange={ChangeUserVaule} /> */}

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={UserValue.email} onChange={ChangeUserVaule} />

          <label>Password</label>
          <input type="password" name="password" placeholder="password" value={UserValue.password} onChange={ChangeUserVaule} />

          <CustomButtonComponent InnerText={"Sign In"} ButtonClass={"Sign_In_Botton"} onClick={SignInUserHandler} />
        </form>
      </div>
    </div>
  );
}

export default SingInComponent;
