import React from "react";
import { connect } from "react-redux";
import { auralUpdate, restartNewGame } from "../actions";
import "./top-nav.css";

export function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a href="#what" className="what" aria-label="How to play">
            How To Play?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() =>
              props.dispatch(
                restartNewGame(Math.floor(Math.random() * 100) + 1)
              )
            }
          >
            New Game +
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            className="visuallyhidden focusable status-link"
            onClick={() => props.dispatch(auralUpdate())}
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default connect()(TopNav);
