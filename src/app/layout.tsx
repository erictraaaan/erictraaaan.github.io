import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from 'next';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js on GitHub Pages',
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}