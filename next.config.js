const withPlugins = require("next-compose-plugins");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [],
    rehypePlugins: [],
  },
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  images: {
    domains: ["ravencoin.org"],
  },
});

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ["ts", "tsx", "mdx"],
    },
  ],
]);
