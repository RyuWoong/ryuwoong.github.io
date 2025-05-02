import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface PostTitleProps {
  title: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
}

const PostTitle: FC<PostTitleProps> = ({ title, createdAt, updatedAt, thumbnail }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{updatedAt ?? createdAt}</p>
      <p className={styles.author}>RyuWoong</p>
      {thumbnail && <Image src={thumbnail} alt={title} className={styles.thumbnail} width={1200} height={630} />}
    </div>
  );
};

export default PostTitle;
