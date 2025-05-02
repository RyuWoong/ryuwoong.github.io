import { Post } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";

interface PostCardProps extends Post {}

function PostCard({ index, title, createdAt, thumbnail }: PostCardProps) {
  return (
    <Link href={`/blog/${index}`} className={styles.postCardContainer}>
      <div>
        <h4 className={styles.postTitle}>{title}</h4>
        <p className={styles.postDate}>{createdAt}</p>
      </div>
      {thumbnail && <Image src={thumbnail} alt={title} width={100} height={100} />}
    </Link>
  );
}

export default PostCard;
