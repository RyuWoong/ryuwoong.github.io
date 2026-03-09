import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "프로필 - RyuWoong",
  description: "프로필 페이지 공사중입니다.",
};

export default function Profile() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.windowBar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <p className={styles.windowTitle}>profile.sh</p>
        </div>

        <div className={styles.content}>
          <p className={styles.code}>UNDER CONSTRUCTION</p>
          <h1 className={styles.title}>PROFILE UNDER CONSTRUCTION</h1>
          <p className={`typo-body ${styles.description}`}>
            새 구조로 다시 정리하는 중이에요. 대신 블로그는 확인할 수 있어요!
          </p>

          <div className={styles.terminalBlock}>
            <p className={styles.line}>
              <span className={styles.prompt}>visitor@ryuwoong:~$</span> open /profile
            </p>
            <p className={styles.response}>error: page is temporarily unavailable</p>
          </div>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryLink}>
              cd /
            </Link>
            <Link href="/blog" className={styles.primaryLink}>
              cd /blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
