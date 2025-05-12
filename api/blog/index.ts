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
