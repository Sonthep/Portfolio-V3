/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true
  },
  // Fix for multiple lockfiles issue
  outputFileTracingRoot: undefined,
  // Generate unique build ID to force cache invalidation
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  // Disable static generation timeout for not-found pages
  staticPageGenerationTimeout: 1000,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
      type: 'asset/resource'
    });
    return config;
  },
  // Add these configurations to fix deployment issues
  trailingSlash: false,
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
  // Ensure proper headers for static assets
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig