import { Route, Switch } from "react-router";

import HomePage from "./Pages/HomePage/HomePage";
import TopNavbarComponent from "./Component/TopNavbarComponent/TopNavbarComponent";
import TopSecondNavbarComponent from "./Component/TopSecondNavbarComponent/TopSecondNavbarComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <TopNavbarComponent />
      <TopSecondNavbarComponent />
      {/* Navbar */}

      {/* Route */}
      {/* Pages */}
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      {/* Pages */}
      {/* Route */}

      {/* Footer */}
      {/* Footer */}
    </div>
  );
}

export default App;
