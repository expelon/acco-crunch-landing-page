"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProfileSection() {
  return (
    <section className="py-16 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left side - Profile */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-lg shadow-xl p-2 max-w-none mx-auto lg:mx-0 lg:ml-8 w-full">
              {/* Image container */}
              <div className="relative aspect-[4/5] mb-3 overflow-hidden rounded-lg">
                <Image
                  src="/profile2.webp"
                  alt="Jaison Mullukattil"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Name and Position */}
              <div className="text-left ml-4">
                <h3 className="text-xl font-light tracking-wide text-[#1B263B] mb-1 mt-2">Jaison Mullukattil</h3>
                <p className="text-sm text-gray-600 mb-3">Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-[#1B263B] mb-6">
                We're more than compliance experts – We're growth enablers
              </h2>
              <p className="text-base text-gray-700 leading-relaxed max-w-md">
                Jaison Mullukattil is a visionary business strategist who elevates entrepreneurship through structured compliance and financial intelligence. His leadership inspires founders to operate strategically, scale responsibly, and build businesses that remain resilient, future-ready, and globally competitive.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
