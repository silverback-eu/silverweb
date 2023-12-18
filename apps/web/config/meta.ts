import type { Metadata } from "next";

export const meta: Metadata = {
  title: {
    template: "%s | SilverBack",
    default:
      "SilverBack Group - Making the Future Easy, Green, and Productive.",
  },
  description:
    "Build a better future with the SilverBack Group - a global construction and contracting company committed to sustainability and innovation. Contact us today to start building a greener future.",
  authors: { name: "SilverBack Group" },
  creator: "Grimm Integrations for SilverBack",
  openGraph: {
    type: "website",
    siteName: "SilverBack Group",
    url:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_HOST_DOMAIN
        : "http://localhost:3000",
    images: {
      url: "https://silverweb-web-git-grimm-integration-template-silverback.vercel.app/api/og",
    },
  },
  icons: {
    icon: [
      "/icon/favicon.ico?v=4",
      {
        url: "/icon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/icon/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "mask-icon",
        url: "/icon/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/icon/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": "SilverBack Group",
    "application-name": "SilverBack Group",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/icon/browserconfig.xml",
    "theme-color": "dark",
  },
};
