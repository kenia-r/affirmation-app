import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>uBelong</h1>
      <article>
        “welcome, we all have our different struggles. this app is here to
        remind you that you’re human and your feelings are valid. please click
        the button below to hear something nice.”
      </article>
      <Link to="/affirmation"><button>Hey you</button></Link>
    </div>
  );
}
