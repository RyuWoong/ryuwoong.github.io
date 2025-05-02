import type { Metadata } from "next";
import { Creepster, Nanum_Gothic } from "next/font/google";
import "./reset.css";
import "./globals.css";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  variable: "--font-nanum-gothic",
  subsets: ["latin"],
});
const creepster = Creepster({ weight: "400", variable: "--font-creepster", subsets: ["latin"] });

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
      <body className={`${nanumGothic.variable} ${creepster.variable}`}>{children}</body>
    </html>
  );
}
