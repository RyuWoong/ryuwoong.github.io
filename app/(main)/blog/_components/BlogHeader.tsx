import styles from "../blog.module.css";

function BlogHeader({ category = "All" }: { category: string | undefined }) {
  return <h1 className={styles.blogTitle}>Blog: {category}</h1>;
}

export default BlogHeader;
