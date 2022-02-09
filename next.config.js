const isProd = process.env.NODE_ENV === "production";

module.exports = {
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  assetPrefix: isProd ? "/ravenproject.github.io/" : "",
};
