import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import remarkBreaks from "remark-breaks";
import slug from "rehype-slug";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [slug, rehypeCodeTitles, rehypePrismPlus, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  output: "export",
};

export default withMDX(nextConfig);
