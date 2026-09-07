import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Whale Love',
  description: 'Premium dating and random chat platform',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
