import * as React from "react";

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a className="border border-stone-500 rounded-md" href={href}>
        <h3>{title}</h3>
        <p>{children}</p>
      </a>
      <a className="border border-stone-500 rounded-md" href={href}>
        <h3>{title}</h3>
        <p>{children}</p>
      </a>
      <a className="border border-stone-500 rounded-md" href={href}>
        <h3>{title}</h3>
        <p>{children}</p>
      </a>
      <a className="border border-stone-500 rounded-md" href={href}>
        <h3>{title}</h3>
        <p>{children}</p>
      </a>
    </div>
  );
}
