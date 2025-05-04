import { Post } from "@/types/type";

const list: Post[] = [
  {
    index: 1,
    title: "새로운 시작, 새로운 블로그",
    description:
      "티스토리 블로그에 아쉬움을 느끼던 와중, 직접 블로그를 만들기로 마음 먹었습니다. 기존 능력을 살려 React 프레임워크인 Next.js를 사용하고, 개발자라면 익숙한 Markdown을 활용하여 글을 작성하는 방식으로 설계했습니다.",
    createdAt: "2025-05-02",
    thumbnail: "/images/blog/notice.jpg",
    categories: ["Notice"],
  },
];

export async function getPosts(): Promise<Post[]> {
  // const postPath = path.resolve(process.cwd(), "app", "(main)", "blog", "(posts)");
  // const slugs = (await readdir(postPath, { withFileTypes: true })).filter((dirent) => dirent.isDirectory());
  // const post = slugs.map(async ({ name }) => {
  //   const { metadata } = await import(`@/app/(main)/blog/(posts)/${name}/page.mdx`);
  //   return { index: name, ...metadata } as Post;
  // });

  // const list = await Promise.all(post);
  return list.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
}
