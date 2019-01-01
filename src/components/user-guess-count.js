import React from "react";
import "./user-guess-count.css";

export default function UserGuessCount(props) {
  const isPlural = props.guessCount !== 1;
  const guessNoun = isPlural ? "guesses" : "guess";

  return (
    <h2 id="guessCount">
      You've made <span id="count">{props.guessCount}</span> {guessNoun}!
    </h2>
  );
}
