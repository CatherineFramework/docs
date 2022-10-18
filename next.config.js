const nextConfig = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    images: { unoptimized: true }
});

module.exports = nextConfig();
