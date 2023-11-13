import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "@silverweb/ui/lib/utils";

const components = {
  h1: ({ className, children, ...props }) => (
    <h1
      className={cn(
        "font-bold tracking-tight text-4xl sm:text-6xl",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }) => (
    <h2
      className={cn(
        "text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }) => (
    <h3
      className={cn(
        "text-lg font-bold tracking-tight mb-2",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </h3>
  ),
  a: ({ className, children, ...props }) => (
    <a
      className={cn(
        "text-primary underline-offset-4 hover:underline",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </a>
  ),
  p: ({ className, children, ...props }) => (
    <p
      className={cn(
        "[&:not(:first-child)]:pt-4",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ className, children, ...props }) => (
    <ul
      className={cn(
        "list-disc pl-12 space-y-2 py-2",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ className, children, ...props }) => (
    <ol
      className={cn(
        "list-decimal pl-12 space-y-2 py-2",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ className, children, ...props }) => (
    <li className={className as string | undefined} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ className, children, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  img: ({
    className,
    children,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element -- nextjs doesn't support img tags in mdx
    <img alt={alt} className={cn("rounded-md border", className)} {...props}>
      {children}
    </img>
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props}>
        {children}
      </table>
    </div>
  ),
  tr: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props}>
      {children}
    </tr>
  ),
  th: ({ className, children, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ className, children, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </td>
  ),
  pre: ({ className, children, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className as string | undefined
      )}
      {...props}
    >
      {children}
    </code>
  ),
  Image,
};

interface MdxProps {
  code: string;
}

export function MarkdownWrapper({ code }: MdxProps): JSX.Element {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
