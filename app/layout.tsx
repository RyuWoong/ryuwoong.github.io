import type { Metadata } from "next";
import { Creepster, Gowun_Batang } from "next/font/google";
import "./reset.css";
import "./globals.css";

const gowunBatang = Gowun_Batang({ weight: "400", variable: "--font-gowun-batang", subsets: ["latin"] });
const creepster = Creepster({ weight: "400", variable: "--font-creepster", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to DarkRoom",
  description: "A developer who harmoniously solves problems with others.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gowunBatang.variable} ${creepster.variable}`}>{children}</body>
    </html>
  );
}
