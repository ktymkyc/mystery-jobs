import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    optimizeCss: false, // LightningCSSをオフにする！
  },
};

export default nextConfig;