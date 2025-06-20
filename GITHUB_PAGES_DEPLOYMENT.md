# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## 🚀 Quick Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Push to GitHub**:
   \`\`\`bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   \`\`\`

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy your site

3. **Access Your Site**:
   - Your site will be available at: `https://your-username.github.io/portfolio-website`

### Method 2: Manual Deployment

1. **Build the project**:
   \`\`\`bash
   npm run export
   \`\`\`

2. **Deploy using gh-pages**:
   \`\`\`bash
   npm run deploy
   \`\`\`

## 🔧 Configuration

### Repository Settings

1. **Repository Name**: Make sure your repository is named `portfolio-website` or update the `basePath` in `next.config.js`

2. **GitHub Pages Settings**:
   - Source: GitHub Actions
   - Custom domain (optional): Add your domain in repository settings

### Environment Variables

No environment variables are required for basic deployment. For advanced features, you can add:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://your-username.github.io/portfolio-website
\`\`\`

## 📁 File Structure After Build

\`\`\`
out/
├── index.html          # Main entry point
├── _next/             # Next.js assets
├── assets/            # Static assets
├── resume-prakharkumar-parmar.pdf
└── ...other files
\`\`\`

## 🐛 Troubleshooting

### Common Issues

1. **404 Errors**: 
   - Ensure `basePath` in `next.config.js` matches your repository name
   - Check that GitHub Pages is enabled in repository settings

2. **Assets Not Loading**:
   - Verify `assetPrefix` is correctly set in `next.config.js`
   - Check that all asset paths are relative or use the `getAssetPath` utility

3. **Build Failures**:
   - Check the Actions tab in your GitHub repository
   - Ensure all dependencies are listed in `package.json`
   - Verify Node.js version compatibility

### Debug Steps

1. **Local Testing**:
   \`\`\`bash
   npm run export
   npm run serve
   \`\`\`

2. **Check Build Logs**:
   - Go to Actions tab in GitHub
   - Click on the latest workflow run
   - Check build and deploy logs

3. **Verify Configuration**:
   - Ensure `next.config.js` has correct `basePath` and `assetPrefix`
   - Check that `output: 'export'` is set

## 🔄 Updates and Maintenance

### Updating Content

1. Make changes to your components
2. Commit and push to main branch
3. GitHub Actions will automatically rebuild and deploy

### Updating Dependencies

\`\`\`bash
npm update
npm audit fix
git add package*.json
git commit -m "Update dependencies"
git push origin main
\`\`\`

## 📊 Performance Optimization

The build is optimized for GitHub Pages with:

- Static export (no server-side rendering)
- Optimized images and assets
- Minified CSS and JavaScript
- Proper caching headers

## 🔒 Security

- No server-side code (static files only)
- All sensitive data should be in environment variables
- Regular dependency updates for security patches

## 📞 Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Next.js static export documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
3. Create an issue in the repository

## ✅ Deployment Checklist

- [ ] Repository created and code pushed
- [ ] GitHub Pages enabled in repository settings
- [ ] Workflow file present in `.github/workflows/`
- [ ] `next.config.js` configured for static export
- [ ] All assets using correct paths
- [ ] Build completes successfully
- [ ] Site accessible at GitHub Pages URL
- [ ] All links and downloads working
- [ ] Responsive design verified
- [ ] SEO meta tags present

Your portfolio is now ready for GitHub Pages deployment! 🎉
\`\`\`

Let's update the main README to include GitHub Pages specific instructions:
