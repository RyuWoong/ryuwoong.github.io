import { PostCard } from "@/components/post";
import styles from "../blog.module.css";
import { getPostsByCategory } from "@/api/blog";

async function PostList({ category }: { category: string | undefined }) {
  const postList = await getPostsByCategory(category || "all");
  return (
    <div className={styles.postListContainer}>
      {postList.map((post, index) => (
        <PostCard key={post.index} listIndex={index} {...post} />
      ))}
    </div>
  );
}

export default PostList;
