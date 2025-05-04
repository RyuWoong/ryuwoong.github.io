import "github-markdown-css";
import "./post.css";
import "./code.css";
export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <div className="markdown-body">{children}</div>;
}
