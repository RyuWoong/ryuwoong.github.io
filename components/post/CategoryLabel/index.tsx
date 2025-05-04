import React from "react";
import styles from "./categorylabel.module.css";

interface CategoryLabelProps {
  category: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ category }) => {
  const categoryClass = category.toLowerCase().replace(/\s+/g, "");

  return <span className={`${styles.categoryLabel} ${styles[categoryClass] || ""}`}>{category}</span>;
};

export default CategoryLabel;
