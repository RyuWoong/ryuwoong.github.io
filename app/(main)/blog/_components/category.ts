import { Post } from "@/types/type";

export const DEFAULT_BLOG_CATEGORIES = ["공지", "개발", "일상"] as const;

const CATEGORY_STYLE_MAP: Record<string, string> = {
  notice: "notice",
  공지: "notice",
  development: "development",
  개발: "development",
  dailylife: "dailylife",
  daily: "dailylife",
  일상: "dailylife",
};

export function getCategoryStyleName(category: string) {
  const normalizedCategory = category.toLowerCase().replace(/[^a-z0-9가-힣]/g, "");

  return CATEGORY_STYLE_MAP[category] ?? CATEGORY_STYLE_MAP[normalizedCategory] ?? normalizedCategory;
}

export function getBlogCategoryFilters(posts: Pick<Post, "categories">[]) {
  const categories = new Set<string>(DEFAULT_BLOG_CATEGORIES);

  posts.forEach((post) => {
    post.categories.forEach((category) => categories.add(category));
  });

  return ["전체", ...Array.from(categories)];
}
