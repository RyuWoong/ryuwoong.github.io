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
      <aside className="post-toc" aria-label="Table of contents">
        <button type="button" className="post-toc-toggle" aria-expanded="true">
          <span className="post-toc-toggle__label">toc.sh</span>
          <span className="post-toc-toggle__state">pinned</span>
        </button>
        <nav id="post-toc-body" className="post-toc-body" aria-label="Table of contents">
          <ol className="post-toc-list" />
        </nav>
      </aside>
      <Script id="post-content-script" strategy="afterInteractive">
        {`
          (() => {
            const targetDiv = document.querySelector(".post-toc");
            const postContent = document.getElementById("post-content");
            const tocList = targetDiv?.querySelector(".post-toc-list");
            const toggleButton = targetDiv?.querySelector(".post-toc-toggle");
            const toggleState = targetDiv?.querySelector(".post-toc-toggle__state");
            const mobileQuery = window.matchMedia("(max-width: 768px)");
            let userToggledOnMobile = false;

            if (!targetDiv || !postContent || !tocList || !toggleButton || !toggleState) {
              return;
            }

            targetDiv.setAttribute("aria-label", "Table of contents");
            tocList.replaceChildren();

            if (typeof window.__postTocCleanup === "function") {
              window.__postTocCleanup();
            }

            const tocItems = Array.from(postContent.children)
              .filter((node) => /^H[1-3]$/.test(node.tagName) && node.id)
              .map((heading) => {
                const link = document.createElement("a");
                link.href = "#" + heading.id;
                link.textContent = heading.textContent?.trim() ?? heading.id;

                const listItem = document.createElement("li");
                listItem.dataset.level = heading.tagName.slice(1);
                listItem.appendChild(link);
                tocList.appendChild(listItem);

                return { heading, link };
              });

            if (!tocItems.length) {
              targetDiv.hidden = true;
              return;
            }

            targetDiv.hidden = false;

            const setExpanded = (expanded) => {
              targetDiv.classList.toggle("is-open", expanded);
              toggleButton.setAttribute("aria-expanded", String(expanded));
              toggleButton.setAttribute("aria-controls", "post-toc-body");

              if (toggleState) {
                toggleState.textContent = mobileQuery.matches ? (expanded ? "hide" : "show") : "pinned";
              }
            };

            const placeToc = () => {
              if (mobileQuery.matches) {
                const anchor = postContent.firstElementChild;

                targetDiv.classList.add("is-inline");

                if (anchor) {
                  anchor.insertAdjacentElement("afterend", targetDiv);
                } else {
                  postContent.prepend(targetDiv);
                }
              } else {
                targetDiv.classList.remove("is-inline");
                postContent.insertAdjacentElement("afterend", targetDiv);
              }
            };

            const syncResponsiveState = () => {
              placeToc();

              if (mobileQuery.matches) {
                if (!userToggledOnMobile) {
                  setExpanded(false);
                } else {
                  setExpanded(targetDiv.classList.contains("is-open"));
                }
              } else {
                setExpanded(true);
              }
            };

            const syncActiveLink = () => {
              const offset = 128;
              let activeItem = tocItems[0];

              for (const item of tocItems) {
                if (item.heading.getBoundingClientRect().top <= offset) {
                  activeItem = item;
                } else {
                  break;
                }
              }

              for (const item of tocItems) {
                const isActive = item.link === activeItem.link;
                item.link.classList.toggle("is-active", isActive);

                if (isActive) {
                  item.link.setAttribute("aria-current", "location");
                } else {
                  item.link.removeAttribute("aria-current");
                }
              }
            };

            const handleToggle = () => {
              if (!mobileQuery.matches) {
                return;
              }

              userToggledOnMobile = true;
              setExpanded(!targetDiv.classList.contains("is-open"));
            };

            const handleViewportChange = () => {
              if (!mobileQuery.matches) {
                userToggledOnMobile = false;
              }

              syncResponsiveState();
              syncActiveLink();
            };

            toggleButton.addEventListener("click", handleToggle);

            for (const item of tocItems) {
              item.link.addEventListener("click", () => {
                if (mobileQuery.matches) {
                  userToggledOnMobile = false;
                  setExpanded(false);
                }
              });
            }

            syncResponsiveState();
            syncActiveLink();

            window.addEventListener("scroll", syncActiveLink, { passive: true });
            window.addEventListener("resize", handleViewportChange);
            mobileQuery.addEventListener("change", handleViewportChange);

            window.__postTocCleanup = () => {
              window.removeEventListener("scroll", syncActiveLink);
              window.removeEventListener("resize", handleViewportChange);
              mobileQuery.removeEventListener("change", handleViewportChange);
              toggleButton.removeEventListener("click", handleToggle);
              delete window.__postTocCleanup;
            };
          })();
        `}
      </Script>
    </div>
  );
}
