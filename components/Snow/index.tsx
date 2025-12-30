"use client";

import { memo } from "react";
import styles from "./snow.module.css";

const SNOWFLAKE_COUNT = 50;

function Snow() {
  return (
    <div className={styles.snowContainer}>
      {Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => (
        <div
          key={i}
          className={styles.snowflake}
          style={
            {
              "--delay": `${Math.random() * 10}s`,
              "--left": `${Math.random() * 100}%`,
              "--size": `${Math.random() * 0.6 + 0.4}rem`,
              "--duration": `${Math.random() * 5 + 8}s`,
              "--drift": `${Math.random() * 40 - 20}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default memo(Snow);
