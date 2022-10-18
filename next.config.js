const isProd = process.env.NODE_ENV === "production";

const nextConfig = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    images: { unoptimized: true },
    assetPrefix: isProd ? "/catherine-docs/" : ""
});

module.exports = nextConfig();
