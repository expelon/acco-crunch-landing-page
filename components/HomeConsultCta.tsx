"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeConsultCta() {
  return (
    <section className="py-12 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl overflow-hidden bg-[#14110f] text-white flex flex-col lg:flex-row min-h-[320px] lg:min-h-[360px]"
        >
          {/* Left: two equal dark cards, matching reference */}
          <div className="w-full lg:w-[42%] px-4 sm:px-6 py-4 sm:py-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
              <div className="rounded-lg border border-white/25 px-4 sm:px-6 lg:px-8 py-6 sm:py-7 lg:py-9 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                <div className="text-base sm:text-lg lg:text-xl font-normal leading-snug text-[#f5f1e6]">Book a Consultation</div>
                <Link
                  href="/contact"
                  className="mt-8 text-sm sm:text-base text-[#E8531A] underline underline-offset-4 decoration-[#E8531A] hover:opacity-80"
                >
                  Schedule now
                </Link>
              </div>

              <div className="rounded-lg border border-white/25 px-4 sm:px-6 lg:px-8 py-6 sm:py-7 lg:py-9 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                <div className="text-base sm:text-lg lg:text-xl font-normal leading-snug text-[#f5f1e6]">Talk on a call</div>
                <Link
                  href="/contact"
                  className="mt-8 text-sm sm:text-base text-[#E8531A] underline underline-offset-4 decoration-[#E8531A] hover:opacity-80"
                >
                  Call now
                </Link>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative w-full lg:w-[58%] h-[280px] sm:h-[340px] lg:h-[380px]">
            <Image
              src="/CTAimg.webp"
              alt="Consultation"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Black gradient on left side of image, fading to transparent on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0807] via-[#14110f]/60 to-transparent opacity-80 lg:opacity-90 pointer-events-none" />
          </div>
        </motion.div>

        {/* Bottom: subscribe bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-5 rounded-2xl bg-[#e8e3d6] px-5 py-4 sm:px-6 sm:py-5 flex flex-col md:flex-row items-stretch md:items-center gap-4"
        >
          <p className="text-[#1B263B] md:flex-1 text-sm sm:text-base">
            Get monthly strategies, tax updates, and business tips straight to your inbox.
          </p>

          <form className="w-full md:w-auto">
            <div className="flex items-stretch bg-white rounded-xl overflow-hidden">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-3 py-3 outline-none text-sm text-[#1B263B] placeholder-gray-500 min-w-0"
              />
              <button
                type="submit"
                className="px-3 bg-[#E8531A] text-white hover:bg-[#c74512] transition-colors flex items-center justify-center flex-shrink-0"
                style={{ minWidth: '44px', minHeight: '44px' }}
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
