"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, TrendingUp, Calculator } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesShowcase() {
  return (
    <section className="py-16 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-10 lg:gap-14 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-lg overflow-hidden bg-[#e0d4bf] shadow-md h-[380px] sm:h-[440px] lg:h-[500px] lg:ml-16"
          >
            <Image
              src="/about3.webp"
              alt="Clients exploring advisory services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="px-6 sm:px-8 lg:px-12 flex flex-col h-full"
          >
            <motion.div variants={fadeUp} className="max-w-xl mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-[#2b2118]">
                Your business goals, Powered by our expert services
              </h2>
              <p className="mt-4 text-sm text-[#615b52] opacity-80">
                From structuring companies to strengthening compliance, we bridge the gap between legal foundations and business performance.
              </p>
            </motion.div>

            <div className="flex-grow flex flex-col justify-end">
              <motion.div
                variants={fadeUp}
                className="grid sm:grid-cols-3 gap-2 sm:gap-3"
              >
                {[
                  { label: "Business Registration & Legal Structuring", icon: <FileText className="w-5 h-5 text-[#E8531A]" /> },
                  { label: "Accounting, Taxation & Statutory Compliance", icon: <TrendingUp className="w-5 h-5 text-[#E8531A]" /> },
                  { label: "Strategic Finance & Business Growth Advisory", icon: <Calculator className="w-5 h-5 text-[#E8531A]" /> },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg bg-[#e9e4da] px-4 py-4 sm:py-5 flex flex-col justify-between shadow-sm min-h-[140px]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-[#1B263B]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              <Link href="/services">
                <motion.button
                  variants={fadeUp}
                  className="mt-2 sm:mt-3 inline-flex w-full items-center justify-center rounded-xl bg-white text-[#E8531A] text-xs sm:text-sm font-medium py-3 sm:py-3.5 shadow-sm hover:bg-[#e9e4da] transition-colors"
                >
                  Explore all services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
