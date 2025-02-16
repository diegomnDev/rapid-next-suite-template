// components/Navbar.tsx
'use client';

import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-2xl font-bold">Rapid Next Suite Template</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {!isSignedIn
              ? (
                  <>
                    <SignInButton mode="modal">
                      <Button variant="outline">Sign In</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button>Sign Up</Button>
                    </SignUpButton>
                  </>
                )
              : (
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: 'w-10 h-10',
                      },
                    }}
                  />
                )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {!isSignedIn
              ? (
                  <div className="flex flex-col space-y-2">
                    <SignInButton mode="modal">
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button className="w-full">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </div>
                )
              : (
                  <div className="flex justify-center">
                    <UserButton />
                  </div>
                )}
          </div>
        </div>
      )}
    </nav>
  );
};
