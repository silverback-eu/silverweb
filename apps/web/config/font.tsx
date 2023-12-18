import localFont from "next/font/local";

export const fontGraphik = localFont({
  src: [
    {
      path: "../public/font/graphik-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/graphik-lightitalic-webfont.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/graphik-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/graphik-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/graphik-regularitalic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/graphik-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--graphik-webfont",
  display: "swap",
});
