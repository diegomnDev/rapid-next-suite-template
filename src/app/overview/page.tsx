'use client';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SignInButton, SignUpButton, useAuth } from '@clerk/nextjs';

export default function OverviewPage() {
  const { userId } = useAuth();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {userId
            ? (
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Welcome to your Overview</CardTitle>
                      <CardDescription>
                        Here's what's happening with your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                          <CardHeader>
                            <CardTitle>Activity</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-2xl font-bold">12</p>
                            <p className="text-xs text-muted-foreground">
                              Active projects
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Tasks</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-2xl font-bold">8</p>
                            <p className="text-xs text-muted-foreground">
                              Pending tasks
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Progress</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-2xl font-bold">75%</p>
                            <p className="text-xs text-muted-foreground">
                              Overall completion
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            : (
                <Card className="mx-auto max-w-2xl">
                  <CardHeader>
                    <CardTitle>Welcome to MyApp</CardTitle>
                    <CardDescription>
                      Please sign in to access your overview and start using our amazing features.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="flex space-x-2">
                      <SignInButton mode="modal">
                        <Button
                          variant="outline"
                          className="w-full"
                        >
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button className="w-full">
                          Sign Up
                        </Button>
                      </SignUpButton>
                    </div>
                  </CardContent>
                </Card>
              )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
