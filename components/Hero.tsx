'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#fdfcf5] rounded-3xl shadow-md px-6 sm:px-10 lg:px-14 py-10 sm:py-14 mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B263B] leading-tight mb-4">
                Making every business move a confident one
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                End-to-end Business Registration, Tax Advisory, Compliance & Legal Support for Startups,
                Professionals, SMEs & Growth-Focused Companies.
              </p>
            </div>
            <div className="mt-4 rounded-2xl bg-[#F4C542]/10 px-6 py-5">
              <div className="grid grid-cols-3 gap-6 text-center sm:text-left">
                <div>
                  <div className="text-4xl font-bold text-[#F4C542]">500+</div>
                  <div className="text-gray-600 mt-2">Clients Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#F4C542]">95%</div>
                  <div className="text-gray-600 mt-2">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#F4C542]">15+</div>
                  <div className="text-gray-600 mt-2">Years Experience</div>
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
            <div className="relative w-full h-[560px] bg-gradient-to-br from-[#1B263B] to-[#2D3E5F] rounded-3xl p-8 overflow-hidden">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
