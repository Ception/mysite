import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better debugging
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compress responses
  compress: true,

  // Experimental features
  experimental: {
    // Optimize per-package imports to reduce bundle size
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "zod",
      "react-syntax-highlighter",
    ],
  },

  // Server external packages (moved from experimental)
  serverExternalPackages: [],

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Avoid misleading cache headers on API routes handling POST
    ];
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.NODE_ENV,
  },

  // Enable TypeScript and ESLint checks during build
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Enable static optimization
  trailingSlash: false,

  // Custom redirects if needed
  async redirects() {
    return [];
  },

  // Custom rewrites if needed
  async rewrites() {
    return [];
  },
};

export default nextConfig;
