import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
