import "github-markdown-css";
import "./code.css";
import "./post.css";
import Script from "next/script";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="post-container">
      <div id="post-content" className="markdown-body">
        {children}
      </div>
      <Script id="post-content-script" strategy="afterInteractive">
        {/* HTML가 렌더된 후에 TOC가 생성되면, TOC를 감싸는 div 추가. */}
        {`
          const targetDiv = document.querySelector(".post-toc");
          const wrapperDiv = document.createElement("div");
          wrapperDiv.className = "post-toc-container";
          targetDiv.replaceWith(wrapperDiv);
          wrapperDiv.appendChild(targetDiv);
        `}
      </Script>
    </div>
  );
}
