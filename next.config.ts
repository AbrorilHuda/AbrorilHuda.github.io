import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/AbrorilHuda.github.io" : "",
  assetPrefix: isProd ? "/AbrorilHuda.github.io/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
