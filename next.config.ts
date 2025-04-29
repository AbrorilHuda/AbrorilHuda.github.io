import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/AbrorilHuda.github.io", // Ganti dengan nama repository kamu
  assetPrefix: "/AbrorilHuda.github.io/", // Ganti dengan nama repository kamu
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
