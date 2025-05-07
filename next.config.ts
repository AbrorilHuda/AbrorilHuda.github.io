import type { NextConfig } from "next";
const exportMode =
  process.env.EXPORT_MODE === undefined || process.env.EXPORT_MODE !== "false";
const nextConfig: NextConfig = {
  output: exportMode ? "export" : undefined,
  basePath: exportMode ? "/AbrorilHuda.github.io" : "",
  assetPrefix: exportMode ? "/AbrorilHuda.github.io/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
