"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Handshake, Users, Target, TrendingUp, Award, Plus, Minus } from 'lucide-react';
import { useRef, useState } from 'react';

export default function PartnershipsPage() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-8 sm:pt-10 pb-12 sm:pb-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top heading + copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-10 items-center"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-light text-[#1B263B] leading-snug sm:leading-relaxed lg:leading-[1.4]">
                Collaboration that strengthens services and client satisfaction
              </h1>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-xs sm:text-sm text-[#433b33] leading-relaxed">
                Gain trusted backend support, expand advisory solutions, and increase client value with our proven expertise, strict confidentiality, and structured service delivery excellence.
              </p>
            </div>
          </motion.div>

          {/* Main visual row */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 lg:mt-10 grid grid-cols-2 gap-1 lg:gap-2"
          >
            {/* Left image */}
            <div className="rounded-lg overflow-hidden shadow-md bg-[#e0d4bf] relative h-[180px] sm:h-[220px] lg:h-[400px]">
              <motion.div style={{ scale: imgScale }} className="w-full h-full">
                <Image
                  src="/partnership1.webp"
                  alt="Partners collaborating"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Right image with overlay card */}
            <div className="rounded-lg overflow-hidden shadow-md bg-[#e0d4bf] relative h-[180px] sm:h-[220px] lg:h-[400px]">
              <motion.div style={{ scale: imgScale }} className="w-full h-full">
                <Image
                  src="/partnership2.jpg"
                  alt="Business partnership discussion"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom info strip */}
          <div className="mt-3 lg:mt-4 rounded-xl bg-[#f0e8dc] px-4 sm:px-5 lg:px-6 py-4 sm:py-5 flex flex-col sm:flex-row gap-4 sm:items-center">
            {/* Mini card */}
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-[#f5f1e6] flex-shrink-0">
                <Image
                  src="/card.webp"
                  alt="Partnership success"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base text-[#1B263B] truncate">
                  Partnerships built on trust
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#433b33]">
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8531A]" />
                1,200+ Businesses incorporated
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8531A]" />
                5,000+ Compliance filings processed
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8531A]" />
                6+ Years of experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth services section above footer */}
      <section className="mt-12 sm:mt-16 pb-12 sm:pb-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top heading + copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-10 items-start mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-[#1B263B] leading-snug sm:leading-relaxed lg:leading-[1.5]">
              Strategic partnerships empowering scalable, compliant growth
            </h2>
            <p className="text-xs sm:text-sm text-[#433b33] leading-relaxed max-w-xl lg:justify-self-end">
              Expert partnership solutions that transform collaboration into growth opportunities. From compliance support to scalable service expansion — everything your clients need for confidence, efficiency, and long-term success, under one trusted network.
            </p>
          </motion.div>

          {/* Main container with image and clickable services */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl bg-[#f0e8dc] shadow-sm overflow-hidden border border-black/5"
          >
            <div className="p-2">
              {/* Inner container for image and items */}
              <div className="flex flex-col lg:flex-row gap-0">
                {/* Left: Full width image */}
                <div className="relative overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none flex-1">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/partnership3.webp"
                      alt="Strategic partnership collaboration"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Right: Clickable service points */}
                <div className="space-y-0 flex-1">
                  {[
                    {
                      id: 1,
                      icon: <Target className="text-[#E8531A]" size={18} />,
                      title: 'Proven Expertise',
                      description:
                        'Over 6+ years of specialized consulting experience spanning business incorporations, taxation, compliance, accounting, and strategic advisory. 600+ business establishments and compliance projects successfully executed. Led by experts with a multi-disciplinary background (CA, CS, Lawyer, Trademark Attorney, Tax Advisors).',
                    },
                    {
                      id: 2,
                      icon: <Users className="text-[#E8531A]" size={18} />,
                      title: 'Expand Without Operational Load',
                      description:
                        'Add compliance, registration, accounting, and advisory services to your portfolio without investment in internal resources. Support available under co-branded or white-label execution models. Client engagement can be performed under your brand identity or jointly with Acco Crunch.',
                    },
                    {
                      id: 3,
                      icon: <TrendingUp className="text-[#E8531A]" size={18} />,
                      title: 'Trust & Data Security',
                      description:
                        'Strict Non-Disclosure Agreement (NDA) protocols adhered to on every partnership engagement. Transparent communication, structured documentation, and process-driven execution for every project. Dedicated relationship and case management support ensuring high responsiveness and priority handling.',
                    },
                    {
                      id: 4,
                      icon: <Handshake className="text-[#E8531A]" size={18} />,
                      title: 'Revenue & Growth Synergy',
                      description:
                        'Customizable revenue-sharing or referral incentive structure aligned with project volume and partner category. Opportunity for joint initiatives, including workshops, startup support seminars, compliance awareness webinars, and strategic business growth programs.',
                    },
                  ].map((item, index) => (
                    <div
                      key={item.id}
                      className={`overflow-hidden bg-white transition-all duration-300 ${
                        index === 0 ? 'rounded-tr-lg' : index === 3 ? 'rounded-br-lg' : ''
                      }`}
                    >
                      <button
                        onClick={() => {
                          setExpandedItems(prev => 
                            prev.includes(item.id) 
                              ? prev.filter(id => id !== item.id)
                              : [...prev, item.id]
                          );
                        }}
                        className="w-full px-4 sm:px-5 py-11 sm:py-12 flex items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center rounded-md bg-[#ffe4d2] w-7 h-7 text-[#E8531A] flex-shrink-0">
                            {item.icon}
                          </span>
                          <span className="text-sm sm:text-base font-medium text-[#1B263B] text-left">
                            {item.title}
                          </span>
                        </div>
                        <div className="text-[#E8531A] flex-shrink-0">
                          {expandedItems.includes(item.id) ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                      </button>
                      
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: expandedItems.includes(item.id) ? 'auto' : 0,
                          opacity: expandedItems.includes(item.id) ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-5 sm:pb-6">
                          <p className="text-sm text-[#645446] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End inner container */}
            </div>
            {/* End main container */}

            {/* Bottom strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 bg-[#f0e8dc] border-t border-[#f3e1cf]">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <p className="text-xs sm:text-sm text-[#433b33]">
                  75+ trusted partnerships — yours could be next.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E8531A] text-white px-5 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-[#c74512] transition-colors w-full sm:w-auto"
              >
                Let's Get Started
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
