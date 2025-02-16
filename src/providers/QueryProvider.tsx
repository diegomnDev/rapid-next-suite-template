'use client';

import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

function QueryProvider({ children, queryClient }: Readonly<{ children: React.ReactNode; queryClient: QueryClient }>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
