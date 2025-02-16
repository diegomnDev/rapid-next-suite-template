import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import queryClient from '@/lib/react-query';
import QueryProvider from '@/providers/QueryProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },

  // Open Graph
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: '/assets/img/image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons básicos
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${firaCode.className} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased">
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryProvider queryClient={queryClient}>
              <main>{children}</main>
              <div className="absolute right-4 top-4">
                <ThemeToggle />
              </div>
            </QueryProvider>
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
