/** @type {import('next').NextConfig} */

const nextConfig = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    darkmode: true,
    images: { unoptimized: true }
});

module.exports = nextConfig();
