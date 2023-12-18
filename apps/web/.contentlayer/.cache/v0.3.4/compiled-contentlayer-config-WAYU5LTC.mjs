// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (post) => `/${post._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (post) => post._raw.flattenedPath
  }
};
var META = defineNestedType(() => ({
  name: "META",
  fields: {
    author: { type: "string" },
    description: { type: "string" },
    keywords: { type: "list", of: { type: "string" } },
    date: { type: "date" }
  }
}));
var IndustryInsights = defineDocumentType(() => ({
  name: "IndustryInsights",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    meta: {
      type: "nested",
      of: META
    },
    published: {
      type: "boolean",
      required: true
    },
    category: {
      type: "enum",
      options: ["company-news", "better-work", "around-industry"],
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
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
            ariaLabel: "Link to section"
          }
        }
      ],
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            if (!node.properties.className)
              return;
            node.properties.className.push("line--highlighted");
          }
        }
      ]
    ]
  }
});
export {
  IndustryInsights,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-WAYU5LTC.mjs.map
