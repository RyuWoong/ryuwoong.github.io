import Link from "next/link";
import styles from "./main.module.css";
import Snow from "@/components/Snow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="main" className={styles.container}>
      <Snow />
      <header className={styles.header}>
        <span className={styles.title}>Dark Room</span>
        <ul className={styles.nav}>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="https://github.com/RyuWoong" target="_blank">
              Github
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}
