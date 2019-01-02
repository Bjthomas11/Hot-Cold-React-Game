import React from "react";
import "./user-guess-count.css";

export default function UserGuessCount(props) {
  const isPlural = props.UserGuessCount !== 1;
  const guessNoun = isPlural ? "guesses" : "guess";

  return (
    <h2 id="guessCount">
      You've made <span id="count">{props.UserGuessCount}</span> {guessNoun}!
    </h2>
  );
}
