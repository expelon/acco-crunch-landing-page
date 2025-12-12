import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Acco Crunch: Business Registration, Accounting, Tax & Trademark Experts | Kerala',
  description: 'Acco Crunch supports entrepreneurs with easy company registration, accurate accounting, and dependable compliance solutions for growth.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#f5f1e6]`}>
        {children}
      </body>
    </html>
  );
}
