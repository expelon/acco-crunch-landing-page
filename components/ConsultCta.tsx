"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConsultCta() {
  return (
    <section className="py-12 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: two light cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 sm:gap-5"
        >
          <div className="rounded-xl border border-[#e3ddcf] bg-[#f9f4e9] px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-between min-h-[150px]">
            <div className="text-sm sm:text-base text-[#1B263B]">Book a Consultation</div>
            <Link
              href="/contact"
              className="mt-6 text-sm sm:text-base text-[#E8531A] underline underline-offset-2 decoration-[#E8531A] hover:opacity-80"
            >
              Schedule now
            </Link>
          </div>

          <div className="rounded-xl border border-[#e3ddcf] bg-[#f9f4e9] px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-between min-h-[150px]">
            <div className="text-sm sm:text-base text-[#1B263B]">Talk on a call</div>
            <Link
              href="/contact"
              className="mt-6 text-sm sm:text-base text-[#E8531A] underline underline-offset-2 decoration-[#E8531A] hover:opacity-80"
            >
              Call now
            </Link>
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

          <form className="w-full md:w-auto md:min-w-[360px]">
            <div className="flex items-stretch bg-white rounded-xl overflow-hidden">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 outline-none text-sm sm:text-base text-[#1B263B] placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-5 sm:px-6 bg-[#E8531A] text-white hover:bg-[#c74512] transition-colors flex items-center justify-center"
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

