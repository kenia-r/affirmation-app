import { useState, useEffect } from "react";
// import { affirmations } from '../Components/QuotesData';

const Affirmations = () => {
  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    try {
      const ll = fetch(
        "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev"
      )
        .then((res) => res.json())
        .then(res2 => setQuote(res2));
    } catch (error) {
      console.log("hitting this catch", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // const fetchQuote = () => {
  //   try {
  //     const randQuote = affirmations[Math.floor(Math.random() * affirmations.length)];
  //     setQuote(randQuote);
  //     debugger
  //   } catch (error) {
  //     console.log("In the fetchQuote catch", error)
  //   }
  // };

  // useEffect(() => {
  //   fetchQuote();
  // }, [])

 const affirmation = quote

  return (
    <div>
      <h2>"{affirmation}"</h2>
    </div>
  );
};

export default Affirmations;
