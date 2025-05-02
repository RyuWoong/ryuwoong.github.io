import { readdir } from 'fs/promises';
import path from 'path';
import { Post } from '@/types/type';

export async function getPosts(): Promise<Post[]> {
  const postPath = path.resolve(process.cwd(),  'app', '(main)', 'blog', '(posts)');

  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../../app/(main)/blog/(posts)/${name}/page.mdx`);
      return { index: name, ...metadata, } as Post;
    }),
  );

  posts.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));

  return posts;
}