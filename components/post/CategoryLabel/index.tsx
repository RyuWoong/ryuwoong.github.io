import React from "react";
import styles from "./categorylabel.module.css";

interface CategoryLabelProps {
  category: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ category }) => {
  return <span className={styles.categoryLabel}>{category}</span>;
};

export default CategoryLabel;
