import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/sidebar-nav';
import { Toaster } from '@/components/ui/toaster';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Gemini GUI',
  description: 'Gemini PRO model GUI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        'flex bg-background font-sans antialiased',
        fontSans.variable,
      )}
      >
        <Toaster />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
