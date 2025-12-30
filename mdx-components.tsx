import type { MDXComponents } from "mdx/types";
import { PostTitle } from "@/app/(main)/blog/_components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    PostTitle,
    ...components,
  };
}
