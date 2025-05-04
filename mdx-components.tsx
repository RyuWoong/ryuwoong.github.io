import type { MDXComponents } from "mdx/types";
import { PostTitle } from "@/components/post";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    PostTitle,
    ...components,
  };
}
