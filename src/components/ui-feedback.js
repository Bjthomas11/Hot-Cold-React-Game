import React from "react";
import "./ui-feedback.css";

export default function Feedback(props) {
  const key = props.guessCount;

  let guessAgain;

  if (key !== 0) {
    guessAgain = <span className="visuallyhidden">Try Again!</span>;
  }
  return (
    <h2 key={key} id="feedback" role="status">
      {props.feedback} {guessAgain}
    </h2>
  );
}
