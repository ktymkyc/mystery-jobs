const path = require('path');
const sharedPath = path.resolve(__dirname, '../shared');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, './components'),
      '@styles': path.resolve(__dirname, './styles'),
      '@shared': sharedPath  // 重要: ../shared へのパス
    };
    return config;
  },
  
  // トランスパイル設定 - 重要
  transpilePackages: ['../shared']
};

module.exports = nextConfig;