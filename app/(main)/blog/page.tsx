import CategoryBox from "./_components/CategoryBox";
import PostList from "./_components/PostList";
import BlogHeader from "./_components/BlogHeader";

export default async function Blog({ searchParams }: { searchParams: { category: string | undefined } }) {
  const category = searchParams.category;

  return (
    <div>
      <BlogHeader category={category} />
      <CategoryBox />
      <PostList category={category} />
    </div>
  );
}
