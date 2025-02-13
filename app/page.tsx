import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p className={styles.spotlight} />
      <section>
        <p className={`${styles.main} ${styles.title}`}>Welcome</p>
        <p className={`${styles.main} ${styles.title}`}>to</p>
        <p className={`${styles.main} ${styles.title}`}>DarkRoom</p>
      </section>
    </div>
  );
}
