import type { ComputedFields } from "contentlayer/source-files";
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { Options } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (post) => `/${post._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (post) => post._raw.flattenedPath,
  },
};

const META = defineNestedType(() => ({
  name: "META",
  fields: {
    author: { type: "string" },
    description: { type: "string" },
    keywords: { type: "list", of: { type: "string" } },
    date: { type: "date" },
  },
}));

export const IndustryInsights = defineDocumentType(() => ({
  name: "IndustryInsights",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    meta: {
      type: "nested",
      of: META,
    },
    published: {
      type: "boolean",
      required: true,
    },
    category: {
      type: "enum",
      options: ["company-news", "better-work", "around-industry"],
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "industry-insights",
  documentTypes: [IndustryInsights],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      [
        rehypePrettyCode as (
          options?: Options | undefined,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Type mismatch
        ) => any,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            if (!node.properties.className) return;
            node.properties.className.push("line--highlighted");
          },
        } as Options,
      ],
    ],
  },
});
