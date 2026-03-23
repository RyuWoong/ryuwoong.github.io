import React from "react";

import { getCategoryStyleName } from "../category";

import styles from "./categorylabel.module.css";

interface CategoryLabelProps {
  category: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ category }) => {
  const categoryClass = getCategoryStyleName(category);

  return <span className={`${styles.categoryLabel} ${styles[categoryClass] || ""}`}>{category}</span>;
};

export default CategoryLabel;
