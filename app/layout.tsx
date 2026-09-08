import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./reset.css";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const pretendard = localFont({
  src: "../styles/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryuwoong.me"),
  title: {
    default: "RyuWoong | A Developer Worth Working With",
    template: "%s | RyuWoong",
  },
  description: "문제를 함께 해결하며 사용자 경험과 개발 생산성을 높이는 프론트엔드 개발자 박정륭의 포트폴리오와 기록입니다.",
  applicationName: "RyuWoong",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ url: "https://github.com/RyuWoong", name: "박정륭" }],
  creator: "박정륭",
  publisher: "박정륭",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "RyuWoong",
    url: "/",
    title: "RyuWoong | A Developer Worth Working With",
    description: "문제를 함께 해결하며 사용자 경험과 개발 생산성을 높이는 프론트엔드 개발자 박정륭의 포트폴리오와 기록입니다.",
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
    card: "summary_large_image",
    title: "RyuWoong | A Developer Worth Working With",
    description: "문제를 함께 해결하며 사용자 경험과 개발 생산성을 높이는 프론트엔드 개발자 박정륭의 포트폴리오와 기록입니다.",
    images: ["/og/ryuwoong.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>
        <ThemeToggle />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
