import Link from "next/link";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <div className={styles.gradientOrb} />
        <div className={styles.grain} />
      </div>

      <main className={styles.content}>
        <Link href="/profile" className={styles.enterLink}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              <span className={styles.titleLine}>Enter</span>
              <span className={styles.titleLine}>the</span>
              <span className={styles.titleLine}>DarkRoom</span>
            </h1>
          </div>
          <div className={styles.subtitle}>Press Enter or Click to Continue</div>
        </Link>
      </main>

      <Script
        id="enter-key-handler"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function handleKeyPress(event) {
                if (event.key === 'Enter') {
                  window.location.href = '/profile';
                }
              }
              window.addEventListener('keydown', handleKeyPress);
            })();
          `,
        }}
      />
    </div>
  );
}
