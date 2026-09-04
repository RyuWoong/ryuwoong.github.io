"use client";

import Image from "next/image";

import character from "@/public/profile.png";

import styles from "../pdf/page.module.css";

export default function ProfileVisual() {
  return (
    <div className={styles.profileVisual} aria-label="박정륭 프로필 캐릭터">
      <Image src={character} alt="박정륭 프로필 캐릭터" width={132} height={132} priority />
    </div>
  );
}
