"use client";

import { useState } from "react";

import { Post } from "@/types/type";

import { getBlogCategoryFilters } from "../category";
import PostCard from "../PostCard";

import styles from "./blogpostlist.module.css";

interface BlogPostListProps {
  posts: Post[];
}

function BlogPostList({ posts }: BlogPostListProps) {
  const [activeCategory, setActiveCategory] = useState("전체");
  const categoryFilters = getBlogCategoryFilters(posts);
  const filteredPosts =
    activeCategory === "전체" ? posts : posts.filter((post) => post.categories.includes(activeCategory));

  return (
    <>
      <section className={styles.filterSection} aria-label="게시글 태그 필터">
        <h2 className={styles.filterTitle}>태그</h2>
        <div className={styles.filterList}>
          {categoryFilters.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                className={styles.filterButton}
                data-active={isActive}
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <div className={styles.postListContainer}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => <PostCard key={post.index} listIndex={index} {...post} />)
        ) : (
          <div className={styles.emptyState}>선택한 태그의 게시글이 아직 없습니다.</div>
        )}
      </div>
    </>
  );
}

export default BlogPostList;
