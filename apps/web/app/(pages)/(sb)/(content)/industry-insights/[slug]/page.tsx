import React from "react";
import dayjs from "dayjs";
import type { RawDocumentData } from "contentlayer/source-files";
import { notFound } from "next/navigation";
import { Button, Separator } from "@silverweb/ui/components/shared";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import type { MDX } from "contentlayer/generated";
import { allDocuments } from "contentlayer/generated";
import { MarkdownWrapper } from "./comp";

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

export const generateMetadata = ({
  params: { slug },
}: {
  params: { slug: string };
}): Metadata => {
  const ii_post: BlogPost | undefined = (allDocuments as BlogPost[]).find(
    (post) => post.slugAsParams === slug
  );
  if (!ii_post) {
    console.error(`Failed to find post for slug: ${slug}`);
    notFound();
  }
  return {
    title: ii_post.title,
    description: ii_post.meta?.description,
    keywords: ii_post.meta?.keywords,
    authors: {
      url: "https://silverback-group.eu",
      name: ii_post.meta?.author,
    },
    publisher: "Silverback Group",
    category: ii_post.category,
    openGraph: {
      type: "article",
      siteName: "SilverBack Group - Industry Insights",
      url: `${
        process.env.NODE_ENV === "production"
          ? process.env.NEXT_PUBLIC_HOST_DOMAIN
          : "http://localhost:3000"
      }/industry-insights/${ii_post.slugAsParams}`,
      images: {
        url: `/industry-insights/${ii_post.slugAsParams}.jpg`,
      },
    },
  };
};

function getPostFromParams(slug: string): BlogPost {
  const ii_post: BlogPost | undefined = (allDocuments as BlogPost[]).find(
    (post) => post.slugAsParams === slug
  );
  if (!ii_post) {
    console.error(`Failed to find post for slug: ${slug}`);
    notFound();
  }
  return ii_post as BlogPost;
}

export default function IndustryInsights({
  params,
}: {
  params: {
    slug: string;
  };
}): JSX.Element {
  const ii_post = getPostFromParams(params.slug);
  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-4 px-4">
      <div className="flex justify-between">
        <Button asChild className="p-0 h-auto" variant="link">
          <Link href="/industry-insights">See all posts</Link>
        </Button>
        <div className="text-warm text-sm">
          Published on{" "}
          {dayjs(new Date(ii_post.meta?.date || new Date())).format(
            "MMM DD, YYYY"
          )}
        </div>
      </div>
      <h1 className="text-6xl font-bold tracking-tighter">{ii_post.title}</h1>
      <div className="text-lg text-warm">{ii_post.meta?.description}</div>
      <div className="relative overflow-hidden aspect-[1.91/1] bg-slate-400 rounded-lg">
        <Image
          alt={`${ii_post.title} Cover`}
          className="object-cover"
          fill
          src={`/industry-insights/${ii_post.slugAsParams}.jpg`}
        />
      </div>
      <div className="h-5" />
      <Separator />
      <div className="h-5" />
      <article>
        <MarkdownWrapper code={ii_post.body.code} />
      </article>
    </div>
  );
}
