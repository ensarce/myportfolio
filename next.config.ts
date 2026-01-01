import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses repository name as base path
  // Change 'portfolio' to your actual GitHub repository name
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  trailingSlash: true,
};

export default nextConfig;
