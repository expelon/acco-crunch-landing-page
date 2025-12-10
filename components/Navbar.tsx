'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !event.target || !(event.target as Element).closest('nav')) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <header className="w-full z-50 bg-[#f5f1e6]">
      <div className="bg-[#FFEB99] text-black py-2 px-4">
        <div className="container mx-auto text-center text-xs sm:text-sm">
          Limited slots: Free 30-Minute consultation this week + <Link href="/contact" className="underline hover:no-underline">Join them now!</Link>
        </div>
      </div>

      <nav className={`w-full bg-[#f5f1e6] transition-all duration-300`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center h-16 sm:h-18 lg:h-20">
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl lg:text-2xl font-bold">
                <span className="text-[#1B263B]">Acco</span> <span className="text-[#1B263B]">Crunch</span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#1B263B] transition-colors duration-300 font-medium relative text-sm lg:text-base hover:text-[#0a0f1f]"
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
              className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-[#1B1B1B] text-white px-5 py-2.5 shadow-sm hover:bg-black transition-all duration-200 text-sm hover:shadow-md"
            >
              Get started <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#1B263B] p-2 ml-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden bg-[#f5f1e6] border-t border-gray-200"
          >
            <div className="container mx-auto px-3 sm:px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block transition-colors duration-300 font-medium py-3 px-3 rounded-lg relative ${isActive ? 'text-[#1B263B] bg-gray-100' : 'text-[#1B263B] hover:bg-gray-50'}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline-mobile"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#1B263B] rounded-r"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B1B1B] text-white px-5 py-3 shadow-sm hover:bg-black transition-colors font-medium"
                >
                  Get started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </header>
  );
}
