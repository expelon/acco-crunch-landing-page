import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

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
      <body className={`${poppins.className} bg-[#f8f4e5]`}>
        {children}
      </body>
    </html>
  );
}
