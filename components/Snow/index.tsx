import { memo, useState, useEffect } from "react";
import styles from "./snow.module.css";

const SNOWFLAKE_COUNT = 50;

const snowflakes = Array.from({ length: SNOWFLAKE_COUNT }).map(() => ({
  delay: `${Math.random() * 10}s`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 0.6 + 0.4}rem`,
  duration: `${Math.random() * 5 + 8}s`,
  drift: `${Math.random() * 40 - 20}px`,
}));

function Snow() {
  return (
    <div className={styles.snowContainer} aria-hidden="true">
      {snowflakes.map((flake, i) => (
        <div
          key={i}
          className={styles.snowflake}
          style={
            {
              "--delay": flake.delay,
              "--left": flake.left,
              "--size": flake.size,
              "--duration": flake.duration,
              "--drift": flake.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default memo(Snow);
