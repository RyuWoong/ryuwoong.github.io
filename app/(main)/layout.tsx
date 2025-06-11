import Link from "next/link";
import styles from "./main.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <span className={styles.title}>Dark Room</span>

        <ul className={styles.nav}>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="https://darkroom.kr" target="_blank">
              Blog
            </Link>
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
