# Jaques Fang - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark/light theme toggle
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations with Framer Motion
- ♿ Accessible and SEO-friendly
- 🎯 Type-safe with TypeScript

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── contexts/        # React contexts
│   └── ThemeContext.tsx
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Customization

- Update personal information in the respective component files
- Modify colors in `tailwind.config.js`
- Adjust animations in component files using Framer Motion
- Theme preferences are saved in localStorage

## Deployment

This portfolio can be easily deployed to free hosting services. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Options:

**🚀 Vercel (Recommended):**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

**🌐 Netlify:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy!

Both services offer:
- Free SSL certificates
- Custom domain support
- Automatic deployments
- Global CDN

## License

MIT

