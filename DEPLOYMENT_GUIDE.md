# GitHub Pages Deployment Guide

This guide provides step-by-step instructions for deploying your Next.js portfolio to GitHub Pages.

## 🚀 Quick Deployment Steps

### 1. Repository Setup

1. **Fork or Clone** this repository
2. **Rename** the repository to match your desired URL structure (e.g., `portfolio-website`)
3. **Update** the repository name in `next.config.js` if different from `portfolio-website`

### 2. Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Configure Repository Secrets (Optional)

For advanced deployments, you can add these secrets in **Settings > Secrets and variables > Actions**:

- `VERCEL_TOKEN`: For Vercel deployments
- `CUSTOM_DOMAIN`: If using a custom domain

### 4. Deploy

Simply push to the `main` branch:

\`\`\`bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
\`\`\`

The GitHub Action will automatically build and deploy your site.

## 🔧 Configuration Details

### Next.js Configuration

The `next.config.js` is configured for static export with:

- **Static Export**: `output: "export"`
- **Base Path**: Automatically set based on repository name
- **Asset Prefix**: Configured for GitHub Pages URLs
- **Image Optimization**: Disabled for static hosting
- **Trailing Slash**: Enabled for GitHub Pages compatibility

### Build Process

The build process:

1. **Installs** dependencies
2. **Builds** the Next.js application
3. **Exports** static files to `out/` directory
4. **Adds** `.nojekyll` file to prevent Jekyll processing
5. **Deploys** to GitHub Pages

### File Structure After Build

\`\`\`
out/
├── index.html              # Main entry point
├── 404.html               # Custom 404 page with SPA routing
├── _next/                 # Next.js generated assets
│   ├── static/           # Static assets
│   └── ...
├── assets/               # Your static assets
├── resume-prakharkumar-parmar.pdf
└── site.webmanifest      # PWA manifest
\`\`\`

## 🌐 URL Structure

Your site will be available at:
- **GitHub Pages**: `https://username.github.io/repository-name`
- **Custom Domain**: `https://your-domain.com` (if configured)

## 🔍 Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - The `404.html` file handles SPA routing
   - Ensure the file is present in the `out/` directory

2. **Assets Not Loading**
   - Check `basePath` and `assetPrefix` in `next.config.js`
   - Verify asset paths use the `getAssetPath` utility

3. **Build Failures**
   - Check the **Actions** tab for build logs
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

4. **Routing Issues**
   - GitHub Pages serves static files
   - Client-side routing is handled by the 404.html redirect

### Debug Steps

1. **Local Testing**:
   \`\`\`bash
   npm run export
   npm run serve
   \`\`\`

2. **Check Build Logs**:
   - Go to **Actions** tab in GitHub
   - Click on the latest workflow run
   - Review build and deploy logs

3. **Verify Files**:
   - Ensure `index.html` exists in `out/`
   - Check that assets are properly referenced
   - Verify all paths are relative or use base path

## 📊 Performance Optimization

The build is optimized for GitHub Pages:

- **Static Generation**: No server-side rendering
- **Asset Optimization**: Minified CSS and JavaScript
- **Image Optimization**: Custom loader for static hosting
- **Caching**: Proper cache headers for static assets

## 🔒 Security Considerations

- **Static Files Only**: No server-side code execution
- **Environment Variables**: Only `NEXT_PUBLIC_*` variables are included
- **Dependencies**: Regular updates for security patches
- **Content Security**: No dynamic content generation

## 📱 Mobile Optimization

The site is optimized for mobile devices:

- **Responsive Design**: Works on all screen sizes
- **PWA Support**: Web manifest for app-like experience
- **Touch Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized assets and minimal JavaScript

## 🎯 SEO Optimization

SEO features included:

- **Meta Tags**: Proper title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Schema markup for better indexing

## 🚀 Advanced Configuration

### Custom Domain Setup

1. **Add CNAME file** to `public/` folder with your domain
2. **Configure DNS** with your domain provider:
   - Add CNAME record pointing to `username.github.io`
3. **Enable custom domain** in GitHub Pages settings
4. **Wait for DNS propagation** (up to 24 hours)

### Environment Variables

For different environments:

\`\`\`bash
# Development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Production (GitHub Pages)
NEXT_PUBLIC_SITE_URL=https://username.github.io/repository-name

# Custom Domain
NEXT_PUBLIC_SITE_URL=https://your-domain.com
\`\`\`

### Analytics Integration

Add analytics by updating the layout:

\`\`\`tsx
// In app/layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: \`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    \`,
  }}
/>
\`\`\`

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] Repository name matches configuration
- [ ] GitHub Pages is enabled
- [ ] All personal information is updated
- [ ] Resume PDF is added to public folder
- [ ] Project images and assets are optimized
- [ ] All links are tested and working
- [ ] Responsive design is verified
- [ ] SEO meta tags are configured
- [ ] Build completes without errors
- [ ] Local testing passes

## 📞 Support

If you encounter issues:

1. **Check Documentation**: Review Next.js and GitHub Pages docs
2. **Search Issues**: Look for similar problems in the repository
3. **Create Issue**: Report bugs with detailed information
4. **Community Help**: Ask questions in relevant forums

Your portfolio is now ready for GitHub Pages! 🎉
