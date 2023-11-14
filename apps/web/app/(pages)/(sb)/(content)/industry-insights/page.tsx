import type { RawDocumentData } from "contentlayer/source-files";
import dayjs from "dayjs";
import { Separator } from "@silverweb/ui/components/shared";
import type { MDX } from "contentlayer/generated";
import { allDocuments } from "contentlayer/generated";
import type { Metadata } from "next";
import { NavBar, Post } from "./comp";

export interface BlogPost {
  _id: string;
  _raw: RawDocumentData;
  type: "IndustryInsights";
  title: string;
  meta?: {
    _id: string;
    _raw: RawDocumentData;
    type: "META";
    author?: string | undefined;
    description?: string | undefined;
    keywords?: string | undefined;
    date?: string | undefined;
  };
  category: string;
  published: boolean;
  body: MDX;
  slug: string;
  slugAsParams: string;
}

export const metadata: Metadata = {
  title:
    "Industry Insights - What is going on in the industry? What are the latest trends? What are we doing?...",
};

export default function IndustryInsights({
  searchParams,
}: {
  searchParams?: { category: string | string[] | undefined };
}): JSX.Element {
  const params = searchParams;
  const posts: BlogPost[] = (allDocuments as BlogPost[]).sort(
    (a: BlogPost, b: BlogPost) =>
      dayjs(new Date(a.meta?.date || "")).isAfter(new Date(b.meta?.date || ""))
        ? -1
        : 1
  );
  return (
    <div className="max-w-7xl mx-auto px-4">
      <section aria-label="Heading">
        <div className="grid justify-center text-center mt-20">
          <h1 className="font-bold tracking-tight text-4xl sm:text-6xl ">
            Industry Insights
          </h1>
          <h2 className="max-w-xl sm:font-medium mx-auto px-12 sm:px-4 text-lg sm:text-xl tracking-tighter text-warm mt-5">
            What is going on in the industry? What are the latest trends? What
            are we doing?
          </h2>
        </div>
      </section>
      <section aria-label="BlogPostTable" className="mt-10">
        <NavBar params={params} />
        <Separator />
        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-12  justify-around">
          {posts
            .filter((post) => {
              if (params?.category) {
                return post.category === params.category;
              }
              return true;
            })
            .map((post) => (
              <Post
                category={
                  post.category.replace(/-/g, " ").charAt(0).toUpperCase() +
                  post.category.replace(/-/g, " ").slice(1)
                }
                date={post.meta?.date || ""}
                description={post.meta?.description || ""}
                key={post._id}
                title={post.title}
                url={`/industry-insights/${post.slugAsParams}`}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
