import React from "react";
import "./main-nav.css";

export default function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a href="#what" className="what" aria-label="Game Instructions">
            How To Play?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.onRestartGame()}
          >
            New Game +
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            className="visuallyhidden focusable status-link"
            onClick={() => props.onGenerateAuralUpdate()}
          >
            Hear the current state of the game
          </a>
        </li>
      </ul>
    </nav>
  );
}
