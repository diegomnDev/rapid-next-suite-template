'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import {
  Code2,
  Container,
  Database,
  Github,
  Lock,
  Package,
  Palette,
  Rocket,
  Search,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const features = [
    {
      icon: <Package className="size-6 text-purple-500" />,
      title: 'Pre-configured Stack',
      description: 'TypeScript, ESLint (@antfu/config), commitlint, and semantic-release for robust development.',
    },
    {
      icon: <Palette className="size-6 text-blue-500" />,
      title: 'Beautiful UI',
      description: 'Stunning components with shadcn/ui, Tailwind CSS, and Framer Motion animations.',
    },
    {
      icon: <Zap className="size-6 text-yellow-500" />,
      title: 'Fast Development',
      description: 'Quick iterations with hot reload and developer-friendly tools like Zustand and Jotai for state management.',
    },
    {
      icon: <Lock className="size-6 text-green-500" />,
      title: 'Secure Setup',
      description: 'Built-in authentication with Clerk, form validation using Zod and react-hook-form.',
    },
    {
      icon: <Search className="size-6 text-red-500" />,
      title: 'SEO Optimized',
      description: 'Best practices for meta tags, OpenGraph, and structured data out of the box.',
    },
    {
      icon: <Container className="size-6 text-blue-400" />,
      title: 'Docker Ready',
      description: 'Production-ready Docker configuration with multi-stage builds and optimization.',
    },
    {
      icon: <Code2 className="size-6 text-indigo-500" />,
      title: 'Type Safety',
      description: 'End-to-end type safety with TypeScript and Zod schema validation.',
    },
    {
      icon: <Database className="size-6 text-orange-500" />,
      title: 'State Management',
      description: 'Flexible state management with Zustand for global state and Jotai for atomic state.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16 space-y-6 text-center"
        >
          <motion.h1
            className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
            variants={itemVariants}
          >
            Rapid Next.js Template Suite
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-xl text-muted-foreground"
            variants={itemVariants}
          >
            Your next project deserves a powerful foundation. Start building with our modern, type-safe template.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            <Button size="lg" className="gap-2">
              <Rocket className="size-4" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => window.open(siteConfig.links.github, '_blank')}
            >
              <Github className="size-4" />
              GitHub
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => {
            const uniqueKey = `${feature.title}-${index}`;
            return (
              <motion.div
                key={uniqueKey}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-full border-secondary transition-colors duration-300 hover:border-primary">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-muted-foreground">
            Built with 💜 using Next.js, TypeScript, Tailwind CSS, and shadcn/ui by dmnDev
          </p>
        </motion.div>
      </div>
    </div>
  );
}
