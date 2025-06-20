import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { getBaseUrl, getRepoName } from "@/lib/github-pages"

const baseUrl = getBaseUrl()
const repoName = getRepoName()

export const metadata: Metadata = {
  title: "Prakharkumar Parmar | Web Developer Portfolio",
  description:
    "Professional portfolio of Prakharkumar Parmar, Web Developer based in Vadodara, Gujarat. Specializing in React.js, responsive web design, and modern web technologies.",
  keywords: ["Web Developer", "React.js", "JavaScript", "Portfolio", "Vadodara", "Gujarat", "Frontend Developer"],
  authors: [{ name: "Prakharkumar Parmar", url: "https://www.linkedin.com/in/prakharkumar-parmar-369451229" }],
  creator: "Prakharkumar Parmar",
  publisher: "Prakharkumar Parmar",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Prakharkumar Parmar | Web Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and skills",
    siteName: "Prakharkumar Parmar Portfolio",
    images: [
      {
        url: `/${repoName}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Prakharkumar Parmar - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakharkumar Parmar | Web Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and skills",
    images: [`/${repoName}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`/${repoName}/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`/${repoName}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/${repoName}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/${repoName}/favicon-16x16.png`} />
        <link rel="manifest" href={`/${repoName}/site.webmanifest`} />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // GitHub Pages SPA routing fix
              (function(l) {
                if (l.search[1] === '/' ) {
                  var decoded = l.search.slice(1).split('&').map(function(s) { 
                    return s.replace(/~and~/g, '&')
                  }).join('?');
                  window.history.replaceState(null, null,
                      l.pathname.slice(0, -1) + decoded + l.hash
                  );
                }
              }(window.location))
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
