import React from "react";
import UIFeedback from "./ui-feedback";
import UserGuessForm from "./guess-form";

export default function GuessSection(props) {
  const { uiFeedback, UserGuessCount } = props;
  return (
    <section aria-label="Guess Section">
      <UIFeedback uiFeedback={uiFeedback} UserGuessCount={UserGuessCount} />
      <UserGuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}
