import React from "react";
import "./ui-feedback.css";

export default function UIFeedback(props) {
  const key = props.UserGuessCount;

  let userGuessesAgain;

  if (key !== 0) {
    userGuessesAgain = <span className="visuallyhidden">Try Again!</span>;
  }
  return (
    <h2 key={key} id="feedback" role="status">
      {props.uiFeedback} {userGuessesAgain}
    </h2>
  );
}
