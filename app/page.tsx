import Link from "next/link";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  
  return (
    <div className={styles.page}>
      <Script id="timeout-script">
        {`
          setTimeout(() => {
            window.location.href = "/profile";
          }, 2000);
        `}
      </Script>
      <p className={styles.spotlight} />
      <section>
        <Link href="/profile">
          <p className={styles.title}>Welcome</p>
          <p className={styles.title}>to</p>
          <p className={styles.title}>DarkRoom</p>
        </Link>
      </section>
    </div>
  );
}
