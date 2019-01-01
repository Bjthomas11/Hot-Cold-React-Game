import React from "react";
import "./list.css";

export default function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <ul id="guesslist" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}
