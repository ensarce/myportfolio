import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses repository name as base path
  // Change 'portfolio' to your actual GitHub repository name
  basePath: process.env.NODE_ENV === "production" ? "/myportfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/myportfolio" : "",
  trailingSlash: true,
};

export default nextConfig;
