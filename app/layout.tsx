import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ToastProvider } from '@/components/ToastProvider';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'ARCAT — AI-Powered Rural Climate Alert Toolkit',
  description: 'Empowering Farmers. Predicting Weather. Saving Lives.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
        </ToastProvider>
      </body>
    </html>
  );
}
