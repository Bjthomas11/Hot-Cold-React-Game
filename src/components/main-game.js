import React, { Component } from "react";
import Head from "./head";
import UserGuessSection from "./user-guess-section";
import StatusAside from "./status-aside";
import InfoAside from "./info-aside";

export default class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      uiFeedback: "Go Ahead an Guess",
      auralStatus: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      uiFeedback: "Go Ahead an Guess",
      auralStatus: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        uiFeedback: "Enter a number"
      });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let uiFeedback;
    if (difference >= 50) {
      uiFeedback = "Very Cold";
    } else if (difference >= 30) {
      uiFeedback = "You are Cold";
    } else if (difference >= 10) {
      uiFeedback = "Getting Warm";
    } else if (difference >= 1) {
      uiFeedback = "You are Really Hot!";
    } else {
      uiFeedback = "Yay you got it!";
    }

    this.setState({
      uiFeedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = uiFeedback ? `${uiFeedback} | Hot or Cold` : "Hot or Cold";
  }
  generateAuralUpdate() {
    const { guesses, uiFeedback } = this.state;

    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${uiFeedback} You've made ${
      guesses.length
    } ${pluralize ? "userGuesses" : "guess"}`;

    if (guesses.length > 0) {
      auralStatus += `${
        pluralize ? "In order of most to least-recent, they are" : "It was"
      }: ${guesses.reverse().join(", ")}`;
    }

    this.setState({
      auralStatus
    });
  }
  render() {
    const { uiFeedback, guesses, auralStatus } = this.state;
    const UserGuessCount = guesses.length;

    return (
      <div>
        <Head
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <UserGuessSection
            uiFeedback={uiFeedback}
            UserGuessCount={UserGuessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusAside guesses={guesses} auralStatus={auralStatus} />
          <InfoAside />
        </main>
      </div>
    );
  }
}
