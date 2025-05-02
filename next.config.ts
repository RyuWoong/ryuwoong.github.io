import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeCodeTitles from 'rehype-code-titles';
import remarkBreaks from 'remark-breaks';

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm,remarkBreaks],
    rehypePlugins: [rehypeAutolinkHeadings, rehypeCodeTitles, rehypePrismPlus],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
};


export default withMDX(nextConfig);
