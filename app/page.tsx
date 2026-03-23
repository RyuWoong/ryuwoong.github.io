import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

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
        url: "/profile.png",
        width: 1000,
        height: 1000,
        alt: "박정륭 프로필 캐릭터",
      },
    ],
  },
  twitter: {
    title: "RyuWoong | A Developer Worth Working With",
    description: "문제를 함께 해결하는 프론트엔드 개발자 박정륭의 포트폴리오 메인 페이지입니다.",
    images: ["/profile.png"],
  },
};

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
              <span className={styles.titleLine}>Hello</span>
              <span className={styles.titleLine}>World</span>
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
