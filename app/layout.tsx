import type { Metadata } from "next";
import { Creepster, Nanum_Gothic } from "next/font/google";
import "./reset.css";
import "./globals.css";

const nanumGothic = Nanum_Gothic({ weight: "400", variable: "--font-nanum-gothic" });
const creepster = Creepster({ weight: "400", variable: "--font-creepster" });

export const metadata: Metadata = {
  title: "Welcome to DarkRoom",
  description: "A developer who harmoniously solves problems with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumGothic.variable} ${creepster.variable}`}>{children}</body>
    </html>
  );
}
