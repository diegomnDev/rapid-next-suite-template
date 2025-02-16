import { siteConfig } from '@/config/site';
import { Github } from 'lucide-react';
import Link from 'next/link';

// components/Footer.tsx
export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Rapid Next Suite Template</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Making your life easier with our amazing app.
              </p>
              <Link href={siteConfig.links.github} className="mt-4 flex items-center text-sm text-muted-foreground">
                <Github className="mr-2 size-4" />
                GitHub
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Links</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              dmnDev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
