'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center pt-2 sm:pt-3 md:pt-6 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 md:pt-4 pb-8">
        <div className="grid md:grid-cols-2 gap-2 md:gap-3 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-auto md:h-[560px] flex flex-col"
          >
            <div className="bg-[#fdfcf5] rounded-2xl shadow-md px-6 sm:px-10 lg:px-12 pt-24 pb-16 sm:pt-28 sm:pb-20 mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1B263B] leading-snug tracking-wide mb-4">
                <span className="md:whitespace-nowrap">Making every business</span>
                <span className="inline md:hidden"> </span>
                <br className="hidden md:block" />
                <span className="md:whitespace-nowrap">move a confident one</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl lg:max-w-xl xl:max-w-lg text-left">
                End-to-end Business Registration, Tax Advisory, Compliance & Legal Support for Startups,
                Professionals, SMEs & Growth-Focused Companies.
              </p>
            </div>
            <div className="h-2 md:h-3 lg:h-4 bg-inherit"></div>
            <div className="mt-0 rounded-xl bg-[#FFEB99] px-6 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-14">
              <div className="grid grid-cols-3 gap-8 text-left items-start">
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-normal text-black leading-none">1000+</div>
                  <div className="text-[#1B263B]/80">Clients Served</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-normal text-black leading-none">98%</div>
                  <div className="text-[#1B263B]/80">Success Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-normal text-black leading-none">6+</div>
                  <div className="text-[#1B263B]/80">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[560px] rounded-2xl overflow-hidden">
              <Image src="/img 1.png" alt="Hero visual" fill priority className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
