# Prakharkumar Parmar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, achievements, and professional experience as a Web Developer.

🌐 **Live Demo**: [https://prakharkumar.github.io/portfolio-website](https://prakharkumar.github.io/portfolio-website)

![Portfolio Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Portfolio+Website+Preview)

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Interactive Sections**: Smooth animations and transitions
- **Project Showcase**: Filterable project gallery with live demos and source code links
- **Skills Visualization**: Interactive skill progress indicators
- **Achievements & Certifications**: Tabbed interface for professional accomplishments
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Direct PDF resume download functionality
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **GitHub Pages Ready**: Fully configured for GitHub Pages deployment

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (Static Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn**
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/prakharkumar/portfolio-website.git
cd portfolio-website
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

\`\`\`bash
npm run export
# or
yarn export
\`\`\`

This creates an `out` folder with the static files ready for deployment.

## 🌐 GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Fork or clone this repository**
2. **Update the repository name** to `portfolio-website` (or update `basePath` in `next.config.js`)
3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as the source
4. **Push to main branch** - deployment happens automatically!

### Manual Deployment

\`\`\`bash
npm run deploy
\`\`\`

### Custom Domain (Optional)

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

For detailed deployment instructions, see [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md).

## 📁 Project Structure

\`\`\`
portfolio-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Home page
│   ├── not-found.tsx     # 404 page
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # SEO robots.txt
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about.tsx         # About section
│   ├── achievements.tsx  # Achievements & certifications
│   ├── contact.tsx       # Contact form
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects showcase
│   └── skills.tsx        # Skills section
├── lib/                  # Utility functions
│   └── github-pages.ts   # GitHub Pages utilities
├── public/               # Static assets
│   ├── resume-prakharkumar-parmar.pdf
│   ├── site.webmanifest  # PWA manifest
│   └── favicon files
├── .github/workflows/    # GitHub Actions
│   └── deploy-gh-pages.yml
├── next.config.js        # Next.js configuration (GitHub Pages optimized)
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
\`\`\`

## 🔧 Configuration

### GitHub Pages Specific Settings

The project is pre-configured for GitHub Pages with:

- **Static Export**: `output: 'export'` in `next.config.js`
- **Base Path**: Automatically set based on repository name
- **Asset Optimization**: Images and assets optimized for static hosting
- **SEO**: Sitemap, robots.txt, and meta tags configured
- **PWA Ready**: Web manifest and service worker support

### Customization

1. **Personal Information**: Update content in each component
2. **Repository Name**: If different from `portfolio-website`, update `basePath` in `next.config.js`
3. **Resume**: Replace `public/resume-prakharkumar-parmar.pdf`
4. **Projects**: Modify the projects array in `components/projects.tsx`
5. **Skills**: Update the skills array in `components/skills.tsx`
6. **Achievements**: Customize achievements in `components/achievements.tsx`
7. **Colors**: Modify the color scheme in `tailwind.config.ts`

## 🚀 Alternative Deployment Options

### Vercel (Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prakharkumar/portfolio-website)

### Netlify (Alternative)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/prakharkumar/portfolio-website)

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔍 SEO Features

- Meta tags for social media sharing
- Structured data for search engines
- Sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card support
- Performance optimized for Core Web Vitals

## 🐛 Troubleshooting

### Common GitHub Pages Issues

1. **404 Errors**: Check `basePath` in `next.config.js` matches repository name
2. **Assets Not Loading**: Verify `assetPrefix` configuration
3. **Build Failures**: Check GitHub Actions logs in the Actions tab

### Local Development Issues

1. **Dependencies**: Run `npm install` to ensure all packages are installed
2. **Build Errors**: Run `npm run lint` and `npm run type-check`
3. **Styling Issues**: Ensure Tailwind CSS is properly configured

For detailed troubleshooting, see [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📞 Contact

**Prakharkumar Parmar**
- Email: prakharparmar90842@gmail.com
- LinkedIn: [prakharkumar-parmar-369451229](https://www.linkedin.com/in/prakharkumar-parmar-369451229)
- Phone: +91 8849552587
- Portfolio: [https://prakharkumar.github.io/portfolio-website](https://prakharkumar.github.io/portfolio-website)

---

⭐ Star this repository if you found it helpful!
