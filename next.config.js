const nextConfig = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    images: { unoptimized: true },
    basePath: '/catherine-docs',
    assetPrefix: '/catherine-docs/'
});

module.exports = nextConfig();
