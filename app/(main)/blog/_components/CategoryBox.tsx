import { getCategories } from "@/api/blog";
import styles from "../blog.module.css";
import Link from "next/link";
import CategoryLabel from "@/components/post/CategoryLabel";

async function CategoryBox() {
  const categories = await getCategories();

  return (
    <div className={styles.categoryListContainer}>
      {categories.map((category) => (
        <Link key={category} href={{ pathname: "/blog", query: { category } }}>
          <CategoryLabel category={category} />
        </Link>
      ))}
    </div>
  );
}

export default CategoryBox;
