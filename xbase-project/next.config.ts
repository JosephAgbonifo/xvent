import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: __dirname, // Fix workspace root warning
  },
};

export default nextConfig;
