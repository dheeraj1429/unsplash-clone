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

      {/* Pages */}
      <HomePage />
      {/* Pages */}

      {/* Footer */}
      {/* Footer */}
    </div>
  );
}

export default App;
