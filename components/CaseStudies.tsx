"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function CaseStudies() {
  const cases = [
    {
      title: "Corporate Structuring for a Manufacturing Unit",
      subtitle: "Optimized tax & compliance structure for a growing manufacturer",
      client: "Sunrise Equipments",
      solution:
        "We restructured the company into a more tax-efficient corporate model, ensured GST optimization, and created a compliance roadmap that aligned with their expansion plans.",
      metrics: [
        { value: "₹42Cr+", label: "Tax liability optimized over 3 years" },
        { value: "98%", label: "On-time compliance rate maintained annually" },
      ],
    },
    {
      title: "Startup Incorporation & Funding Support",
      subtitle: "Seamless incorporation & legal readiness for VC investment",
      client: "Nexova Tech — Founder: Arjun Rao",
      solution:
        "We incorporated the company as a private limited structure, set up accounting systems, and assisted in financial modelling for investor due diligence.",
      metrics: [
        { value: "₹3.5Cr", label: "Pre-seed investment secured" },
        { value: "100%", label: "ROC & tax compliance readiness" },
      ],
    },
    {
      title: "Multi-State GST Regularization",
      subtitle: "GST compliance recovery for logistics company",
      client: "Velocity Transport Solutions",
      solution:
        "Identified missed filings and reconciled multi-state GST data. Implemented a tracking system to prevent future defaults and penalties.",
      metrics: [
        { value: "₹18L", label: "Penalty savings achieved" },
        { value: "12 months", label: "Filings regularized across states" },
      ],
    },
    {
      title: "Trademark & Brand Protection Strategy",
      subtitle: "Brand safeguarding for a luxury skincare startup",
      client: "Amara Naturals — Founder: Anoop Singh",
      solution:
        "Conducted trademark search under our BrandSure™ process, filed registrations under three classes, and built a legal protection strategy.",
      metrics: [
        { value: "3 trademarks", label: "Filed & approved" },
        { value: "Zero", label: "Infringement challenges to date" },
      ],
    },
    {
      title: "Personal Income Tax Planning Excellence",
      subtitle: "100% Refund for IT Professional",
      client: "Sneha Anil, Senior IT Employee",
      solution:
        "Executed precise tax planning, optimized eligible deductions, and ensured full compliance to recover previously unclaimed benefits.",
      metrics: [
        { value: "₹1.8 Lakhs", label: "Refund received in full" },
        { value: "100%", label: "Tax refund achieved" },
      ],
    },
  ];

  const [idx, setIdx] = useState(0);
  const cs = cases[idx];
  const prev = () => setIdx((i) => (i - 1 + cases.length) % cases.length);
  const next = () => setIdx((i) => (i + 1) % cases.length);

  return (
    <section className="py-16 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-3xl leading-tight font-light text-[#1B263B]">
              <span className="block">Real-World case studies</span>
              <span className="block">that showcase our strategic impact</span>
            </h2>
          </div>
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <p className="mt-2 lg:mt-6 text-gray-700 text-sm sm:text-base leading-relaxed max-w-full lg:max-w-[360px] mx-auto lg:mx-0 lg:ml-auto lg:justify-self-end">
              Discover how our tailored accounting and consulting solutions delivered real-world business improvements.
            </p>
          </div>
        </div>

        {/* Two column cards */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {/* Left: Case study card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 md:mt-8 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200"
          >
            <div className="bg-[#F4C542]/60 text-[#1B263B] font-medium px-6 py-3">Case study</div>
            <div className="p-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-full h-full"
                >
                  <Image 
                    src={
                      idx === 0 
                        ? "/corporate.jpg" 
                        : idx === 1 
                          ? "/startup.webp" 
                          : idx === 2 
                            ? "/multi.webp" 
                            : idx === 3 
                              ? "/trademark.webp" 
                              : idx === 4 
                                ? "/personal.webp" 
                                : "/card.webp"
                    } 
                    alt="Case" 
                    fill 
                    className="object-cover" 
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[#1B263B]">
                {cs.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{cs.subtitle}</p>
              <p className="mt-1 text-sm text-gray-600">Client: {cs.client}</p>
            </div>
            <div className="px-4 sm:px-6 py-4 bg-[#f9f7f1] flex items-center justify-between">
              <button onClick={prev} className="inline-flex items-center gap-2 text-[#1B263B] hover:text-black px-4 py-2 rounded-lg transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="inline-flex items-center gap-2 text-[#1B263B] hover:text-black px-4 py-2 rounded-lg transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right: Solution & Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 md:mt-8 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200"
          >
            <div className="bg-[#F4C542]/60 text-[#1B263B] font-medium px-6 py-3">Solution & Result</div>
            <div className="p-6">
              <p className="text-gray-700">{cs.solution}</p>
              <div className="mt-6 divide-y divide-gray-200">
                {cs.metrics.map((m) => (
                  <div key={m.value + m.label} className="py-4 grid grid-cols-2 items-center">
                    <div className="flex items-center gap-3"><CheckCircle2 className="text-[#1B263B]" /><span className="font-semibold text-[#1B263B]">{m.value}</span></div>
                    <div className="text-right text-gray-700">{m.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-[#E8531A] text-white px-5 py-3 rounded-lg hover:bg-[#c74512] transition-colors"
              >
                Book your free consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
