# 🚀 Rapid Next Suite Template

![Next.js](https://img.shields.io/badge/Next.js-15.1.7-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind%20CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Clerk](https://img.shields.io/badge/Clerk-6.11.3-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.3-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-Workspace-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

A modern, feature-rich Next.js template engineered for rapid application development with enterprise-grade tools and best practices built-in.

## ✨ Features

### 🛠️ Core Technologies

- **Next.js 15** with Turbopack - Lightning-fast builds and development
- **React 19** - The latest React features and improvements
- **TypeScript** - Full type safety throughout the project
- **Tailwind CSS** - Utility-first CSS framework with shadcn/ui components
- **Framer Motion** - Beautiful animations and transitions

### 🔐 Authentication & Security

- **Clerk Integration** - Secure authentication and user management
- **Form Validation** - Zod schema validation
- **React Hook Form** - Efficient form handling and validation

### 📦 State Management

- **Zustand** - Simple and flexible state management
- **Jotai** - Atomic state management
- **TanStack Query** - Powerful data synchronization

### 🎨 UI Components & Styling

- **shadcn/ui** - High-quality, customizable components
- **Lucide Icons** - Beautiful, consistent icons
- **Tailwind Variants** - Dynamic variant styling
- **Next Themes** - Dark mode support

### 🛠️ Development Tools

- **ESLint** with @antfu/config - Strict linting rules
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitizen** - Standardized commit messages
- **Semantic Release** - Automated versioning
- **Bundle Analyzer** - Performance optimization

### 🐳 Deployment

- **Docker Support** - Production-ready containerization
- **Multi-stage builds** - Optimized Docker images
- **PNPM** - Fast, disk space efficient package management

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/rapid-next-suite-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 📦 Project Structure

```bash
rapid-next-suite-template/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── robots.ts           # SEO robots configuration
│   │   └── sitemap.ts          # Sitemap configuration
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...             # Other UI components
│   │   └── ThemeToggle.tsx     # Custom components
│   ├── config/                 # App configuration
│   │   └── site.ts
│   ├── constants/              # Global constants
│   │   └── index.ts
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                    # Utility functions
│   │   ├── errorHandler.ts
│   │   ├── react-query.ts
│   │   └── utils.ts
│   ├── providers/              # React context providers
│   │   ├── QueryProvider.tsx
│   │   └── ThemeProvider.tsx
│   ├── schema/                 # Zod schemas and validations
│   │   ├── auth.schema.ts
│   │   └── profile.schema.ts
│   ├── store/                  # Zustand state management
│   │   ├── auth.store.ts
│   │   ├── theme.store.ts
│   │   └── ui.store.ts
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts
│   └── utils/                  # Helper functions
│       ├── helpers.ts
│       └── logger.ts
├── public/                     # Static assets
│   ├── favicon.ico
│   └── icon.svg
├── .husky/                     # Git hooks
├── .vscode/                    # VS Code configuration
├── Dockerfile                  # Docker configuration
├── docker-compose.yml          # Docker Compose configuration
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

The project follows a clean and modular structure:

- **src/**: Main source code directory
  - **app/**: Next.js pages and layouts
  - **components/**: Reusable React components
  - **hooks/**: Custom React hooks
  - **providers/**: Context providers
  - **schema/**: Zod validation schemas
  - **store/**: Zustand state management
  - **lib/**: Core utilities and helpers
  - **utils/**: Helper functions
  - **types/**: TypeScript type definitions
- **public/**: Static files
- Configuration files for various tools and services

## 🛠️ Development Commands

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm check-types  # Check TypeScript types
pnpm commit       # Create a commit with Commitizen
pnpm analyze      # Analyze bundle size
```

## 🔧 Configuration

The template comes with pre-configured:

- TypeScript configuration
- ESLint with @antfu/config
- Prettier formatting
- Tailwind CSS
- Commitlint
- Semantic Release
- Docker configuration

## 📚 Documentation

For detailed documentation on the included packages:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Clerk Documentation](https://clerk.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
