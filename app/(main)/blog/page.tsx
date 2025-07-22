import styles from "./blog.module.css";
import CategoryBox from "./_components/CategoryBox";
import PostList from "./_components/PostList";

export default async function Blog({ searchParams }: { searchParams: { category: string | undefined } }) {
  const category = searchParams.category;

  return (
    <div>
      <h1 className={styles.blogTitle}>Blog: {category ?? "all"}</h1>
      <CategoryBox />
      <PostList category={category} />
    </div>
  );
}
