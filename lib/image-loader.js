export default function imageLoader({ src, width, quality }) {
  const isProd = process.env.NODE_ENV === "production"
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "portfolio-website"
  const basePath = isProd ? `/${repoName}` : ""

  // Handle external URLs
  if (src.startsWith("http") || src.startsWith("//")) {
    return src
  }

  // Handle placeholder images
  if (src.includes("placeholder.svg")) {
    return src
  }

  // Handle local images
  const params = new URLSearchParams()
  if (width) params.set("w", width.toString())
  if (quality) params.set("q", quality.toString())

  const paramsString = params.toString()
  const separator = src.includes("?") ? "&" : "?"

  return `${basePath}${src}${paramsString ? separator + paramsString : ""}`
}
