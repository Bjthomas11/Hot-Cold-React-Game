import React from "react";
import Feedback from "./ui-feedback";
import GuessForm from "./guess-form";

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess Section">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}
