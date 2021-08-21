import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Affirmations from "./Components/Affirmations";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/affirmation">
          <Affirmations />
        </Route>
      </Router>
    </div>
  );
}

export default App;
