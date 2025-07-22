import { Post } from "@/types/type";
import { readdir } from "fs/promises";
import path from "path";

export async function getPosts(): Promise<Post[]> {
  const postPath = path.resolve(process.cwd(), "app", "(main)", "blog", "(posts)");
  const slugs = (await readdir(postPath, { withFileTypes: true })).filter((dirent) => dirent.isDirectory());
  const post = slugs.map(async ({ name }) => {
    const { metadata } = await import(`@/app/(main)/blog/(posts)/${name}/page.mdx`);
    return { index: name, ...metadata } as Post;
  });

  const list = await Promise.all(post);
  return list.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
}

// 카테고리 리스트를 가져오는 API
export async function getCategories(): Promise<string[]> {
  const posts = await getPosts();
  const allCategories = posts.flatMap((post) => post.categories);
  const uniqueCategories = [...new Set(allCategories)];
  return uniqueCategories.sort(); // 알파벳 순으로 정렬
}

// 카테고리로 포스트를 필터링하는 API
export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getPosts();

  if (category === "all") {
    return posts;
  }

  return posts.filter((post) => post.categories.some((cat) => cat.toLowerCase() === category.toLowerCase()));
}
