'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Metrics from '@/components/Metrics';
import ServicesShowcase from '@/components/ServicesShowcase';
import ProfileSection from '@/components/ProfileSection';
import ConsultCta from '@/components/ConsultCta';
import { motion, easeOut } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Users2, BadgeCheck, LineChart, Globe2, Building2, Sparkles, Eye, Target, ShieldCheck, Handshake, RefreshCw, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Poppins } from 'next/font/google';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// Hero-specific smoother variants
const heroLeft = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

const heroRight = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: easeOut,
      delay: 0.12,
    },
  },
};

const numberPoppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'] });

export default function AboutPage() {
  const [storyImgLoaded, setStoryImgLoaded] = useState(false);
  return (
    <div className="min-h-screen bg-[#f5f1e6]">
      <Navbar />

      {/* Hero */}
      <section className="pt-10 sm:pt-14 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Copy + Social proof + CTA */}
            <motion.div
              variants={heroLeft}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B263B] tracking-normal leading-normal md:leading-snug lg:leading-tight">
                  Acco Crunch Where
                  <br className="hidden sm:block" />
                  strategy meets <br />precision
                </h1>
                <p className="mt-5 text-sm sm:text-base text-[#433b33] leading-relaxed max-w-md">
                  At Acco Crunch, we’re more than just consultants &mdash; we’re strategic partners committed to
                  transforming the way businesses operate, grow, and succeed.
                </p>
              </div>

              <div className="space-y-6 mt-6">
                <div className="flex items-start gap-4">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="flex -space-x-2">
                        {['/p1.webp', '/p2.webp', '/p3.webp', '/p4.webp'].map((src, idx) => (
                          <div
                            key={src}
                            className="w-9 h-9 rounded-full overflow-hidden border border-[#f5f1e6] shadow-sm bg-[#e0d4bf]"
                            style={{ zIndex: 10 - idx }}
                          >
                            <Image
                              src={src}
                              alt={`Client profile ${idx + 1}`}
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-light text-[#1B263B] tracking-[0.08em] mb-1">1200+ Business Owners</h4>
                    <p className="text-sm text-[#6f645a]">Trusted Acco Crunch simplifying compliance, accelerating growth.</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#E8531A] px-6 py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-[#cf4510] transition-colors w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Image + Stats card */}
            <motion.div
              variants={heroRight}
              initial="hidden"
              animate="show"
              className="space-y-2"
            >
              <motion.div
                variants={fadeUp}
                className="relative h-[260px] sm:h-[320px] lg:h-[380px] rounded-lg overflow-hidden shadow-md bg-[#e0d4bf]"
              >
                <Image
                  src="/about.webp"
                  alt="Business consultant working at a desk"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#2b2118]/90 via-[#2b2118]/70 to-transparent" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-lg bg-white shadow-sm border border-gray-100 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 divide-opacity-70 px-4 py-5 sm:px-6 sm:py-8 gap-3 sm:gap-0"
              >
                {[
                  { label: 'Businesses incorporated', value: '1,200+' },
                  { label: 'Compliance filings processed', value: '5,000+' },
                  { label: 'Years of experience', value: '6+' },
                ].map((s) => (
                  <div key={s.label} className="px-2 sm:px-4 py-3 sm:py-0 flex items-center justify-center sm:justify-start text-center sm:text-left">
                    <div>
                      <div className={`text-base sm:text-lg font-light text-[#E8531A] ${numberPoppins.className}`}>{s.value}</div>
                      <div className="mt-1 text-sm text-[#1B263B]/80 leading-snug max-w-xs sm:max-w-[10rem]">{s.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bridge section */}
      <section className="bg-[#f5f1e6] py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1B263B] tracking-normal leading-normal md:leading-snug lg:leading-tight max-w-4xl mx-auto">
            Where financial clarity and smarter business structure come together
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#433b33] leading-relaxed max-w-2xl mx-auto">
            We support entrepreneurs and growing organizations in building stronger foundations. Through strategic taxation, accurate compliance, and intelligent business structuring, we ensure that companies operate not just legally — but with confidence, efficiency, and future-ready insight.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-8">
        <div className="mx-auto">
          <div className="bg-[#2a2a2a] rounded-lg p-4 sm:p-6 text-white">
            {/* Video/Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <motion.div 
                className="relative aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden"
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/about2.webp"
                  alt="Professional looking at tablet in front of modern building"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
              {/* Our Mission */}
              <div>
                <h3 className="text-white text-xl font-light tracking-[0.05em] mb-4 flex items-center">
                  <Target className="w-7 h-7 text-[#E8531A] mr-2" />
                  Our mission
                </h3>
                <p className="text-[#f5f1e6] mb-6 opacity-60">
                  We are committed to simplifying financial and legal complexity for businesses. Through data-driven advisory and disciplined compliance, we enable confident decision-making and long-term operational strength.
                </p>
                <ul className="list-disc list-inside text-[#f5f1e6] space-y-2 marker:text-[#E8531A]">
                  <li className="opacity-60">Strengthen compliance through proactive management</li>
                  <li className="opacity-60">Empower founders with clarity and control</li>
                </ul>
              </div>
              {/* Our Vision */}
              <div>
                <h3 className="text-white text-xl font-light tracking-[0.05em] mb-4 flex items-center">
                  <Eye className="w-7 h-7 text-[#E8531A] mr-2" />
                  Our vision
                </h3>
                <p className="text-[#f5f1e6] mb-6 opacity-60">
                  To be a trusted growth partner for organizations seeking smarter structure, strategic tax efficiency, and sustainable expansion backed by financial intelligence.
                </p>
                <ul className="list-disc list-inside text-[#f5f1e6] space-y-2 marker:text-[#E8531A]">
                  <li className="opacity-60">Every business benefits from expert strategy</li>
                  <li className="opacity-60">Decisions become compliant and insight-led</li>
                  <li className="opacity-60">Growth is secure, scalable, and future-ready</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesShowcase />

      <ProfileSection />

      <ConsultCta />

      <Footer />
    </div>
  );
}
