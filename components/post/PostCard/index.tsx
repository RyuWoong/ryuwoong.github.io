import { Post } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";
import CategoryLabel from "../CategoryLabel";

interface PostCardProps extends Post {
  listIndex: number;
}

function PostCard({ listIndex, index, title, description, createdAt, thumbnail, categories }: PostCardProps) {
  // CSS 변수를 이용해 스타일 속성에 인덱스 전달
  const cardStyle = { "--card-index": listIndex } as React.CSSProperties;

  return (
    <Link href={`/blog/${index}`} className={styles.postCardContainer} style={cardStyle}>
      <div className={styles.contentContainer}>
        <div className={styles.categoryContainer}>
          {categories && categories.map((category, idx) => <CategoryLabel key={idx} category={category} />)}
        </div>
        <h4 className={styles.postTitle}>{title}</h4>
        <p className={styles.postDescription}>{description}</p>

        <p className={styles.postDate}>{createdAt}</p>
      </div>
      {thumbnail && (
        <div className={styles.thumbnailContainer}>
          <Image src={thumbnail} alt={title} width={100} height={100} className={styles.thumbnail} />
        </div>
      )}
    </Link>
  );
}

export default PostCard;
