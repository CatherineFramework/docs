/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    darkmode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: { unoptimized: true }
});

module.exports = nextConfig();
