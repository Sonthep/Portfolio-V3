/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true
  },
  output: 'standalone',
  images: {
    domains: ['github.com', 'raw.githubusercontent.com']
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
      type: 'asset/resource'
    });
    return config;
  }
}

module.exports = nextConfig