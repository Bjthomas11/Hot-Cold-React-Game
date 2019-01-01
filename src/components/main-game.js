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
      feedback: "Go Ahead an Guess",
      auralStatus: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: "Go Ahead an Guess",
      auralStatus: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: "Enter a number"
      });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = "Very Cold";
    } else if (difference >= 30) {
      feedback = "You are Cold";
    } else if (difference >= 10) {
      feedback = "Getting Warm";
    } else if (difference >= 1) {
      feedback = "You are Really Hot!";
    } else {
      feedback = "Yay you got it!";
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : "Hot or Cold";
  }
  generateAuralUpdate() {
    const { guesses, feedback } = this.state;

    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${
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
    const { feedback, guesses, auralStatus } = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Head
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <UserGuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusAside guesses={guesses} auralStatus={auralStatus} />
          <InfoAside />
        </main>
      </div>
    );
  }
}
