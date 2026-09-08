import type { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "RyuWoong | A Developer Worth Working With",
  },
  description: "문제를 함께 해결하는 프론트엔드 개발자 박정륭의 포트폴리오 메인 페이지입니다.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "RyuWoong | A Developer Worth Working With",
    description: "문제를 함께 해결하는 프론트엔드 개발자 박정륭의 포트폴리오 메인 페이지입니다.",
    images: [
      {
        url: "/og/ryuwoong.png",
        width: 1200,
        height: 630,
        alt: "RyuWoong의 후드 입은 카디건 웰시코기 캐릭터",
      },
    ],
  },
  twitter: {
    title: "RyuWoong | A Developer Worth Working With",
    description: "문제를 함께 해결하는 프론트엔드 개발자 박정륭의 포트폴리오 메인 페이지입니다.",
    images: ["/og/ryuwoong.png"],
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.signature}>RyuWoong<span>Software Developer</span></header>
      <main className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.accessibleTitle}>Hello, World. App, Web, AX. It’s me. 박정륭.</span>
          <span className={styles.sequence} aria-hidden="true">
            <span className={`${styles.word} ${styles.hello}`}>Hello, World.</span>
            <span className={`${styles.word} ${styles.app}`}>App</span>
            <span className={`${styles.word} ${styles.web}`}>Web</span>
            <span className={`${styles.word} ${styles.ax}`}>AX</span>
            <span className={`${styles.word} ${styles.me}`}>It’s me.</span>
          </span>
        </h1>
        <div className={styles.introduction}>
          <p className={styles.name}>박정륭 <span>/ RyuWoong</span></p>
          <p className={styles.description}>더 나은 경험을 만들고, 문제를 해결하는 사람</p>
        </div>
        <Link href="/profile" className={styles.enterLink}>
          알아보기 <span aria-hidden="true">→</span>
        </Link>
      </main>
      <footer className={styles.footer} aria-hidden="true">
        <span>APP / WEB / AX</span>
        <span className={styles.track}><span /></span>
      </footer>
    </div>
  );
}
