"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Metrics() {
  return (
    <section className="py-20 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-[#1B263B]"
          >
            Driving meaningful results through measurable financial performance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-base sm:text-lg text-gray-600"
          >
            Measurable results that reflect our dedication to compliance, strategy, and business growth.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start md:divide-x md:divide-black/10">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:pr-8"
          >
            <div className="text-3xl font-bold text-[#E8531A]">5,000+</div>
            <div className="mt-2 inline-block rounded-xl overflow-hidden bg-white shadow-sm w-[180px] h-[120px]">
              <Image
                src="/complince.webp"
                alt="Business compliance filings"
                width={180}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-4 text-gray-700">Compliance filings processed</div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:px-8"
          >
            <div className="text-3xl font-bold text-[#E8531A]">1,200+</div>
            <div className="mt-2 inline-block rounded-xl overflow-hidden bg-white shadow-sm w-[180px] h-[120px]">
              <Image
                src="/buisnesses.webp"
                alt="Business incorporation services"
                width={180}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-4 text-gray-700">Businesses incorporated</div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:pl-8"
          >
            <div className="text-3xl font-bold text-[#E8531A]">₹80Cr+</div>
            <div className="mt-2 inline-block rounded-xl overflow-hidden bg-white shadow-sm w-[180px] h-[120px]">
              <Image
                src="/tax.webp"
                alt="Tax savings advisory"
                width={180}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-4 text-gray-700">Tax savings advised</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
