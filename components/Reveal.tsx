import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import classNames from "classnames";

export function Reveal({ children, timeout = 0 }) {
  const [revealed, setRevealed] = useState(false);

  function _reveal() {
    setTimeout(() => {
      setRevealed(true);
    }, timeout)
  }

  const classes = classNames(
    "transition duration-1000 ease-in-out",
    revealed ? "opacity-1" : "opacity-0"
  );

  return (
    <Waypoint onEnter={_reveal}>
      <div className={classes}>{children}</div>
    </Waypoint>
  );
}
