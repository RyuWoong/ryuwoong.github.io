"use client";

import styles from "./page.module.css";

export default function PrintButton() {
  return (
    <button className={styles.printButton} type="button" onClick={() => window.print()}>
      PDF로 저장
    </button>
  );
}
