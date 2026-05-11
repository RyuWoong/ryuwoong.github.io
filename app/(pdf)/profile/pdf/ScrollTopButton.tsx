"use client";

import styles from "./page.module.css";

export default function ScrollTopButton() {
  return (
    <button
      className={styles.scrollTopButton}
      type="button"
      aria-label="최상단으로 이동"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
