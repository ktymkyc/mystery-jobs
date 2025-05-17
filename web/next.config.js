const path = require('path');
const sharedPath = path.resolve(__dirname, '../shared');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, './components'),  // スラッシュなし形式
      '@styles': path.resolve(__dirname, './styles'),          // スラッシュなし形式
      '@shared': sharedPath                                    // スラッシュなし形式
    };
    
    // TypeScript ファイルの読み込み対象に shared ディレクトリを追加
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [sharedPath],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      ],
    });
    
    return config;
  },
  
  transpilePackages: ['../shared']
};

module.exports = nextConfig;