/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
    // Disable all SSR for problematic pages
  },
  serverExternalPackages: [],
  // Fix for multiple lockfiles issue
  outputFileTracingRoot: undefined,
  // Generate unique build ID to force cache invalidation
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Disable React strict mode to avoid hydration issues
  reactStrictMode: false,
  // Force all pages to be client-side rendered
  output: undefined,
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