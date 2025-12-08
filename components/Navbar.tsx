'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Career', href: '/career' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full z-50 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-[#1B263B]">Acco</span> <span className="text-[#1B263B]">Crunch</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#1B263B] transition-colors duration-300 font-medium relative"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1B263B]"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex-1 flex items-center justify-end">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-lg bg-[#1B1B1B] text-white px-5 py-2.5 shadow-sm hover:bg-black transition-colors"
            >
              Get started <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#1B263B] p-2 ml-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f5f1e6] border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-[#1B263B] transition-colors duration-300 font-medium py-2 relative"
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline-mobile"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1B263B]"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-lg bg-[#1B1B1B] text-white px-5 py-2.5 shadow-sm hover:bg-black transition-colors"
              >
                Get started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
