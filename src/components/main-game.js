import React, { Component } from "react";
import Head from "./head";
import UserGuessSection from "./user-guess-section";
import StatusAside from "./status-aside";
import InfoAside from "./info-aside";

export default class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuesses: [],
      feedback: "Go Ahead an Guess",
      auralStatus: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      userGuesses: [],
      feedback: "Go Ahead an Guess",
      auralStatus: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  userMakesGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: "Enter a number"
      });
      return;
    }

    const guessDifference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (guessDifference >= 50) {
      feedback = "Very Cold";
    } else if (guessDifference >= 30) {
      feedback = "You are Cold";
    } else if (guessDifference >= 10) {
      feedback = "Getting Warm";
    } else if (guessDifference >= 1) {
      feedback = "You are Really Hot!";
    } else {
      feedback = "Yay you got it!";
    }

    this.setState({
      feedback,
      userGuesses: [...this.state.userGuesses, guess]
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : "Hot or Cold";
  }
}
