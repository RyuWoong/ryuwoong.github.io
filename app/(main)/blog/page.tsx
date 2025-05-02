import { getPosts } from "@/api/blog";
import { PostCard } from "@/components/post";

export default async function Blog() {

  const postList = await getPosts();

  return (
    <div>
      <h1>기록</h1>
      {postList.map((post) => (
        <PostCard key={post.index} {...post} />
      ))}
    </div>
  );
}
