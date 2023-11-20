import type { Metadata } from "next";

export const meta: Metadata = {
  title: {
    default:
      "Turbo-plus - The mono repo starter pack with everything that you need",
    template: "%s | Turbo-plus",
  },
  description:
    "Unleash the power of Turbo Repo with our meticulously crafted mono-repo template, Turbo-plus. This template seamlessly integrates Storybook, Tailwind CSS, Next.js, Vite, and a plethora of other tools, enabling you to build and manage complex web applications with unprecedented efficiency and flexibility.",
  icons: {
    icon: [
      "/favicon.ico?v=4",
      {
        url: "/favicon-32x32.png?v=4",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png?v=4",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
};
