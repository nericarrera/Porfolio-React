'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange  // Evita parpadeo en carga inicial
    >
      {children}
    </NextThemesProvider>
  );
}