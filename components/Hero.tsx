'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F7F7F7] to-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#F4C542]/10 text-[#1B263B] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Premium Business Consulting
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1B263B] leading-tight mb-6">
              Transform Your Business{' '}
              <span className="text-[#F4C542]">Strategy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We deliver innovative consulting solutions that drive growth,
              optimize operations, and unlock your organization's full
              potential in today's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group bg-[#1B263B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2D3E5F] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <button className="group bg-white text-[#1B263B] px-8 py-4 rounded-lg font-semibold border-2 border-[#1B263B] hover:bg-[#1B263B] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <PlayCircle size={20} />
                Watch Demo
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl font-bold text-[#F4C542]">500+</div>
                <div className="text-gray-600 mt-1">Clients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F4C542]">95%</div>
                <div className="text-gray-600 mt-1">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F4C542]">15+</div>
                <div className="text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-[#1B263B] to-[#2D3E5F] rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-10 right-10 w-32 h-32 bg-[#F4C542] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#F4C542] rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <div className="text-8xl font-bold mb-4">📊</div>
                  <div className="text-2xl font-semibold">
                    Data-Driven Solutions
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#F4C542] rounded-2xl p-6 shadow-xl">
              <div className="text-[#1B263B] font-bold text-lg">
                $2.5M+ Revenue Generated
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
