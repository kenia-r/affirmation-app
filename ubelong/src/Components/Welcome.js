import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Welcome() {
  return (
    <div className="App">
      <h1>uBelong</h1>
      <div className="Layout">
        <article>
          Welcome to uBelong. We all have our different struggles, this app is here to
        remind you that you’re human and your feelings are valid. Click
        below to get motivated!
        </article>
      </div>
      <Link to="/affirmation">
        <button className="Animation">Join Us!</button>
      </Link>
    </div>
  );
}
