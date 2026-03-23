import { getPosts } from "@/api/blog";

import { BlogPostList } from "./_components";
import styles from "./blog.module.css";

export default async function Blog() {
  const postList = await getPosts();

  return (
    <div>
      <h1 className={styles.blogTitle}>Blog</h1>
      <BlogPostList posts={postList} />
    </div>
  );
}
