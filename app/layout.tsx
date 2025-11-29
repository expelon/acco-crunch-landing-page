import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ConsultaPro - Business Consulting Excellence',
  description: 'Transform your business with strategic consulting solutions that drive growth and operational excellence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f8f4e5]`}>
        {children}
      </body>
    </html>
  );
}
