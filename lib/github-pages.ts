/**
 * Utility functions for GitHub Pages deployment
 */

const isProd = process.env.NODE_ENV === "production"
const repoName =
  typeof window !== "undefined"
    ? window.location.pathname.split("/")[1]
    : process.env.GITHUB_REPOSITORY?.split("/")[1] || "portfolio-website"

const basePath = isProd ? `/${repoName}` : ""

/**
 * Get the correct path for GitHub Pages
 */
export function getGitHubPagesPath(path: string): string {
  if (path.startsWith("http") || path.startsWith("//")) {
    return path // External URLs
  }

  if (path.startsWith("/")) {
    return `${basePath}${path}`
  }

  return `${basePath}/${path}`
}

/**
 * Get the base URL for the site
 */
export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin + basePath
  }

  if (isProd) {
    const username = process.env.GITHUB_REPOSITORY?.split("/")[0] || "prakharkumar"
    return `https://${username}.github.io/${repoName}`
  }
  return "http://localhost:3000"
}

/**
 * Get asset path for GitHub Pages
 */
export function getAssetPath(asset: string): string {
  return getGitHubPagesPath(asset)
}

/**
 * Get the repository name from environment or URL
 */
export function getRepoName(): string {
  return repoName
}
