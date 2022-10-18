/** @type {import('next').NextConfig} */

const nextConfig = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    darkmode: true,
    basePath: '/catherine-docs',
    assetPrefix: '/catherine-docs/',
    images: { unoptimized: true }
});

module.exports = nextConfig();
