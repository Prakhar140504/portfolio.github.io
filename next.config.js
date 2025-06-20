/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "portfolio-website"

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Enable static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // Configure for GitHub Pages deployment
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  images: {
    unoptimized: true, // Required for static export
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },

  // Disable server-side features for static export
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // Generate static pages
  generateStaticParams: async () => {
    return []
  },

  // Ensure proper static generation
  distDir: "out",
}

module.exports = nextConfig
