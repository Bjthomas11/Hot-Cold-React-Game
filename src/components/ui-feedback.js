import React from "react";
import "./ui-feedback.css";

export default function Feedback(props) {
  const key = props.userGuessCount;

  let userGuessAgain;

  if (key != 0) {
    userGuessAgain = <span className="visuallyhidden">Try Again!</span>;
  }
  return (
    <h2 key={key} id="feedback" role="status">
      {props.feedback} {userGuessAgain}
    </h2>
  );
}
