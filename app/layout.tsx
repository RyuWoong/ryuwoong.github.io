import type { Metadata } from "next";
import { Birthstone_Bounce } from "next/font/google";
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

const birthstoneBounce = Birthstone_Bounce({ weight: "400", variable: "--font-bounce", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to DarkRoom",
  description: "A developer who harmoniously solves problems with others.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ url: "https://github.com/RyuWoong", name: "RyuWoong" }],
  openGraph: { images: ["https://avatars.githubusercontent.com/u/36265465?v=4"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${birthstoneBounce.variable}`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
