import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/affirmation">
          <Show />
        </Route>
      </Router>
    </div>
  );
}

export default App;
