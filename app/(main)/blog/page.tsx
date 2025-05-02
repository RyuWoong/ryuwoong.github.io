import { getPosts } from "@/api/blog";
import { PostCard } from "@/components/post";
import styles from "./blog.module.css";
export default async function Blog() {
  const postList = await getPosts();

  return (
    <div>
      <h1>기록</h1>
      <div className={styles.postListContainer}>
        {postList.map((post, index) => (
          <PostCard key={post.index} listIndex={index} {...post} />
        ))}
      </div>
    </div>
  );
}
