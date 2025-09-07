# Portfolio V3

Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **PostHog** for analytics
- **Responsive design**
- **Dark/Light theme**
- **SEO optimized**

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio-V3
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env-example .env
# Edit .env with your configuration
```

## 🏗️ Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm run start
```

## 🛠️ Configuration

### Environment Variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Next.js Config

Key configurations in `next.config.js`:
- `experimental.scrollRestoration` - Smooth scrolling
- `generateBuildId` - Unique build IDs
- `headers` - Static asset caching
- `rewrites` - PostHog API proxy

## 📁 Project Structure

```
Portfolio-V3/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── projects/       # Projects pages
│   │   └── project/[slug]/ # Dynamic project pages
│   ├── components/
│   │   ├── portfolio/      # Portfolio components
│   │   └── ThemeProvider.tsx
│   └── data/               # Static data
├── public/                 # Static assets
└── vercel.json            # Vercel deployment config
```

## 🔧 Troubleshooting

### Build Issues

If you encounter build errors:

1. **Clear cache**:
```bash
npm cache clean --force
rm -rf .next
npm install
```

2. **Check lockfiles**:
- Ensure only one package manager is used
- Remove conflicting lockfiles if present

3. **Environment variables**:
- Verify `.env` file exists
- Check variable names match usage

### Deployment Issues

For Vercel deployment problems:

1. **Clear build cache** in Vercel dashboard
2. **Redeploy** with "Ignore build cache" enabled
3. **Check logs** for specific error messages
4. **Verify environment variables** in Vercel

### Runtime Errors

If the site shows blank/white page:

1. **Check browser console** for JavaScript errors
2. **Clear browser cache** (Ctrl+F5)
3. **Try incognito mode** to avoid extensions
4. **Verify static assets** are loading correctly

## 📄 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Update `src/app/layout.tsx`
- **Content**: Modify files in `src/data/`
- **Components**: Customize in `src/components/`

## 📧 Contact

For questions or issues, please open an issue on GitHub.