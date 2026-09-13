import "github-markdown-css";
import "./code.css";
import "./post.css";
import PostTableOfContents from "../_components/PostTableOfContents";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="post-container">
      <div id="post-content" className="markdown-body">
        {children}
      </div>
      <PostTableOfContents />
    </div>
  );
}
