import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p className={styles.spotlight} />
      <section>
        <Link href="/main/profile">
          <p className={styles.title}>Welcome</p>
          <p className={styles.title}>to</p>
          <p className={styles.title}>DarkRoom</p>
        </Link>
      </section>
    </div>
  );
}
