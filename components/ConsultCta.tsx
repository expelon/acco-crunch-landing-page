"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConsultCta() {
  return (
    <section className="py-10 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark CTA card with background image on the right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl text-white min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
        >
          {/* Background image on right with gradient overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0">
              <Image src="/card.webp" alt="Consultation" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f1b18]/95 via-[#1f1b18]/80 to-transparent" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-6 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                <div className="text-2xl sm:text-3xl font-semibold leading-tight">Book a
                  <br /> Consultation</div>
                <Link href="/contact" className="mt-8 sm:mt-10 inline-block text-[#E8531A] hover:text-white transition-colors">
                  Schedule now
                </Link>
              </div>
              <div className="rounded-xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                <div className="text-2xl sm:text-3xl font-semibold leading-tight">Talk on a call</div>
                <Link href="/contact" className="mt-8 sm:mt-10 inline-block text-[#E8531A] hover:text-white transition-colors">
                  Call now
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:min-h-[360px]" />
          </div>
        </motion.div>

        {/* Subscribe bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-5 rounded-2xl bg-[#e8e3d6] p-4 sm:p-5"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <p className="text-[#1B263B]/90 md:flex-1 text-sm sm:text-base">
              Get monthly strategies, tax updates, and business tips straight to your inbox.
            </p>
            <form className="w-full md:w-auto md:min-w-[420px]">
              <div className="flex items-stretch gap-2 bg-white rounded-xl overflow-hidden border border-black/10">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 outline-none text-[#1B263B] placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-5 sm:px-6 bg-[#E8531A] text-white hover:bg-[#c74512] transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
