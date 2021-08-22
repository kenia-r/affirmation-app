import { useState, useEffect } from "react";
import "../App.css";

const Affirmations = () => {
  const [quote, setQuote] = useState([]);

  // const fetchQuote = async () => {
  //   try {
  //     const ll = fetch(
  //       "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev"
  //     )
  //       .then((res) => res.json())
  //       .then((res2) => setQuote(res2));
  //   } catch (error) {
  //     console.log("hitting this catch", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchQuote();
  // }, []);

  // const { affirmation } = quote;

  return (
    <div>
      {/* <h2 className="Quote">"{affirmation}"</h2>      */}
      <h2 className="Quote">"you can do it"</h2>

    </div>
  );
};

export default Affirmations;
