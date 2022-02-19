import withPlugins from "next-compose-plugins";
import withMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export default withPlugins(
  [
    [
      withMDX({
        extension: /\.(md|mdx)$/,
        options: {
          providerImportSource: "@mdx-js/react",
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug],
        },
      }),
      ,
    ],
  ],
  {
    i18n: {
      locales: ["en-US", "es-ES"],
      defaultLocale: "en-US",
    },
    reactStrictMode: true,
    images: {
      domains: ["ravencoin.org"],
    },
    pageExtensions: ["ts", "tsx", "mdx"],
  }
);
