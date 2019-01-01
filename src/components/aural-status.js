import React from "react";

export default function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atmoic="true"
    >
      {props.auralStatus}
    </p>
  );
}
