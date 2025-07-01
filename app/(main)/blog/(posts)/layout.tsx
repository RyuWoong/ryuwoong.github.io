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
        {`
          const targetDiv = document.querySelector(".post-toc");
          console.log(targetDiv);
          const wrapperDiv = document.createElement("div");
          wrapperDiv.className = "post-toc-container";
          targetDiv.replaceWith(wrapperDiv);
          wrapperDiv.appendChild(targetDiv);
          console.log(wrapperDiv);
        `}
      </Script>
    </div>
  );
}
