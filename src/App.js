import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import TopNavbarComponent from "./Component/TopNavbarComponent/TopNavbarComponent";
import TopSecondNavbarComponent from "./Component/TopSecondNavbarComponent/TopSecondNavbarComponent";

import SignInAndLoginComponent from "./Component/SignInAndSignOutComponent/SignInAndLoginComponent";

import { auth, CreateUserProfileDocument } from "./Component/Firebase.Utile/Firebase.util";

import "./App.css";

function App() {
  const [CurrentUser, setCurrentUser] = useState({
    currentUserData: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      CreateUserProfileDocument(userAuth);
      setCurrentUser({ currentUserData: userAuth });
    });
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <TopNavbarComponent User={CurrentUser.currentUserData} />
      <TopSecondNavbarComponent />
      {/* Navbar */}

      {/* Route */}
      {/* Pages */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/LogIn" component={SignInAndLoginComponent} />
      </Switch>
      {/* Pages */}
      {/* Route */}

      {/* Footer */}
      {/* Footer */}
    </div>
  );
}

export default App;
