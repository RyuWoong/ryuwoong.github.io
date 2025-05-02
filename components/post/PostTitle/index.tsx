import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import CategoryLabel from "../CategoryLabel";
import dayjs from "dayjs";

interface PostTitleProps {
  title: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  categories: string[];
}

const PostTitle: FC<PostTitleProps> = ({ title, createdAt, updatedAt, thumbnail, categories }) => {
  return (
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        {categories && categories.map((category, idx) => <CategoryLabel key={idx} category={category} />)}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{dayjs(updatedAt ?? createdAt).format("YY년 MM월 DD일")}</p>
      <p className={styles.author}>RyuWoong</p>
      {thumbnail && <Image src={thumbnail} alt={title} className={styles.thumbnail} width={1200} height={630} />}
    </div>
  );
};

export default PostTitle;
