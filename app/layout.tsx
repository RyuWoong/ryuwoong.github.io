import type { Metadata } from "next";
import { Birthstone_Bounce, Nanum_Gothic } from "next/font/google";
import "./reset.css";
import "./globals.css";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  variable: "--font-nanum-gothic",
  subsets: ["latin"],
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
      <body className={`${nanumGothic.variable} ${birthstoneBounce.variable}`}>{children}</body>
    </html>
  );
}
