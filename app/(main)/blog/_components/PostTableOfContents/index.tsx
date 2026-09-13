"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  title: string;
  level: string;
};

export default function PostTableOfContents() {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const expanded = !isMobile || mobileExpanded;

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    let headings: HTMLElement[] = [];

    const syncActiveLink = () => {
      let activeHeading = headings[0];

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
        activeHeading = headings[headings.length - 1];
      } else {
        for (const heading of headings) {
          if (heading.getBoundingClientRect().top <= 128) {
            activeHeading = heading;
          } else {
            break;
          }
        }
      }

      setActiveId(activeHeading?.id ?? "");
    };

    const syncResponsiveState = () => {
      setIsMobile(mobileQuery.matches);
      setMobileExpanded(false);
    };

    const frameId = window.requestAnimationFrame(() => {
      headings = Array.from(document.querySelectorAll<HTMLElement>(
        "#post-content > h1[id], #post-content > h2[id], #post-content > h3[id]"
      ));
      setItems(headings.map((heading) => ({
        id: heading.id,
        title: heading.textContent?.trim() || heading.id,
        level: heading.tagName.slice(1)
      })));
      syncResponsiveState();
      syncActiveLink();
    });

    window.addEventListener("scroll", syncActiveLink, { passive: true });
    window.addEventListener("resize", syncActiveLink);
    mobileQuery.addEventListener("change", syncResponsiveState);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", syncActiveLink);
      window.removeEventListener("resize", syncActiveLink);
      mobileQuery.removeEventListener("change", syncResponsiveState);
    };
  }, [pathname]);

  return (
    <aside
      className={`post-toc${expanded ? " is-open" : ""}`}
      aria-label="Table of contents"
      hidden={items.length === 0}
    >
      <button
        type="button"
        className="post-toc-toggle"
        aria-expanded={expanded}
        aria-controls="post-toc-body"
        onClick={() => {
          if (isMobile) {
            setMobileExpanded((previous) => !previous);
          }
        }}
      >
        <span className="post-toc-toggle__label">toc.sh</span>
        <span className="post-toc-toggle__state">
          {isMobile ? (expanded ? "hide" : "show") : "pinned"}
        </span>
      </button>
      <nav id="post-toc-body" className="post-toc-body" aria-label="Table of contents">
        <ol className="post-toc-list">
          {items.map((item) => (
            <li key={item.id} data-level={item.level}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? "is-active" : undefined}
                aria-current={activeId === item.id ? "location" : undefined}
                onClick={() => {
                  setActiveId(item.id);
                  setMobileExpanded(false);
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
