import type { MetadataRoute } from "next"
import { getBaseUrl } from "@/lib/github-pages"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/out/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
