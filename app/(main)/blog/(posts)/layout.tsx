import "github-markdown-css";
import "./post.css";
import "./code.css";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="post-container">
      <div id="post-content" className="markdown-body">
        {children}
      </div>
    </div>
  );
}
